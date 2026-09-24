import { useEffect } from "react";

import { siteConfig } from "@/constants";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | ${siteConfig.role}`;
  }, [title]);
};

export default useDocumentTitle;
