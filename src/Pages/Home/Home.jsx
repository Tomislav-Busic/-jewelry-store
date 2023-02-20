import React from "react";
import { HomeSectionOne } from "../../Components/HOMESectionsComponents/HomeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "../../Components/HOMESectionsComponents/HomeSectionTwo/HomeSectionTwo";
import { HomeSectionThree } from "../../Components/HOMESectionsComponents/HomeSectionThree/HomeSectionThree";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
      </div>
    </div>
  );
};
