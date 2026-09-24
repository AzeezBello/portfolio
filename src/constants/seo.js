// Per-page metadata. Titles and descriptions are unique for every route.
export const pageMeta = {
  home: {
    path: "/",
    title: "Ademola Bello | Web Developer & Product Designer in Lagos",
    description:
      "Ademola Bello designs and builds fast, conversion-focused websites, e-commerce stores and web apps for brands and startups in Nigeria, the UK and the US.",
    image: "/og/home.jpg",
    imageAlt: "Ademola Bello: websites that grow your business",
  },
  projects: {
    path: "/projects",
    title: "Web Design & Development Projects | Ademola Bello",
    description:
      "Live websites and products designed and built by Ademola Bello, from healthcare clinics and e-commerce stores to SaaS platforms and nonprofits.",
    image: "/og/projects.jpg",
    imageAlt: "Portfolio of web design and development projects by Ademola Bello",
    breadcrumb: "Projects",
  },
  about: {
    path: "/about",
    title: "About Ademola Bello | Web Developer & Product Designer",
    description:
      "Meet Ademola Bello, a Lagos-based web developer and product designer and Tech Lead at Viral Ad Media, designing and building for the web since 2016.",
    image: "/og/about.jpg",
    imageAlt: "About Ademola Bello, web developer and product designer",
    breadcrumb: "About",
  },
  contact: {
    path: "/contact",
    title: "Start a Project | Contact Ademola Bello",
    description:
      "Tell Ademola Bello about your website, e-commerce store or web app. Share your goals and budget and get ideas, a rough timeline and next steps.",
    image: "/og/contact.jpg",
    imageAlt: "Start a project with Ademola Bello",
    breadcrumb: "Contact",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions | Ademola Bello",
    description:
      "The terms that apply to this website and to design and development services from Ademola Bello, covering quotes, payments, revisions and ownership.",
    image: "/og/legal.jpg",
    imageAlt: "Ademola Bello legal information",
    breadcrumb: "Terms & Conditions",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Ademola Bello",
    description:
      "How Ademola Bello collects, uses and protects the information you share through this website's contact form or by email, and the rights you have.",
    image: "/og/legal.jpg",
    imageAlt: "Ademola Bello legal information",
    breadcrumb: "Privacy Policy",
  },
  disclaimer: {
    path: "/disclaimer",
    title: "Disclaimer | Ademola Bello",
    description:
      "Important information about the portfolio work, trademarks, external links and results described on Ademola Bello's website.",
    image: "/og/legal.jpg",
    imageAlt: "Ademola Bello legal information",
    breadcrumb: "Disclaimer",
  },
  refund: {
    path: "/refund-policy",
    title: "Refund Policy | Ademola Bello",
    description:
      "How deposits, milestone payments, third-party costs and refund requests are handled for design and development projects with Ademola Bello.",
    image: "/og/legal.jpg",
    imageAlt: "Ademola Bello legal information",
    breadcrumb: "Refund Policy",
  },
  notFound: {
    path: "/404",
    title: "Page Not Found | Ademola Bello",
    description: "The page you were looking for could not be found on Ademola Bello's website.",
    image: "/og/home.jpg",
    imageAlt: "Ademola Bello: websites that grow your business",
    noindex: true,
  },
};

// Business details used in structured data. City-level address only.
export const businessInfo = {
  name: "Ademola Bello",
  legalName: "Azeez Ademola Bello",
  jobTitle: "Web Developer & Product Designer",
  locality: "Lagos",
  region: "Lagos",
  country: "NG",
  areaServed: ["Nigeria", "United Kingdom", "United States"],
  alumniOf: "Crescent University, Abeokuta",
  worksFor: "Viral Ad Media",
};
