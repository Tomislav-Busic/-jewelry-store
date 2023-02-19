import React from "react";
import { HomeSectionOne } from "../../Components/HOMESectionsComponents/HomeSectionOne/HomeSectionOne";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <HomeSectionOne />
        <div className="section s-two">
          <h1>O nama</h1>
        </div>
        <InfiniteSlider />
      </div>
    </div>
  );
};
