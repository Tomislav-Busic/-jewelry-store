import React from "react";
import "./homeSectionFour.scss";
import img1 from "../../../images/prstend.jpg";
import img2 from "../../../images/goldring.jpg";
import img3 from "../../../images/threerings.jpg";
import img4 from "../../../images/rucprsten.jpg";
import img5 from "../../../images/work6.jpg";
import img6 from "../../../images/work4.jpg";
import img7 from "../../../images/vaza.jpg";
import img8 from "../../../images/ormaric.jpg";
import img9 from "../../../images/sofa.jpg";
import { AnimationBtn } from "../../animationBtn/AnimationBtn";
import { HomeSecFourCard } from "./homeSecFourCard/HomeSecFourCard";

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
          path={"/usluge"}
        />
        <HomeSecFourCard
          images={imagesRepairs}
          title={"Popravci i restauriranje nakita"}
          path={"/usluge"}
        />
        <HomeSecFourCard
          images={imagesAntique}
          title={"Francuski Antikviteti"}
          path={"/prodaja"}
        />
      </div>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
