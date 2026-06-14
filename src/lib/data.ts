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
"Built a strong foundation in Computer Science, studying Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming, and Web Technologies. Developed problem-solving skills and a deep understanding of software development fundamentals.",
icon: React.createElement(LuGraduationCap),
date: "2018 – 2021",
},

{
title: "Diploma in Software Engineering",
location: "India",
description:
"Received industry-focused training in software development, web technologies, database design, software architecture, and application development. Worked on practical projects involving frontend, backend, and full-stack development while strengthening engineering and debugging skills.",
icon: React.createElement(LuGraduationCap),
date: "2021 – 2022",
},

{
title: "Frontend Engineer",
location: "Gurugram, India",
description:
"Developing scalable web applications, enterprise dashboards, and high-performance user experiences using React.js, Next.js, TypeScript, and modern frontend technologies. Built role-based systems, complex business workflows, reusable component libraries, SEO-optimized websites, and performance-focused applications while collaborating closely with product, design, and backend teams.",
icon: React.createElement(FaReact),
date: "2023 – Present",
},
] as const;



export const projectsData = [
{
title: "FRU Logistics – Enterprise Logistics & Operations Platform",
description:
"Built a large-scale logistics management platform supporting customers, vendors, agents, and administrators through secure role-based access control. Developed complex business workflows for order lifecycle management, quotations, pricing, taxation, invoicing, shipment tracking, manifests, and operational analytics. Architected reusable form systems, dynamic validations, server-driven tables, and scalable frontend architecture optimized for enterprise operations.",
tags: [
"Next.js",
"React",
"TypeScript",
"Redux Toolkit",
"RBAC",
"Admin Dashboard",
"Enterprise Systems",
"REST APIs",
"Complex Workflows",
],
imageUrl: logisticsWebsite,
},

{
title: "TechVins Official Website – High Performance Marketing Platform",
description:
"Engineered a backend-driven page builder powering 50+ SEO-optimized pages through reusable component architecture and dynamic content rendering. Achieved a perfect Lighthouse score of 100/100 by implementing Core Web Vitals optimization, code splitting, lazy loading, image optimization, and SEO-first rendering strategies. Built scalable layouts enabling content teams to publish updates without developer involvement.",
tags: [
"Next.js",
"React",
"TypeScript",
"SEO",
"Core Web Vitals",
"Lighthouse",
"Performance Optimization",
"SSR",
"JSON-LD",
],
imageUrl: techvins,
},

{
title: "Smart Shramik – Workforce Marketplace & Operations Dashboard",
description:
"Developed a role-based workforce management platform connecting customers with skilled workers through streamlined booking and operational workflows. Built onboarding, KYC verification, worker assignment, pricing, payouts, reporting, and customer support modules while implementing scalable dashboard architecture, advanced filtering, file uploads, and reusable management systems.",
tags: [
"Next.js",
"React",
"TypeScript",
"RBAC",
"Marketplace",
"Dashboard Analytics",
"Admin Systems",
"REST APIs",
],
imageUrl: shramikAdmin,
},

{
title: "College Bharat – Education & Career Discovery Platform",
description:
"Contributed to a large-scale education platform helping students explore colleges, exams, admissions, fees, scholarships, and career opportunities. Developed high-performance listings, search experiences, article systems, bookmarking features, and content discovery modules while improving responsiveness, accessibility, and frontend performance across multiple high-traffic pages.",
tags: [
"Next.js",
"React",
"TypeScript",
"Search Systems",
"Content Platform",
"Performance Optimization",
"Responsive Design",
],
imageUrl: collegeBharat,
},
];



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

