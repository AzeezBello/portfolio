import React from "react";

import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Works from "@/components/Works";
import { pageMeta, projects } from "@/constants";
import Breadcrumbs, { trailFor } from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { projectListSchema } from "@/lib/structuredData";
import { styles } from "@/styles";

const ProjectsPage = () => {
  const trail = trailFor(pageMeta.projects);

  return (
    <>
      <Seo meta={pageMeta.projects} pageType="CollectionPage" breadcrumbs={trail} schema={[projectListSchema()]} />
      <section className={`${styles.paddingX} mx-auto max-w-7xl pt-28 sm:pt-36 pb-6`}>
        <Breadcrumbs items={trail} />
        <PageHeader
          eyebrow="My work"
          title="Projects"
          description={`${projects.length} live websites and products I've designed and built, from healthcare and e-commerce to SaaS and nonprofits. Click any project to visit the live site.`}
        />
        <div className="mt-10">
          <h2 className="sr-only">All projects</h2>
          <Works />
        </div>
      </section>
      <CtaBanner title="Want results like these?" />
    </>
  );
};

export default ProjectsPage;
