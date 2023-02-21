import React, { useState } from "react";
import { testemonials } from "./testemonials";

export const HSFiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider">
      <button>left</button>
      <button>right</button>
      <div className="slider-card">
        <h4>Text</h4>
        <p>Name</p>
      </div>
    </div>
  );
};
