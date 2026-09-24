import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";

import App from "./App";

// Renders a route to HTML, waiting for lazy pages to load, and returns the page markup plus head tags.
export const render = (url) =>
  new Promise((resolve, reject) => {
    const helmetContext = {};
    let html = "";
    let didError = false;

    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
      final(callback) {
        const { helmet } = helmetContext;
        const head = [helmet.title, helmet.priority, helmet.meta, helmet.link, helmet.script]
          .map((part) => part.toString())
          .filter(Boolean)
          .join("\n    ");
        resolve({ html, head });
        callback();
      },
    });

    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          if (didError) return;
          stream.pipe(sink);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = true;
          reject(error);
        },
      }
    );
  });

export { prerenderRoutes } from "./routes";
export { faqs, offerings, pageMeta, projects, siteConfig } from "./constants";
export { SITE_URL } from "./lib/site";
