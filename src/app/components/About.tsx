"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/hook";

export default function About() {
 const {ref} = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Computer Applications</span> and currently
        work as a <span className="font-medium">frontend developer</span>. My
        professional experience is focused on building responsive, user-friendly
        interfaces, while I have also developed{" "}
        <span className="font-medium">personal MERN stack projects</span> to
        gain hands-on full-stack experience. I enjoy translating designs into
        clean, functional UIs and solving real-world frontend challenges. I am
        continuously learning, exploring{" "}
        <span className="font-medium">Generative AI</span>, and expanding my
        skills across the stack. I am open to{" "}
        <span className="font-medium">
          frontend and full-stack opportunities
        </span>
        .
      </p>

      <p>
        <span className="italic">Beyond work</span>, I enjoy reading, learning
        new technologies, exploring GenAI tools, and keeping up with industry
        trends.
      </p>
    </motion.section>
  );
}
