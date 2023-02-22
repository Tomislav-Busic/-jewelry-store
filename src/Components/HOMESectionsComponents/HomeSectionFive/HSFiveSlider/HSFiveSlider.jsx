import React, { useState } from "react";
import { testemonials } from "./testemonials";
import "./HSFiveSlider.scss";

export const HSFiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-testem">
      <button>left</button>
      <button>right</button>
      <div className="slider-card">
        <h4>Text</h4>
        <p>Name</p>
      </div>
    </div>
  );
};
