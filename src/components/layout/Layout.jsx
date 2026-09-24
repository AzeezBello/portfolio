import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const Layout = () => (
  <div className="relative z-0 flex min-h-screen flex-col bg-background">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
