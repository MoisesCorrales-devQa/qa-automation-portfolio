import React from "react";
import { Project } from "@/data/projects";
import styles from "./ProjectsSection.module.css";
import Link from "next/link";
import { ProjectStatusBadges } from "./ProjectStatusBadges";



export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className={`${styles["project-card"]} mb-10`}>
    {/* Badges */}
    <div className={styles["badges"]}>
      <ProjectStatusBadges />
    </div>
    <div className={styles["project-header"]}>
      <h3 className="text-2xl font-bold text-gray-100 max-w-xs break-words">
        {project.title}
      </h3>      <div className={`${styles["text-md"]} text-gray-400 mb-1`}>{project.subtitle}</div>
    </div>
    <p className="mt-2 mb-2 text-gray-200">{project.description}</p>
    <div className={styles["tech-stack"]}>
      {project.technologies.map((tech) => (
        <span key={tech.name} className="flex flex-col items-center" title={tech.name}>
          <img
            src={tech.icon}
            alt={tech.name}
            style={{ width: 40, height: 40 }}
            className={tech.name === "Selenium" ? styles["selenium-icon"] : ""}
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
    <div className={styles["project-links"]}>
      <Link href={project.caseStudyUrl} className={`${styles["btn-report"]} ${styles["case-study"]}`}>
        <img src="/icons/doc.svg" alt="Case Study" className={styles["icon"]} />
        Case Study
      </Link>


      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["btn-report"]}
      >
        <img src="/icons/github.svg" alt="GitHub" className={styles["icon"]} />
        GitHub Repo
      </a>
      <a
        href={project.allureUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["btn-report"]}
      >
        <img src="/icons/allure.svg" alt="Allure" className={styles["icon"]} />
        View Allure Report
      </a>
    </div>
  </div>
);