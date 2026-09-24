import React from "react";
import { Link, NavLink } from "react-router-dom";

import PageHeader from "@/components/PageHeader";
import { legalLastUpdated, legalLinks, legalPages, pageMeta, siteConfig } from "@/constants";
import Breadcrumbs, { trailFor } from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { cn } from "@/lib/utils";
import { styles } from "@/styles";

const LegalPage = ({ page }) => {
  const { title, intro, sections } = legalPages[page];
  const meta = pageMeta[page];
  const trail = trailFor(meta);

  return (
    <section className={`${styles.paddingX} mx-auto max-w-7xl pt-28 sm:pt-36 pb-20`}>
      <Seo meta={meta} breadcrumbs={trail} />
      <Breadcrumbs items={trail} />
      <PageHeader eyebrow="Legal" title={title} description={intro}>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {legalLastUpdated}</p>
      </PageHeader>

      <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Legal pages" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {legalLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "bg-card text-white" : "text-muted-foreground hover:text-white"
                    )
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-3xl space-y-10">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-white">
                <span className="mr-2 text-ember">{index + 1}.</span>
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-white">Questions?</h2>
            <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
              Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-white underline-offset-4 hover:underline">
                {siteConfig.email}
              </a>{" "}
              or use the{" "}
              <Link to="/contact" className="font-medium text-white underline-offset-4 hover:underline">
                contact form
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default LegalPage;
