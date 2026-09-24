import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const STOP_WORDS = new Set(["of", "and", "&", "inc", "inc.", "ltd", "ltd."]);

// Builds a short monogram (e.g. "Viral Ad Media" -> "VA", "ScholarX" -> "SX") for the timeline icon.
const getInitials = (name) => {
  const words = name
    .split(/[\s,()]+/)
    .filter((word) => word && !STOP_WORDS.has(word.toLowerCase()));
  const [first = "", second] = words;
  if (/^[A-Z]{2,}$/.test(first)) return first.slice(0, 2);
  if (second) return `${first[0]}${second[0]}`.toUpperCase();
  const innerCapital = first.slice(1).match(/[A-Z]/);
  return (innerCapital ? `${first[0]}${innerCapital[0]}` : first[0] || "").toUpperCase();
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#10142a",
      border: "1px solid #1f2540",
      boxShadow: "none",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1f2540" }}
    date={experience.date}
    iconStyle={{ background: "#10142a" }}
    icon={
      <div
        className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-ember/25 to-amber/10 text-[17px] font-black tracking-tight text-ember"
        aria-hidden="true"
      >
        {getInitials(experience.company_name)}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-muted-foreground text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`${experience.company_name}-${index}-${point.slice(0, 20)}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company_name}-${experience.date}-${experience.title}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
