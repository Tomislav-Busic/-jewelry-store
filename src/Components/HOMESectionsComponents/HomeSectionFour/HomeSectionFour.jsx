import React from "react";
import "./HomeSectionFour.scss";
import img from "../../../images/anita.jpg";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";
import { HomeSecFourCard } from "./HomeSecFourCard";

export const HomeSectionFour = () => {
  return (
    <div className="home-section-four">
      <h1>Usluge</h1>
      <div className="hsf-images">
        <HomeSecFourCard img={img} />
        <HomeSecFourCard img={img} />
        <HomeSecFourCard img={img} />
        <HomeSecFourCard img={img} />
      </div>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
