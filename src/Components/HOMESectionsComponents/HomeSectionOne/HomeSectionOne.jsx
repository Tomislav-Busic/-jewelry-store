import React from "react";

import { TextAnimation } from "components/textAnimation/TextAnimation";
import { AnimationBtn } from "components/animationBtn/AnimationBtn";
import { SocialIcons } from "components/socialIcons/SocialIcons";

import styles from "./homeSectionOne.module.scss";

export const HomeSectionOne = () => {
  return (
    <div className={styles.home_section_one}>
      <h1>
        <span>CALVI </span>antique fine jewellery
      </h1>
      <TextAnimation />
      <SocialIcons />
      <h3>Praška 10, Zagreb</h3>
      <AnimationBtn name={"Kontakt"} path={"/kontakt"} color={"btn-anim-red"} />
    </div>
  );
};
