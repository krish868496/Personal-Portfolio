import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import logisticsWebsite from "../../public/logisticsWebsite.png";
import collegeBharat from "../../public/collegeBharat.png";
import techvins from "../../public/techvins.png";
import shramikAdmin from "../../public/shramikAdmin.png";

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
      "Completed a Bachelor’s degree in Computer Applications, building a strong foundation in computer science fundamentals including programming, data structures, databases, and software development principles.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2021",
  },
  {
    title: "Diploma in Software Development",
    location: "India",
    description:
      "Completed a diploma focused on practical software development with hands-on experience in modern web technologies. Strengthened problem-solving skills and gained exposure to full-stack concepts using the MERN ecosystem through personal and academic projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2022",
  },
  {
    title: "Frontend Developer",
    location: "Gurugram, India",
    description:
      "Working as a frontend developer building scalable, performance-optimized web applications using React and Next.js. Actively involved in developing complex admin dashboards, role-based interfaces, reusable component systems, and improving application performance, usability, and maintainability.",
    icon: React.createElement(FaReact),
    date: "2023 – Present",
  },
] as const;


export const projectsData = [
  {
    title: "College Bharat – Education & Career Platform",
    description:
      "Led frontend development for a scalable platform helping students explore colleges, exams, and govt job updates. Built reusable UI components, advanced search, article & college listings, and personalized bookmarks. Optimized performance, responsive design, and accessibility across devices.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
    ],
    imageUrl: collegeBharat,
  },

  {
    title: "TechVins Official Website",
    description:
      "Built the company’s marketing website end-to-end with high performance, SEO, and maintainable architecture. Achieved 100 PageSpeed score via lazy loading, code splitting, and optimized DOM. Ensured responsive, clean, and accessible UI.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Performance Optimization",
      "SEO",
      "Web Vitals",
    ],
    imageUrl: techvins,
  },

  {
    title: "Logistics Admin CRM & Operations Platform",
    description:
      "Sole frontend engineer for a logistics admin platform managing customers, vendors, and agents. Implemented multi-step order workflows, step-locked onboarding, dynamic pricing, bulk CSV uploads, dispute management, and role-based access. Focused on data integrity, enterprise UX, and reusable components.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "React Hook Form",
      "Admin Systems",
      "Role-Based Access",
      "Frontend Validation",
    ],
    imageUrl: logisticsWebsite,
  },

  {
    title: "Shramik Admin Panel – Service Marketplace Dashboard",
    description:
      "Developed a role-based admin dashboard for a service marketplace connecting customers with skilled professionals. Built onboarding, pricing workflows, worker management, and operational dashboards. Ensured scalable frontend architecture, validations, and reusable components.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Admin Systems",
      "Role-Based Access",
      "Complex Workflows",
      "Frontend Validation",
    ],
    imageUrl: shramikAdmin,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "React Hook Form",
  "REST APIs",
  "Form Validation",
  "Role-Based Access Control (RBAC)",
  "Admin Dashboards",
  "Performance Optimization",
  "SEO",
  "Web Vitals",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "Git",
  "GitHub",
  "Postman",
  "Framer Motion",
] as const;

