import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => (
  <section className="flex flex-col items-center py-10 px-2 min-h-screen">
    <h2 className="text-3xl font-bold text-blue-300 mb-2">Projects</h2>
    <p className="text-lg text-gray-300 text-center max-w-xl mb-8">
      Here are some of my web and mobile test automation projects, where I use tools like Selenium, Appium, and Allure to deliver robust testing solutions.
    </p>
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);