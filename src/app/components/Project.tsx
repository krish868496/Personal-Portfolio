"use client"
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "../../lib/data";
import Image from "next/image";
import {motion} from 'framer-motion'
import { useSectionInView } from "@/hooks/hook";

type Project = (typeof projectsData)[number]; 

export default function Project({ title, description, tags, imageUrl }: Project) {
  const sRef = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({
   target: sRef,
   offset: ["0.1", "1.33 1"],
 });
 const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition "
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full group-even:ml-[20rem] dark:bg-white/10 dark:hover:bg-white/20 dark:text-white ">
        <h3 className="font-semibold text2xl">{title}</h3>
        <p className="mt-2 leading-relaxed dark:text-white/70">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
          {tags?.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0/7] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2  transition group-even:-right-[initial] group-hover:scale-[1.04] group-even:-left-40   "
      />
    </motion.section>
  );
}
