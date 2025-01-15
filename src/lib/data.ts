import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import realbetter from "../../public/realbetter.png";
import collegeBharat from "../../public/collegeBharat.png";
import techvins from "../../public/techvins.png";
import gaurevKapur from "../../public/gaurevKapur.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    location: "India",
    description:
      "Completed my BCA, building a strong foundation in computer science and programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
  },
  {
    title: "Diploma in Software Development",
    location: "India",
    description:
      "Completed a diploma program focused on software development, enhancing my skills in MERN stack and modern technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Frontend Developer",
    location: "Gurugram, India",
    description:
      "Working as a frontend developer with over 1.5 years of experience. My expertise includes React, Next.js, Tailwind CSS, and building dynamic and responsive web applications. I am passionate about creating seamless user experiences and constantly learning new technologies.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "B2B Real Estate Platform",
    description:
      "Worked as a frontend developer for 1 year, focusing on the platform's user interface and admin panel. This platform connects real estate agents, developers, and builders to facilitate property matching. Leveraged modern technologies to create a responsive and dynamic user experience.",
    tags: ["Next.js", "Tailwind CSS", "React Admin", "TypeScript"],
    imageUrl: realbetter,
  },

  {
    title: "College Bharat",
    description:
      "Worked as the frontend lead developer for a platform designed to help students explore articles, blogs, and resources for government exams and college admissions. The platform enables students to find college details, exam brochures, and search for colleges across India.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: collegeBharat,
  },

  {
    title: "TechVins Website",
    description:
      "Developed the company's official website independently using Next.js and Tailwind CSS. The site achieved a perfect 100 PageSpeed score and is optimized for performance and user experience. The project involved creating a dynamic and responsive multi-page website tailored to the company's branding.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Performance Optimization",
      "100 PageSpeed",
    ],
    imageUrl: techvins,
  },

  {
    title: "Gaurav Kapur's Personal Website",
    description:
      "Designed and developed the personal website for the owner of RealBetter. Built using Next.js and Tailwind CSS, the site highlights the owner's professional achievements and personal brand in a sleek and user-friendly interface.",
    tags: ["Next.js", "Tailwind CSS", "React", "Personal Branding"],
    imageUrl: gaurevKapur,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Framer Motion",
  "GraphQL",
  "WordPress",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "Git",
  "Github",
  "Postman",
] as const;
