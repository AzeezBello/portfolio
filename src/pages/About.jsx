import React from "react";

import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import { trailFor } from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { pageMeta } from "@/constants";

const AboutPage = () => {
  const trail = trailFor(pageMeta.about);

  return (
    <>
      <Seo meta={pageMeta.about} pageType="AboutPage" breadcrumbs={trail} />
      <About breadcrumbs={trail} />
      <Tech />
      <Experience />
      <CtaBanner title="Let's build something together" />
    </>
  );
};

export default AboutPage;
