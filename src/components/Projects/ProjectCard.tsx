import React from "react";
import { Project } from "@/data/projects";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-card mb-10">
    <div className="project-header">
      <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
      <div className="text-md text-gray-400 mb-1">{project.subtitle}</div>
    </div>
    <p className="mt-2 mb-2 text-gray-200">{project.description}</p>
    <div className="flex gap-4 mb-4 flex-wrap">
      {project.technologies.map((tech) => (
        <span key={tech.name} className="flex flex-col items-center" title={tech.name}>
          <img
            src={tech.icon}
            alt={tech.name}
            style={{ width: 40, height: 40 }}
            className={tech.name === "Selenium" ? "selenium-icon" : ""}
          />
          <span className="text-xs text-gray-400 mt-1">{tech.name}</span>
        </span>
      ))}
    </div>
    <ul className="mb-3 text-gray-200 space-y-1">
      {project.features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <span className="mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
    <div className="flex gap-4 mt-auto">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
        <span className="mr-1">🔗</span> GitHub Repo
      </a>
      <a href={project.allureUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white rounded px-2 py-1 hover:bg-blue-700 font-semibold flex items-center">
        <span className="mr-1">📊</span> View Allure Report
      </a>
    </div>
  </div>
);