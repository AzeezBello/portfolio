import React from "react";
import { FaBehance, FaGithub } from "react-icons/fa";

import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

const icons = {
  github: FaGithub,
  behance: FaBehance,
};

const SocialLinks = ({ className, showLabels = false }) => (
  <ul className={cn("flex items-center gap-3", className)}>
    {siteConfig.socials.map((social) => {
      const Icon = icons[social.icon];
      return (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} (opens in a new tab)`}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-border text-muted-foreground transition-colors hover:border-ember/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              showLabels ? "px-4 py-2 text-sm font-medium" : "h-10 w-10 justify-center"
            )}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            {showLabels && social.name}
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
