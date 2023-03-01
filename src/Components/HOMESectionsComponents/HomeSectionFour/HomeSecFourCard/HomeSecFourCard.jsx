import React, { useState, useEffect } from "react";
import "./HomeSecFourCard.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const HomeSecFourCard = ({ title, images }) => {
  const [currentImg, setCurrentImg] = useState(images[1]);

  const changeImage = (img) => {
    setCurrentImg(img);
  };

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          durration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div className="hsf-card" animate={animation}>
        <img src={currentImg} alt={currentImg} />
        <div className="images-card">
          {images.map((img, index) => (
            <img
              src={img}
              key={index}
              alt={img}
              onClick={() => changeImage(img)}
            />
          ))}
        </div>
        <div className="card-text">
          <h2>{title}</h2>
        </div>
      </motion.div>
    </div>
  );
};
