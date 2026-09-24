import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { fadeIn } from "@/utils/motion";

const ProjectCard = ({ index, name, category, description, tags, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("up", "spring", (index % 3) * 0.12, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="h-full"
  >
    <a
      href={source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} (opens in a new tab)`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Card className="flex h-full flex-col overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/60 group-hover:shadow-card">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          <img
            src={image}
            alt={`Homepage of the ${name} website`}
            width={1120}
            height={700}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition group-hover:bg-primary">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <Badge variant="outline" className="w-fit">
            {category}
          </Badge>
          <CardTitle className="mt-3 text-[22px]">{name}</CardTitle>
          <CardDescription className="mt-2 line-clamp-3 leading-relaxed">{description}</CardDescription>
          <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4">
            {tags.map((tag) => (
              <span key={tag.name} className={`text-[13px] font-medium ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  </motion.div>
);

export default ProjectCard;
