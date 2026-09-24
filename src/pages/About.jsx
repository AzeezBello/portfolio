import React from "react";

import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const AboutPage = () => {
  useDocumentTitle("About");

  return (
    <>
      <About />
      <Tech />
      <Experience />
      <CtaBanner title="Let's build something together" />
    </>
  );
};

export default AboutPage;
