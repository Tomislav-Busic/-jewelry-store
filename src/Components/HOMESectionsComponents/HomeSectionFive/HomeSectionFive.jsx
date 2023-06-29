import React from "react";
import "./homeSectionFive.scss";
import { AnimationBtn } from "../../animationBtn/AnimationBtn";
import { HSFiveSlider } from "./hSFiveSlider/HSFiveSlider";

export const HomeSectionFive = () => {
  return (
    <div className="home-section-five">
      <h1>Preporuke</h1>
      <HSFiveSlider />
      <AnimationBtn
        name={"Kontakt"}
        path={"./kontakt"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
