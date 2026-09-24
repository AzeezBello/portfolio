import Earth from "./Earth";
import Ball from "./Ball";
import Computers from "./Computers";
import Stars from "./Stars";
import { withCanvasFallback } from "./CanvasErrorBoundary";

export const EarthCanvas = withCanvasFallback(Earth);
export const BallCanvas = withCanvasFallback(Ball);
export const ComputersCanvas = withCanvasFallback(Computers);
export const StarsCanvas = withCanvasFallback(Stars);
