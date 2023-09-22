import React from "react";
import { motion } from "framer-motion";

import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";

import { socials } from "../../constants/socials";

const HeaderSocials = () => {
  return (
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="header__socials"
    >
      <a href={socials.github} target="_blank">
        <BsGithub />
      </a>
      <a href={socials.linkedIn} target="_blank">
        <BsLinkedin />
      </a>
      <a href={socials.telegram} target="_blank">
        <BsTelegram />
      </a>
      <a href={socials.gmail} target="_blank">
        <TbBrandGmail />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
