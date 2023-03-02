import React from "react";
import "./HomeSectionThree.scss";
import { InfiniteSlider } from "../../InfiniteSlider/InfiniteSlider";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";

export const HomeSectionThree = () => {
  return (
    <div className="home-section-three">
      <h1>Trenutno u ponudi</h1>
      <br />
      <InfiniteSlider />
      <AnimationBtn
        name={"Vidi više"}
        path={"./prodaja"}
        color={"btn-anim-red"}
      />
    </div>
  );
};
