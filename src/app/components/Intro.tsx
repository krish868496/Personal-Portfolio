"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useSectionInView } from "@/hooks/hook";
import { useActiveSectionContext } from "@/context/activeContext";
const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="developer"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex justify-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="flex justify-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer group text-gray-950 px-7 focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{" "}
          <FaCloudDownloadAlt className="transition opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          href=""
          className="flex justify-center gap-2 p-4 text-gray-700 transition bg-white border rounded-full cursor-pointer focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white text-gray-700 p-4 flex justify-center gap-2 text-[1.35rem] focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition cursor-pointer border border-black/10 rounded-full dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
