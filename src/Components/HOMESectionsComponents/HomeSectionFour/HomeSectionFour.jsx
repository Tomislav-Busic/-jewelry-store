import React from "react";
import "./HomeSectionFour.scss";
import img1 from "../../../images/prstend.jpg";
import img2 from "../../../images/goldring.jpg";
import img3 from "../../../images/threerings.jpg";
import img4 from "../../../images/rucprsten.jpg";
import img5 from "../../../images/work6.jpg";
import img6 from "../../../images/work4.jpg";
import img7 from "../../../images/vaza.jpg";
import img8 from "../../../images/ormaric.jpg";
import img9 from "../../../images/sofa.jpg";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";
import { HomeSecFourCard } from "./HomeSecFourCard/HomeSecFourCard";

export const HomeSectionFour = () => {
  const imagesMakingOf = [img1, img2, img3];
  const imagesRepairs = [img4, img5, img6];
  const imagesAntique = [img7, img8, img9];
  return (
    <div className="home-section-four">
      <h1>Usluge</h1>
      <div className="hsf-images">
        <HomeSecFourCard
          images={imagesMakingOf}
          title={"Izrada nakita po narudžbi"}
        />
        <HomeSecFourCard
          images={imagesRepairs}
          title={"Popravci i restauriranje nakita"}
        />
        <HomeSecFourCard
          images={imagesAntique}
          title={"Francuski Antikviteti"}
        />
      </div>
      <AnimationBtn
        name={"Vidi više"}
        path={"./usluge"}
        color={"btn-anim-gold"}
      />
    </div>
  );
};
