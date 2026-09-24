import React, { Suspense, useEffect, useState } from "react";

// Renders children only in the browser, after hydration. Used for WebGL scenes,
// which can't be prerendered and are loaded as separate chunks.
const ClientOnly = ({ children, fallback = null }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback;
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default ClientOnly;
