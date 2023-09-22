import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/files/cv.pdf";

import "./Header.scss";

const Header = () => {
  return (
    <section id="home">
      <div className="container header__container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="header__info-box"
        >
          <div className="header__me">
            <img src={images.me} alt="It's me" />
          </div>
          <div className="header__info">
            <h2>Hi, I'm</h2>
            <h1>Andrii Moruzhko</h1>
            <h4>Software engineer</h4>

            <a className="btn" href={CV} download>
              Download CV
            </a>
          </div>
        </motion.div>
        <HeaderSocials />
      </div>
    </section>
  );
};

export default Header;
