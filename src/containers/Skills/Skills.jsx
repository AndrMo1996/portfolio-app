import React from "react";
import { motion } from "framer-motion";

import { skills, experiences } from "../../constants/skills";

import "./Skills.scss";

const Skills = () => {
  console.log(experiences);
  return (
    <section id="skills">
      <h2 className="head-text">Skills & Experience</h2>
      <div className="container app__skill-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, idx) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={idx}
            >
              <div className="app__flex">
                <img src={skill.icon} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__experience-timeline">
          <div className="app__experience-timeline_wrapper">
            {experiences.map((experience, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="app__exp-item"
                key={index}
              >
                {experience.icon}
                <span className="timeline__date">{experience.year}</span>
                <h3 className="timeline__title">{experience.title}</h3>
                <p className="timeline__company">{experience.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
