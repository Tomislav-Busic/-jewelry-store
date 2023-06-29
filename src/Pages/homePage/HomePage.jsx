import React from "react";

import { HomeSectionOne } from "../../components/homeSectionsComponents/homeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "../../components/homeSectionsComponents/homeSectionTwo/HomeSectionTwo";
import { HomeSectionThree } from "../../components/homeSectionsComponents/homeSectionThree/HomeSectionThree";
import { HomeSectionFour } from "../../components/homeSectionsComponents/homeSectionFour/HomeSectionFour";
import { HomeSectionFive } from "../../components/homeSectionsComponents/homeSectionFive/HomeSectionFive";

import styles from "./homePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
      </div>
    </div>
  );
};
