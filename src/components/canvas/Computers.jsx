import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Preload, Sparkles, useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";

import CanvasLoader from "../Loader";

const EMBER = "#f16334";
const AMBER = "#ffb547";
const SCREEN_BLUE = "#5b8cff";

// Camera sits at [20, 3, 5]; keep drag rotation within a range around that angle.
const CAMERA_AZIMUTH = Math.atan2(20, 5);

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

const ComputerModel = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf", undefined, (loader) => {
    loader.setDRACOLoader(new DRACOLoader());
  });

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.72 : 0.54}
      position={isMobile ? [0, -2.3, -1.6] : [0, -2.05, -1.1]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

// Tilts the workstation slightly toward the pointer for a subtle parallax effect.
const PointerRig = ({ children, enabled }) => {
  const group = useRef();

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    const targetY = enabled ? pointer.x * 0.18 : 0;
    const targetX = enabled ? -pointer.y * 0.05 : 0;
    const t = 1 - Math.exp(-4 * delta);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, targetY, t);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, targetX, t);
  });

  return <group ref={group}>{children}</group>;
};

const Scene = ({ isMobile, reduceMotion }) => (
  <>
    <ambientLight intensity={0.18} />
    <hemisphereLight intensity={0.25} color="#b9c6ff" groundColor="#050816" />
    {/* warm key light from the left, in the brand amber */}
    <spotLight
      position={[-18, 30, 12]}
      angle={0.16}
      penumbra={1}
      intensity={2.2}
      color={AMBER}
      castShadow
      shadow-mapSize={1024}
    />
    {/* cool rim light from behind to separate the model from the background */}
    <directionalLight position={[-6, 6, -12]} intensity={1.1} color={SCREEN_BLUE} />
    {/* monitor glow spilling onto the desk, plus an ember accent from the front */}
    <pointLight position={[0.6, 0.4, -1.2]} intensity={6} distance={6} decay={2} color={SCREEN_BLUE} />
    <pointLight position={[2.5, -1.4, 2.5]} intensity={8} distance={8} decay={2} color={EMBER} />

    <PointerRig enabled={!reduceMotion && !isMobile}>
      <Float
        speed={reduceMotion ? 0 : 1.4}
        rotationIntensity={reduceMotion ? 0 : 0.12}
        floatIntensity={reduceMotion ? 0 : 0.35}
        floatingRange={[-0.08, 0.08]}
      >
        <MemoizedComputerModel isMobile={isMobile} />
      </Float>
    </PointerRig>

    <ContactShadows
      position={[0, isMobile ? -2.35 : -2.1, 0]}
      opacity={0.55}
      scale={14}
      blur={2.6}
      far={4}
      color="#000000"
    />

    {!reduceMotion && (
      <Sparkles
        count={isMobile ? 24 : 48}
        scale={[9, 5, 7]}
        position={[0, 0.2, 0]}
        size={2.2}
        speed={0.35}
        color={AMBER}
        opacity={0.7}
      />
    )}
  </>
);

const ComputersCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const containerRef = useRef(null);
  const [inView, setInView] = useState(true);

  // Stop rendering the scene while the hero is scrolled out of view.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const frameloop = !inView ? "never" : reduceMotion ? "demand" : "always";

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        frameloop={frameloop}
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [20, 3, 5], fov: isMobile ? 30 : 27 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.6}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            minAzimuthAngle={CAMERA_AZIMUTH - 0.8}
            maxAzimuthAngle={CAMERA_AZIMUTH + 0.6}
          />
          <Scene isMobile={isMobile} reduceMotion={reduceMotion} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;
