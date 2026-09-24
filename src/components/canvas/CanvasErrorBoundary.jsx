import { Component } from "react";

// Keeps the rest of the page rendering when WebGL is unavailable or a 3D scene fails.
class CanvasErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export const withCanvasFallback = (CanvasComponent) => {
  const Wrapped = (props) => (
    <CanvasErrorBoundary>
      <CanvasComponent {...props} />
    </CanvasErrorBoundary>
  );
  return Wrapped;
};

export default CanvasErrorBoundary;
