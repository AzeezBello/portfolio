import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const textStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 600,
    marginTop: 12,
  };

  return (
    <Html as="div" center style={containerStyle}>
      <span className="canvas-loader" aria-hidden="true" />
      <p style={textStyle} role="status">
        Loading 3D scene {Math.round(progress)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
