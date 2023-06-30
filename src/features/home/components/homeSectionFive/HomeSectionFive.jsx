import React from "react";

import { AnimationBtn } from "components/animationBtn/AnimationBtn";
import { ImgSlider } from "./imgSlider/ImgSlider";

import styles from "./homeSectionFive.module.scss";

export const HomeSectionFive = () => {
  return (
    <div className={styles.home_section_five}>
      <h1>Preporuke</h1>
      <ImgSlider />
      <AnimationBtn
        name={"Kontakt"}
        path={"./kontakt"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
