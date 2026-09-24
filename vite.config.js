import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Production builds need the public site URL for canonical tags, the sitemap and social images.
const assertSiteUrl = (value) => {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      "VITE_SITE_URL is missing or invalid. Set it to the site's public origin, e.g. VITE_SITE_URL=https://www.example.com"
    );
  }
  if (url.protocol !== "https:" || url.pathname.replace(/\/+$/, "") !== "" || url.search || url.hash) {
    throw new Error(`VITE_SITE_URL must be an https origin with no path, query or hash (got "${value}").`);
  }
};

export default defineConfig(({ command, mode, ssrBuild, isSsrBuild }) => {
  const isSsr = Boolean(isSsrBuild ?? ssrBuild);
  const env = loadEnv(mode, process.cwd(), "");
  if (command === "build") assertSiteUrl(env.VITE_SITE_URL || process.env.VITE_SITE_URL);

  return {
    plugins: [react()],
    define: {
      __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Bundle packages whose ESM builds Node can't load directly into the server renderer.
    ssr: {
      noExternal: ["react-icons", "react-helmet-async", "react-vertical-timeline-component", "react-tilt"],
    },
    build: {
      sourcemap: false,
      // three.js is only loaded on demand by the 3D scenes, so its chunk doesn't affect first load.
      chunkSizeWarningLimit: 950,
      rollupOptions: isSsr
        ? undefined
        : {
            onwarn(warning, warn) {
              // three-mesh-bvh feature-detects BatchedMesh (`THREE.BatchedMesh || null`), which three r153
              // doesn't export. It's handled at runtime, so this one warning is expected and safe to skip.
              if (warning.code === "MISSING_EXPORT" && warning.id?.includes("three-mesh-bvh") && warning.binding === "BatchedMesh") {
                return;
              }
              warn(warning);
            },
            output: {
              manualChunks(id) {
                // Keep Vite's preload helper out of the lazily loaded three.js chunk.
                if (id.includes("vite/preload-helper")) return "react-vendor";
                if (!id.includes("node_modules")) return undefined;
                if (/[\\/]node_modules[\\/](three|three-stdlib|three-mesh-bvh|@react-three|maath|troika-|meshline|camera-controls|stats-gl|@monogrid|detect-gpu|suspend-react|zustand|its-fine)/.test(id)) {
                  return "three-vendor";
                }
                if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run|react-helmet-async|react-fast-compare|invariant|shallowequal)[\\/]/.test(id)) {
                  return "react-vendor";
                }
                if (/[\\/]node_modules[\\/]framer-motion[\\/]/.test(id)) return "motion";
                return undefined;
              },
            },
          },
    },
  };
});
