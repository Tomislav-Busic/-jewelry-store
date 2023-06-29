import React from "react";
import { TextAnimation } from "../../textAnimation/TextAnimation";
import { AnimationBtn } from "../../animationBtn/AnimationBtn";
import { SocialIcons } from "../../socialIcons/SocialIcons";
import "./homeSectionOne.scss";

export const HomeSectionOne = () => {
  return (
    <div className="home-section-one">
      <h1>
        <span>CALVI </span>antique fine jewellery
      </h1>
      <TextAnimation />
      <SocialIcons />
      <h3>Praška 10, Zagreb</h3>
      <AnimationBtn
        name={"Kontakt"}
        path={"./kontakt"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
