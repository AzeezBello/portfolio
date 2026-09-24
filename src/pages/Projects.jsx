import React from "react";

import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Works from "@/components/Works";
import { projects } from "@/constants";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { styles } from "@/styles";

const ProjectsPage = () => {
  useDocumentTitle("Projects");

  return (
    <>
      <section className={`${styles.paddingX} mx-auto max-w-7xl pt-28 sm:pt-36 pb-6`}>
        <PageHeader
          eyebrow="My work"
          title="Projects"
          description={`${projects.length} live websites and products I've designed and built, from healthcare and e-commerce to SaaS and nonprofits. Click any project to visit the live site.`}
        />
        <div className="mt-10">
          <Works />
        </div>
      </section>
      <CtaBanner title="Want results like these?" />
    </>
  );
};

export default ProjectsPage;
