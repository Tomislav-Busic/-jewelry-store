import React from "react";
import "./home.scss";
import { HomeSectionOne } from "../../components/homeSectionsComponents/homeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "../../components/homeSectionsComponents/homeSectionTwo/HomeSectionTwo";
import { HomeSectionThree } from "../../components/homeSectionsComponents/homeSectionThree/HomeSectionThree";
import { HomeSectionFour } from "../../components/homeSectionsComponents/homeSectionFour/HomeSectionFour";
import { HomeSectionFive } from "../../components/homeSectionsComponents/homeSectionFive/HomeSectionFive";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
      </div>
    </div>
  );
};
