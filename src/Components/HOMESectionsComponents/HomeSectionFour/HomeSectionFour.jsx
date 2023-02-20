import React from "react";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";
import "./HomeSectionFour.scss";

export const HomeSectionFour = () => {
  return (
    <div className="home-section-four">
      <h1>Usluge</h1>
      <div className="hsf-images">
        <div className="hsf-card">
          <img src="" />
          <div>Izrada nakita po narudži</div>
        </div>
      </div>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
