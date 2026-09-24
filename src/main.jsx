import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { routeImporters } from "./routes";
import "./index.css";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const start = async () => {
  if (rootElement.firstElementChild) {
    // Prerendered page: load the current route's code first so hydration matches the HTML.
    const importer = routeImporters[window.location.pathname.replace(/\/+$/, "") || "/"];
    if (importer) await importer();
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
};

start();
