import React, { useState, useEffect } from "react";
import "./homeSecFourCard.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { goToTopOfPage } from "../../../../tools/Tools";

export const HomeSecFourCard = ({ title, images, path }) => {
  const [currentImg, setCurrentImg] = useState(images[1]);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const changeImage = (img) => {
    setCurrentImg(img);
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          durration: 0.5,
          bounce: 0,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-50vw" });
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
          <Link className="title" to={path} onClick={goToTopOfPage}>
            <h2>{title}</h2>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
