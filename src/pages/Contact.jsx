import React from "react";

import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const ContactPage = () => {
  useDocumentTitle("Contact");

  return (
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  );
};

export default ContactPage;
