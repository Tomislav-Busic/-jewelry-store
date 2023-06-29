import React from "react";
import "./homeSectionThree.scss";
import { InfiniteSlider } from "../../infiniteSlider/InfiniteSlider";
import { AnimationBtn } from "../../animationBtn/AnimationBtn";

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
