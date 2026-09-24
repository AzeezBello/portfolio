import React from "react";
import { Helmet } from "react-helmet-async";

import { businessInfo } from "@/constants";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, businessSchema, graph, personSchema, webPageSchema, websiteSchema } from "@/lib/structuredData";

// Renders the title, description, canonical, social tags and JSON-LD for a page.
const Seo = ({ meta, pageType = "WebPage", breadcrumbs, schema = [] }) => {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);

  const nodes = [websiteSchema(), personSchema(), businessSchema(), webPageSchema(meta, pageType), ...schema];
  if (breadcrumbs) nodes.push(breadcrumbSchema(breadcrumbs));

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {!meta.noindex && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />

      {!meta.noindex && <script type="application/ld+json">{JSON.stringify(graph(...nodes))}</script>}
    </Helmet>
  );
};

export default Seo;
