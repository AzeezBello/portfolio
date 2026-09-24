import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppWindow, ArrowRight, Globe, PenTool, ShoppingCart } from "lucide-react";

import CtaBanner from "@/components/CtaBanner";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { faqs, featuredProjectNames, offerings, processSteps, projects } from "@/constants";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const offeringIcons = {
  globe: Globe,
  cart: ShoppingCart,
  app: AppWindow,
  design: PenTool,
};

const featuredProjects = featuredProjectNames
  .map((name) => projects.find((project) => project.name === name))
  .filter(Boolean);

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <motion.div
    variants={textVariant()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
  >
    <p className={styles.sectionSubText}>{eyebrow}</p>
    <h2 className="mt-2 text-[32px] font-black leading-tight text-white sm:text-[44px]">{title}</h2>
    {description && <p className="mt-4 text-[17px] leading-[30px] text-muted-foreground">{description}</p>}
  </motion.div>
);

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <Hero />

      <section className={`${styles.paddingX} mx-auto max-w-7xl py-16 sm:py-24`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects"
            description="A few sites and products I've designed and built for clients across healthcare, e-commerce, SaaS and more."
          />
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link to="/projects">
              View all {projects.length} projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-black-100/60">
        <div className={`${styles.paddingX} mx-auto max-w-7xl py-16 sm:py-24`}>
          <SectionHeading
            eyebrow="What I do"
            title="Everything you need to launch and grow online"
            description="Design and development under one roof, so your project goes from idea to live without hand-off headaches."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering, index) => {
              const Icon = offeringIcons[offering.icon];
              return (
                <motion.div
                  key={offering.title}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="h-full bg-tertiary/80 p-6 transition-colors hover:border-primary/50">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="mt-5 text-lg">{offering.title}</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">{offering.description}</CardDescription>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.paddingX} mx-auto max-w-7xl py-16 sm:py-24`}>
        <SectionHeading eyebrow="How it works" title="A simple, transparent process" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full border-dashed bg-transparent">
                <CardContent className="p-6">
                  <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <CardTitle className="mt-3 text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2 leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className={`${styles.paddingX} mx-auto max-w-3xl py-16 sm:py-20`}>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" align="center" />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBanner />
    </>
  );
};

export default Home;
