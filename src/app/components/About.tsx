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
  <span className="font-medium">Computer Applications</span> and currently work
  as a <span className="font-medium">Frontend Engineer</span> with experience
  building scalable web applications, enterprise dashboards, and high-performance
  user interfaces using React.js, Next.js, and TypeScript. My professional work
  includes logistics, workforce management, and content-driven platforms where I
  focus on creating responsive, accessible, and maintainable applications while
  following modern frontend architecture and engineering best practices.
</p>

<p className="mb-3">
  Beyond frontend development, I have built{" "}
  <span className="font-medium">full-stack MERN applications</span> featuring
  authentication, role-based access control, payment gateway integrations,
  REST APIs, and database-driven workflows. I actively study{" "}
  <span className="font-medium">System Design, Machine Coding, Data Structures & Algorithms, and Computer Science fundamentals</span>
  to strengthen my problem-solving skills and build scalable software systems.
</p>

<p>
  <span className="italic">Outside of work</span>, I enjoy learning new
  technologies, exploring Generative AI tools, reading engineering blogs,
  solving coding challenges, and staying updated with modern software
  development practices. I am passionate about continuous learning and always
  looking for opportunities to grow as a software engineer.
</p>
    </motion.section>
  );
}
