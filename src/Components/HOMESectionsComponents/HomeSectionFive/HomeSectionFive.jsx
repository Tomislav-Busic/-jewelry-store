import React from "react";
import "./HomeSectionFive.scss";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";

export const HomeSectionFive = () => {
  return (
    <div className="home-section-five">
      <h1>Preporuke</h1>
      <AnimationBtn
        name={"Kontakt"}
        path={"./kontakt"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
