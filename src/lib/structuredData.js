import { businessInfo, faqs, offerings, pageMeta, projects, siteConfig } from "@/constants";
import { absoluteUrl } from "@/lib/site";

const personId = () => `${absoluteUrl("/")}#person`;
const businessId = () => `${absoluteUrl("/")}#business`;
const websiteId = () => `${absoluteUrl("/")}#website`;

export const personSchema = () => ({
  "@type": "Person",
  "@id": personId(),
  name: businessInfo.name,
  alternateName: businessInfo.legalName,
  jobTitle: businessInfo.jobTitle,
  url: absoluteUrl("/"),
  image: absoluteUrl("/icons/icon-512.png"),
  email: `mailto:${siteConfig.email}`,
  alumniOf: { "@type": "CollegeOrUniversity", name: businessInfo.alumniOf },
  worksFor: { "@type": "Organization", name: businessInfo.worksFor },
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    addressCountry: businessInfo.country,
  },
  sameAs: siteConfig.socials.map((social) => social.url),
});

// LocalBusiness (ProfessionalService subtype) with a city-level address.
export const businessSchema = () => ({
  "@type": "ProfessionalService",
  "@id": businessId(),
  name: `${businessInfo.name}, ${businessInfo.jobTitle}`,
  description: pageMeta.home.description,
  url: absoluteUrl("/"),
  image: absoluteUrl(pageMeta.home.image),
  logo: absoluteUrl("/icons/icon-512.png"),
  email: siteConfig.email,
  founder: { "@id": personId() },
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    addressCountry: businessInfo.country,
  },
  areaServed: businessInfo.areaServed.map((name) => ({ "@type": "Country", name })),
  knowsAbout: ["Web design", "Web development", "E-commerce", "Product design", "UI/UX design"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design and development services",
    itemListElement: offerings.map((offering) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: offering.title, description: offering.description },
    })),
  },
  sameAs: siteConfig.socials.map((social) => social.url),
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": websiteId(),
  name: businessInfo.name,
  url: absoluteUrl("/"),
  inLanguage: "en",
  publisher: { "@id": personId() },
});

export const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const webPageSchema = (meta, type = "WebPage") => ({
  "@type": type,
  "@id": `${absoluteUrl(meta.path)}#webpage`,
  url: absoluteUrl(meta.path),
  name: meta.title,
  description: meta.description,
  inLanguage: "en",
  isPartOf: { "@id": websiteId() },
  about: { "@id": personId() },
  primaryImageOfPage: absoluteUrl(meta.image),
});

export const faqSchema = () => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export const projectListSchema = () => ({
  "@type": "ItemList",
  name: "Web design and development projects",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.source_code_link,
      genre: project.category,
      creator: { "@id": personId() },
    },
  })),
});

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });
