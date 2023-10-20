import React from "react";
import { motion } from "framer-motion";

import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <h2 className="head-text">About Me</h2>
      <div className="container about-container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="about-me__text"
        >
          <p>
            I am a junior full-stack developer. My experience encompasses
            technologies like React, Databases, and PHP
          </p>
          <br />
          <h3>My Skills:</h3>
          <ol>
            <li>
              <h4>React: </h4>I confidently work with the React library,
              creating interactive and dynamic web pages. My attention to detail
              and understanding of component-based principles enable me to build
              user-friendly and efficient interfaces.
            </li>
            <br />
            <li>
              <h4>Databases: </h4>I am familiar with working with both
              relational and non-relational databases. My ability to structure
              information and optimize queries allows me to create powerful and
              high-performance applications
            </li>
            <br />
            <li>
              <h4>PHP: </h4> PHP is the language I use for building server-side
              logic and working with databases. With PHP, I can create efficient
              and secure web applications with a user-friendly interface
            </li>
          </ol>
          <br />
          <p>
            My goal is to continue developing my skills and learning new
            technologies. I am always open to new challenges and ready to
            participate in projects that will help me grow as a professional
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="about-me__skills"
        >
          <div className="skills-data">
            <div className="skills-title">
              <h4 className="skill-name">React</h4>
              <span>50%</span>
            </div>
            <div className="skill-bar">
              <span className="skill__percentage skill-react"></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h4 className="skill-name">PHP</h4>
              <span>70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill__percentage skill-php"></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h4 className="skill-name">Databases</h4>
              <span>65%</span>
            </div>
            <div className="skill-bar">
              <span className="skill__percentage skill-db"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
