import React from "react";
import ImgCarousel from "../../../components/ImgCarousel/ImgCarousel";

import "./ProjectCard.scss";


const ProjectCard = ({ className, project }) => {
  return (
    <div className={`project__item ${className}`}>
      <ImgCarousel images={project.images} />
      <h3 className="project__item-title">{project.title}</h3>
      <span className="project__item-description">{project.desc}</span>
      <div className="project__item-technologies">
        {project.frontendTech && <p>Frontend: {project.frontendTech}</p>}
        {project.backendTech && <p>Backend: {project.backendTech}</p>}
      </div>

      <div className="project__item-links">
        {project.frontendGit && (
          <a className="btn" href={project.frontendGit} target="_blank" rel="noopener noreferrer">
            Front GitHub
          </a>
        )}
        {project.backendGit && (
          <a className="btn" href={project.backendGit} target="_blank" rel="noopener noreferrer">
            Back GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
