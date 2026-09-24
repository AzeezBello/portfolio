// The public origin of the site, e.g. https://www.example.com (no trailing slash).
// Set VITE_SITE_URL in the environment; the prerender step refuses to build without it.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "").trim().replace(/\/+$/, "");

// Absolute URL for a site path. The home page keeps its trailing slash ("https://example.com/"),
// matching the sitemap; other paths have none ("https://example.com/about").
export const absoluteUrl = (path = "/") => {
  const cleanPath = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
  return `${SITE_URL}${cleanPath}`;
};
