import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="head-text">My Recent Works</h2>
      <div className="container app__portfolio-container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="portfolio__items"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
