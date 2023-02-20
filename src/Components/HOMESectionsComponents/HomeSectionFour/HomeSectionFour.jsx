import React from "react";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";
import "./HomeSectionFour.scss";

export const HomeSectionFour = () => {
  return (
    <div className="home-section-four">
      <h1>O nama</h1>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
