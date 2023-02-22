import React, { useState } from "react";
import { testemonials } from "./testemonials";
import "./HSFiveSlider.scss";

export const HSFiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-testem">
      <button className="btn-st left">left</button>
      <button className="btn-st right">right</button>
      <div className="slider-content">
        <h4>Text</h4>
        <p>Name</p>
      </div>
    </div>
  );
};
