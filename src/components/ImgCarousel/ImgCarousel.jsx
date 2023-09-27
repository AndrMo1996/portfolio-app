import React, { useEffect, useState } from "react";

import "./ImgCarousel.scss";

const ImgCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => timer.clearTimeout;
  }, [current, nextSlide]);

  // if (!Array.isArray.images || images.length === 0) {
  //   return;
  // }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={
            index === current ? "carousel-item active" : "carousel-item"
          }
        >
          <img src={image} alt="slide" />
        </div>
      ))}
    </div>
  );
};

export default ImgCarousel;
