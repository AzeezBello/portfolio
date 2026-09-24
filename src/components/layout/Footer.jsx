import React from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";

import { LogoMark } from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { legalLinks, navLinks, siteConfig } from "@/constants";
import { styles } from "@/styles";

const Footer = () => (
  <footer className="border-t border-border/60">
    <div className={`${styles.paddingX} mx-auto max-w-7xl py-12 text-sm text-muted-foreground`}>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="font-semibold text-white">
                {siteConfig.name}
                <span className="text-ember">.</span>
              </p>
              <p className="mt-0.5">{siteConfig.role}</p>
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-ember"
          >
            <SiGmail className="h-4 w-4 text-ember" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <SocialLinks className="mt-5" />
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white">Explore</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition-colors hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white">Legal</p>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition-colors hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <p className="mt-12 border-t border-border/60 pt-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
