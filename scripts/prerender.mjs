// Prerenders every route to static HTML and writes sitemap.xml, robots.txt and llms.txt.
// Runs after `vite build` (client) and `vite build --ssr` (server renderer).
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const server = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, prerenderRoutes, pageMeta, projects, siteConfig, offerings, SITE_URL } = server;

if (!SITE_URL) throw new Error("VITE_SITE_URL was not baked into the build.");

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder.");
}

const count = (html, regex) => (html.match(regex) || []).length;
const problems = [];
const ogImages = new Set();

// Checks each rendered page so a missing tag fails the build instead of shipping.
const audit = (route, html) => {
  const where = `${route.path} (${route.file})`;
  const headHtml = html.slice(0, html.indexOf("</head>"));
  const titles = [...headHtml.matchAll(/<title[^>]*>([^<]*)<\/title>/g)].map((match) => match[1]);
  if (titles.length !== 1) problems.push(`${where}: expected 1 <title>, found ${titles.length}`);
  if (titles.some((title) => /vibe|react|vite/i.test(title))) problems.push(`${where}: title mentions a framework or placeholder`);
  if (count(html, /<title[^>]*><\/title>/g) > 0) problems.push(`${where}: empty <title> element in markup`);
  if (count(html, /<meta[^>]+name="description"/g) !== 1) problems.push(`${where}: expected 1 meta description`);
  if (count(html, /<h1[\s>]/g) !== 1) problems.push(`${where}: expected exactly 1 <h1>, found ${count(html, /<h1[\s>]/g)}`);
  const isIndexable = route.sitemap !== false;
  if (isIndexable && count(html, /<link[^>]+rel="canonical"/g) !== 1) problems.push(`${where}: expected 1 canonical link`);
  if (isIndexable && !html.includes('"@context":"https://schema.org"')) problems.push(`${where}: missing JSON-LD`);
  const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)?.[1] || "";
  if (description.length < 70 || description.length > 160) problems.push(`${where}: meta description is ${description.length} characters (want 70-160)`);
  const ogImage = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]*)"/)?.[1] || "";
  if (!ogImage.startsWith(`${SITE_URL}/`)) problems.push(`${where}: og:image is not an absolute site URL`);
  else ogImages.add(ogImage.slice(SITE_URL.length));
  if (count(html, /<img(?![^>]*\salt=)[^>]*>/g) > 0) problems.push(`${where}: <img> without alt attribute`);
};

const titles = new Set();
const descriptions = new Set();

for (const route of prerenderRoutes) {
  const { html, head } = await render(route.path);
  const page = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  audit(route, page);

  const title = page.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];
  const description = page.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)?.[1];
  if (titles.has(title)) problems.push(`${route.path}: duplicate title "${title}"`);
  if (descriptions.has(description)) problems.push(`${route.path}: duplicate meta description`);
  titles.add(title);
  descriptions.add(description);

  await fs.writeFile(path.join(distDir, route.file), page);
}

for (const image of ogImages) {
  try {
    await fs.access(path.join(distDir, image));
  } catch {
    problems.push(`social share image ${image} does not exist in dist/`);
  }
}

if (problems.length) {
  throw new Error(`Prerender checks failed:\n  - ${problems.join("\n  - ")}`);
}

const today = new Date().toISOString().slice(0, 10);
const url = (routePath) => (routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`);
const indexable = prerenderRoutes.filter((route) => route.sitemap !== false);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (route) => `  <url>
    <loc>${url(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const metaByPath = Object.fromEntries(Object.values(pageMeta).map((meta) => [meta.path, meta]));
const llms = `# ${siteConfig.name}

> ${pageMeta.home.description}

${siteConfig.name} is a ${siteConfig.role.toLowerCase()} based in Lagos, Nigeria, working with clients in Nigeria, the United Kingdom and the United States. Contact: ${siteConfig.email}.

## Services

${offerings.map((offering) => `- ${offering.title}: ${offering.description}`).join("\n")}

## Pages

${indexable
  .map((route) => `- [${metaByPath[route.path].title}](${url(route.path)}): ${metaByPath[route.path].description}`)
  .join("\n")}

## Projects

${projects.map((project) => `- [${project.name}](${project.source_code_link}) (${project.category}): ${project.description}`).join("\n")}

## Profiles

${siteConfig.socials.map((social) => `- [${social.name}](${social.url})`).join("\n")}
`;

await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await fs.writeFile(path.join(distDir, "robots.txt"), robots);
await fs.writeFile(path.join(distDir, "llms.txt"), llms);
await fs.rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${prerenderRoutes.length} pages for ${SITE_URL} and wrote sitemap.xml, robots.txt, llms.txt.`);
