"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/hook";

export default function About() {
 const {ref} = useSectionInView('About')
  // const { ref, inView } = useInView();
  // const {setActiveSection} = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection("About");
  //   }
  // }, [inView])

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
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Applications</span>, I started my
        career as a <span className="font-medium">frontend developer</span>.
        Along the way, I expanded my skill set to include{" "}
        <span className="font-medium">backend development</span> using{" "}
        <span className="font-medium">MongoDB, Express, and Node.js</span>.{" "}
        <span className="italic">My favorite part of development</span> is
        bringing designs to life and creating seamless user experiences. I{" "}
        <span className="underline">enjoy</span> solving challenges that enhance
        both functionality and aesthetics. I am always eager to learn new
        technologies and improve my craft. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, learning new technologies, and exploring ways to enhance my
        skills. I also like watching tech-related videos and staying updated
        with industry trends. In my free time, I find joy in relaxing with a
        good book and occasionally experimenting with new tools and frameworks
        to expand my knowledge.
      </p>
    </motion.section>
  );
}
