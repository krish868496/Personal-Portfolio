"use client";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../../lib/data";
import Project from "./Project";
import { useSectionInView } from "@/hooks/hook";
import React from "react";

const Projects = () => {
  const { ref } = useSectionInView("Projects");


  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
