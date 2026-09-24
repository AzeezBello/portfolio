import React from "react";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { textVariant } from "@/utils/motion";

const PageHeader = ({ eyebrow, title, description, children }) => (
  <motion.header variants={textVariant()} initial="hidden" animate="show" className="max-w-3xl">
    <p className={styles.sectionSubText}>{eyebrow}</p>
    <h1 className={styles.sectionHeadText}>{title}</h1>
    {description && <p className="mt-4 text-[17px] leading-[30px] text-muted-foreground">{description}</p>}
    {children}
  </motion.header>
);

export default PageHeader;
