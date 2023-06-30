import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { goToTopOfPage } from "utilities/tools";

import styles from "./homeSecFourCard.module.scss";

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
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div className={styles.hsf_card} animate={animation}>
        <img src={currentImg} alt={currentImg} />
        <div className={styles.images_card}>
          {images.map((img, index) => (
            <img
              src={img}
              key={index}
              alt={img}
              onClick={() => changeImage(img)}
            />
          ))}
        </div>
        <div className={styles.card_text}>
          <Link className={styles.title} to={path} onClick={goToTopOfPage}>
            <h2>{title}</h2>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
