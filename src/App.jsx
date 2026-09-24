import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";

const ProjectsPage = lazy(() => import("@/pages/Projects"));
const AboutPage = lazy(() => import("@/pages/About"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const LegalPage = lazy(() => import("@/pages/Legal"));

const PageFallback = () => <div className="min-h-screen" />;

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<LegalPage key="terms" page="terms" />} />
            <Route path="privacy" element={<LegalPage key="privacy" page="privacy" />} />
            <Route path="disclaimer" element={<LegalPage key="disclaimer" page="disclaimer" />} />
            <Route path="refund-policy" element={<LegalPage key="refund" page="refund" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
