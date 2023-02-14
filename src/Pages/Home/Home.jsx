import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <h1>Početna stranica</h1>
      <div className="container">
        <InfiniteSlider />
      </div>
    </div>
  );
};
