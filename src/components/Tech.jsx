import React from "react";

import { BallCanvas } from "@/components/canvas";
import { technologies } from "@/constants";
import { styles } from "@/styles";

const Tech = () => (
  <section className={`${styles.paddingX} mx-auto max-w-7xl py-10`} aria-labelledby="tools-heading">
    <h2 id="tools-heading" className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
      Tools I use
    </h2>
    <ul className="mt-8 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <li key={name} className="h-28 w-28" role="img" aria-label={name} title={name}>
          <BallCanvas icon={icon} />
        </li>
      ))}
    </ul>
  </section>
);

export default Tech;
