import React, { useState } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { testemonials } from "../../../../../assets/testemonials/testemonials";
import logo from "../../../../../assets/images/logo.jpg";

import styles from "./imgSlider.module.scss";

export const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testemonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isFirstSlide = currentIndex === testemonials.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.slider_testem}>
      <button
        className={styles.btn_st}
        style={{ left: "1rem" }}
        onClick={goToPrevious}
      >
        <FaChevronLeft className={styles.icon} />
      </button>
      <button
        className={styles.btn_st}
        style={{ right: "1rem" }}
        onClick={goToNext}
      >
        <FaChevronRight className={styles.icon} />
      </button>
      <div className={styles.slider_content}>
        <div className={styles.logo}>
          <img src={logo} alt="img" />
        </div>
        <h4>
          <i>{testemonials[currentIndex].content}</i>
        </h4>
        <p>
          <i>{testemonials[currentIndex].name}</i>
        </p>
      </div>
    </div>
  );
};
