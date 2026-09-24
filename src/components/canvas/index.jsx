import React, { lazy } from "react";

import ClientOnly from "../ClientOnly";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

// three.js scenes are split into their own chunks and only rendered in the browser,
// so page content loads first and prerendering never touches WebGL.
const Earth = lazy(() => import("./Earth"));
const Ball = lazy(() => import("./Ball"));
const Computers = lazy(() => import("./Computers"));
const Stars = lazy(() => import("./Stars"));

const clientCanvas = (CanvasComponent) => {
  const Wrapped = (props) => (
    <ClientOnly>
      <CanvasErrorBoundary>
        <CanvasComponent {...props} />
      </CanvasErrorBoundary>
    </ClientOnly>
  );
  return Wrapped;
};

export const EarthCanvas = clientCanvas(Earth);
export const BallCanvas = clientCanvas(Ball);
export const ComputersCanvas = clientCanvas(Computers);
export const StarsCanvas = clientCanvas(Stars);
