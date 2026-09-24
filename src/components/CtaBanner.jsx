import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import GmailIcon from "@/components/GmailIcon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { styles } from "@/styles";

const CtaBanner = ({
  title = "Have a project in mind?",
  description = "Tell me what you're building. I'll reply with ideas, a rough timeline and next steps.",
}) => (
  <section className={`${styles.paddingX} mx-auto max-w-7xl py-16`}>
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-tertiary via-black-100 to-background p-8 sm:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-white sm:text-[42px] sm:leading-[1.15]">{title}</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${siteConfig.email}`}>
              <GmailIcon /> Email me
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
