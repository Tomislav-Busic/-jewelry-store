import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section s-one"></div>
        <InfiniteSlider />
      </div>
    </div>
  );
};
