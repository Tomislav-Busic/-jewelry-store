import React from "react";

import { InfiniteSlider } from "../../infiniteSlider/InfiniteSlider";
import { AnimationBtn } from "../../animationBtn/AnimationBtn";

import styles from "./homeSectionThree.module.scss";

export const HomeSectionThree = () => {
  return (
    <div className={styles.home_section_three}>
      <h1>Trenutno u ponudi</h1>
      <br />
      <InfiniteSlider />
      <AnimationBtn
        name={"Vidi više"}
        path={"/prodaja"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
