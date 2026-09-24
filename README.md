# Ademola Bello: Portfolio

Portfolio and business website for Ademola Bello, web developer and product designer based in Lagos, Nigeria.

Built with React 18, Vite, Tailwind CSS, shadcn/ui and three.js. Every route is prerendered to static HTML at build time, with its own title, meta description, canonical URL, social image and structured data.

## Requirements

- Node.js 18 or newer
- The public site URL, set as `VITE_SITE_URL`

## Getting started

```bash
npm install
cp .env.example .env   # then set VITE_SITE_URL
npm run dev            # http://localhost:5173
```

`VITE_SITE_URL` is optional in development. Production builds stop with an error if it is missing or isn't an `https` origin, so no page can ship with a wrong canonical URL.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the client, builds the server renderer, prerenders every route and writes `sitemap.xml`, `robots.txt` and `llms.txt` |
| `npm run preview` | Serves `dist/` locally |
| `npm run lint` | Lints `src/` and `scripts/` |

The prerender step also checks every page and fails the build if a page is missing its title, meta description, canonical link, structured data or single `<h1>`, has a duplicate title or description, or references a social image that doesn't exist.

## Project structure

```text
public/               Static files: icons, social images (og/), 3D models, web manifest
scripts/prerender.mjs Prerenders routes and generates sitemap.xml, robots.txt, llms.txt
src/
  components/         Page sections, layout, shadcn/ui components (ui/), 3D scenes (canvas/)
  constants/          Site content: projects, services, FAQs, legal pages, page metadata (seo.js)
  lib/                Helpers: site URL, structured data, class names
  pages/              One component per route
  entry-server.jsx    Server renderer used by the prerender step
  main.jsx            Browser entry (hydrates prerendered HTML)
  routes.js           Route list shared by the browser, server and prerender step
```

## Adding a page

1. Create the page in `src/pages/` and render `<Seo meta={pageMeta.yourPage} />` with one `<h1>`.
2. Add its metadata to `pageMeta` in `src/constants/seo.js` (unique title and a 70 to 160 character description).
3. Add the route to `src/App.jsx`, `src/routes.js` (`routeImporters` and `prerenderRoutes`).
4. Add a 1200×630 social image to `public/og/` if it needs its own.

## Deployment

The site deploys as static files. On Vercel, set `VITE_SITE_URL` in the project's environment variables. The build command is `npm run build` and the output directory is `dist`. `vercel.json` enables clean URLs (`/projects` serves `projects.html`), and unknown paths return `404.html` with a 404 status.
