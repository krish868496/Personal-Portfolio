import SectionHeading from "./SectionHeading";
import { projectsData } from "../../lib/data";
import Project from "./Project";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData?.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;


