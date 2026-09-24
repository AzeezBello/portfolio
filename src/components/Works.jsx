import React, { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { cn } from "@/lib/utils";

const ALL = "All";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = useMemo(() => {
    const counts = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {});
    return [[ALL, projects.length], ...Object.entries(counts)];
  }, []);

  const visible =
    activeCategory === ALL ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map(([category, count]) => {
          const isActive = category === activeCategory;
          return (
            <Button
              key={category}
              type="button"
              size="sm"
              variant={isActive ? "default" : "outline"}
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span className={cn("text-xs", isActive ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {count}
              </span>
            </Button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
