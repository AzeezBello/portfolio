import React from "react";

import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";
import { trailFor } from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { pageMeta } from "@/constants";

const ContactPage = () => {
  const trail = trailFor(pageMeta.contact);

  return (
    <div className="relative z-0">
      <Seo meta={pageMeta.contact} pageType="ContactPage" breadcrumbs={trail} />
      <Contact breadcrumbs={trail} />
      <div aria-hidden="true">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default ContactPage;
