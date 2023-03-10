import React from "react";
import "./Home.scss";
import { HomeSectionOne } from "../../Components/HOMESectionsComponents/HomeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "../../Components/HOMESectionsComponents/HomeSectionTwo/HomeSectionTwo";
import { HomeSectionThree } from "../../Components/HOMESectionsComponents/HomeSectionThree/HomeSectionThree";
import { HomeSectionFour } from "../../Components/HOMESectionsComponents/HomeSectionFour/HomeSectionFour";
import { HomeSectionFive } from "../../Components/HOMESectionsComponents/HomeSectionFive/HomeSectionFive";

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
