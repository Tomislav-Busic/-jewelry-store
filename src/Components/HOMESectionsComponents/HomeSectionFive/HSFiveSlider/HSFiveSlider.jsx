import React, { useState } from "react";
import "./hSFiveSlider.scss";
import { testemonials } from "../../../../testemonials/testemonials";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import logo from "../../../../images/calvi.png";

export const HSFiveSlider = () => {
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
    <div className="slider-testem">
      <button className="btn-st left" onClick={goToPrevious}>
        <FaChevronLeft className="icon" />
      </button>
      <button className="btn-st right" onClick={goToNext}>
        <FaChevronRight className="icon" />
      </button>
      <div className="slider-content">
        <div className="logo">
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
