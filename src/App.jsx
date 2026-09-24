import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import { routeImporters } from "@/routes";

const ProjectsPage = lazy(routeImporters["/projects"]);
const AboutPage = lazy(routeImporters["/about"]);
const ContactPage = lazy(routeImporters["/contact"]);
const LegalPage = lazy(routeImporters["/terms"]);
const NotFound = lazy(() => import("@/pages/NotFound"));

const App = () => (
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
);

export default App;
