import React, { useState } from "react";
import "./HSFiveSlider.scss";
import { testemonials } from "./testemonials";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const HSFiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-testem">
      <button className="btn-st left">
        <FaChevronLeft className="icon" />
      </button>
      <button className="btn-st right">
        <FaChevronRight className="icon" />
      </button>
      <div className="slider-content">
        <h4>Text</h4>
        <p>Name</p>
      </div>
    </div>
  );
};
