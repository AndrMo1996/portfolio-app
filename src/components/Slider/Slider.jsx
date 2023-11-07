import React, { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "../../containers/Portfolio/ProjectCard/ProjectCard";
import { getSubArray } from "../../helpers/arrayHelper";

import { IoIosArrowForward } from "react-icons/io";

import "./Slider.scss";

const Slider = ({ items, itemsCount }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentItems, setCurrentItems] = useState(
    items.slice(currentSlide, currentSlide + itemsCount)
  );

  const nextSlide = () => {
    const newCurrentSlide = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newCurrentSlide);
    setCurrentItems(getSubArray(items, newCurrentSlide, newCurrentSlide + itemsCount));
  };

  const prevSlide = () => {
    const newCurrentSlide = currentSlide === 0 ? items.length : currentSlide - 1;
    setCurrentSlide(newCurrentSlide);
    setCurrentItems(getSubArray(items, newCurrentSlide, newCurrentSlide + itemsCount));
  };

  return (
    <div className="slider">
      <div className="slider__content"></div>
      <div className="arrow_left" onClick={prevSlide}>
        <IoIosArrowForward size={50} />
      </div>

      <div className="slider__list">
        {currentItems.map((item, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="slider__item"
          >
            <ProjectCard className="active" key={index} project={item} />
          </motion.div>
        ))}
      </div>

      <div className="arrow_right" onClick={nextSlide}>
        <IoIosArrowForward size={50} />
      </div>
    </div>
  );
};

export default Slider;
