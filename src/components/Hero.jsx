import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ComputersCanvas } from "@/components/canvas";
import { projects, siteConfig } from "@/constants";
import { styles } from "@/styles";
import { fadeIn } from "@/utils/motion";

const stats = [
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: `${__BUILD_YEAR__ - siteConfig.startYear}+`, label: "Years experience" },
  { value: "3", label: "Countries served" },
];

const Hero = () => (
  <section className="relative w-full overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat">
    <div
      className={`${styles.paddingX} relative mx-auto grid max-w-7xl items-center gap-6 pb-10 pt-28 sm:pt-32 lg:min-h-screen lg:grid-cols-[1.1fr_1fr] lg:pb-16`}
    >
      <motion.div variants={fadeIn("up", "tween", 0, 0.6)} initial="hidden" animate="show" className="relative z-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[13px] font-medium text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </p>

        <h1 className="mt-6 text-[40px] font-black leading-[1.08] text-white xs:text-[48px] sm:text-[60px] lg:text-[68px]">
          I design &amp; build websites that{" "}
          <span className="bg-gradient-to-r from-ember to-amber bg-clip-text text-transparent">
            grow your business.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-[17px] leading-[30px] text-muted-foreground sm:text-[19px]">
          Hi, I&apos;m Ademola, a web developer and product designer. From Atlanta clinics to Lagos
          fashion brands and UK e-commerce, I ship fast, polished sites and products that turn
          visitors into customers.
        </p>

        <div className="mt-8 flex flex-col gap-3 xs:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">View my work</Link>
          </Button>
        </div>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-x-6 border-t border-border/70 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-black text-white">{stat.value}</dd>
              <dd className="mt-1 text-[13px] leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <div
        className="relative h-[280px] sm:h-[440px] lg:h-[620px]"
        role="img"
        aria-label="Interactive 3D model of a desktop workstation with a code editor on screen"
      >
        <ComputersCanvas />
      </div>
    </div>
  </section>
);

export default Hero;
