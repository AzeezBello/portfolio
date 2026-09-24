import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import SocialLinks from "@/components/SocialLinks";
import { services } from "@/constants";
import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 15, scale: 1, speed: 450 }} className="xs:w-[230px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="" className="w-14 h-14 object-contain" loading="lazy" />
        <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <section className={`${styles.paddingX} mx-auto max-w-7xl pt-28 sm:pt-36 pb-10`}>
    <motion.div variants={textVariant()} initial="hidden" animate="show">
      <p className={styles.sectionSubText}>About me</p>
      <h1 className={styles.sectionHeadText}>Designer. Developer. Partner.</h1>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      animate="show"
      className="mt-6 max-w-3xl space-y-5 text-[17px] leading-[30px] text-muted-foreground"
    >
      <p>
        I&apos;m Ademola Bello, a Computer Science graduate from Crescent University, Abeokuta, with a
        passion for branding, product design and web development. Today I&apos;m Tech Lead at Viral Ad
        Media, where I lead brand launches, website redesigns and digital campaigns for clients ranging
        from local businesses to national non-profits.
      </p>
      <p>
        I work closely with every client to understand their goals, then design and build products
        around them. From first sketch to launch, my aim is simple: deliver high-quality work that meets
        or exceeds expectations and actually moves the needle for your business.
      </p>
      <SocialLinks showLabels className="pt-2" />
    </motion.div>

    <h2 className="mt-16 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">Core stack</h2>
    <div className="mt-6 flex flex-wrap gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </section>
);

export default About;
