// Route table shared by the client, the server renderer and the prerender script.
// `file` is the HTML file each route is prerendered to; hosts serve it at the clean URL.
export const routeImporters = {
  "/projects": () => import("@/pages/Projects"),
  "/about": () => import("@/pages/About"),
  "/contact": () => import("@/pages/Contact"),
  "/terms": () => import("@/pages/Legal"),
  "/privacy": () => import("@/pages/Legal"),
  "/disclaimer": () => import("@/pages/Legal"),
  "/refund-policy": () => import("@/pages/Legal"),
};

export const prerenderRoutes = [
  { path: "/", file: "index.html", changefreq: "monthly", priority: "1.0" },
  { path: "/projects", file: "projects.html", changefreq: "monthly", priority: "0.9" },
  { path: "/about", file: "about.html", changefreq: "yearly", priority: "0.8" },
  { path: "/contact", file: "contact.html", changefreq: "yearly", priority: "0.8" },
  { path: "/terms", file: "terms.html", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", file: "privacy.html", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", file: "disclaimer.html", changefreq: "yearly", priority: "0.3" },
  { path: "/refund-policy", file: "refund-policy.html", changefreq: "yearly", priority: "0.3" },
  { path: "/404", file: "404.html", sitemap: false },
];
