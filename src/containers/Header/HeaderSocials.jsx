import React from "react";
import { motion } from "framer-motion";

import { socials } from "../../constants/socials";

const HeaderSocials = () => {
  
  return (
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="header__socials"
    >
      {socials.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {social.image}
        </a>
      ))}
    </motion.div>
  );
};

export default HeaderSocials;
