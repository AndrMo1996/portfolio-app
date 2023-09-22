import React from "react";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";

const ProjectCard = ({ project }) => {
  return (
    <div className="portfolio__item">
      <ImgCarousel images={project.images} />
      <h3 className="portfolio__item-title">{project.title}</h3>
      <span className="portfolio__item-description">{project.desc}</span>
      <div className="portfolio__item-technologies">
        {project.frontendTech && <p>Frontend: {project.frontendTech}</p>}
        {project.backendTech && <p>Backend: {project.backendTech}</p>}
      </div>

      <div className="portfolio__item-links">
        {project.frontendGit && (
          <a className="btn" href={project.frontendGit} target="_blank">
            Front GitHub
          </a>
        )}
        {project.backendGit && (
          <a className="btn" href={project.backendGit} target="_blank">
            Back GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
