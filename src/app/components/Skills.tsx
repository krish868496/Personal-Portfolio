"use client";
import React from "react";
import { skillsData } from "../../lib/data";
import { useSectionInView } from "@/hooks/hook";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (ind: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * ind },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <div id="Skills" ref={ref}>
      <h3 className="font-semibold text2xl">My Skills</h3>
      <ul className="flex flex-wrap justify-center gap-2 text-xl text-gray-800 max-w-[50rem]">
        {skillsData?.map((skill, ind) => (
          <motion.li
            className="bg-white  rounded-xl border-black/[0.1] px-5 py-3 dark:bg-white/10 dark:text-white/80 "
            key={ind}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={ind}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
