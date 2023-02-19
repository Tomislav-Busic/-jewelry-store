import React from "react";
import { HomeSectionOne } from "../../Components/HOMESectionsComponents/HomeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "../../Components/HOMESectionsComponents/HomeSectionTwo/HomeSectionTwo";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <HomeSectionOne />
        <HomeSectionTwo />
        <InfiniteSlider />
      </div>
    </div>
  );
};
