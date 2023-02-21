import React from "react";
import "./HomeSectionFour.scss";
import img1 from "../../../images/prstend.jpg";
import img2 from "../../../images/rucprsten.jpg";
import img3 from "../../../images/prstensmar.jpg";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";
import { HomeSecFourCard } from "./HomeSecFourCard/HomeSecFourCard";

export const HomeSectionFour = () => {
  return (
    <div className="home-section-four">
      <h1>Usluge</h1>
      <div className="hsf-images">
        <HomeSecFourCard img={img1} title={"Izrada nakita po narudžbi"} />
        <HomeSecFourCard img={img2} title={"Popravci i restauriranje nakita"} />
        <HomeSecFourCard img={img3} title={"Francuski Antikviteti"} />
      </div>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
