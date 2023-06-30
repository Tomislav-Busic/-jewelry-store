import React from "react";

import { AnimationBtn } from "components/animationBtn/AnimationBtn";
import { HomeSecFourCard } from "./homeSecFourCard/HomeSecFourCard";

import img1 from "../../../../assets/images/prstend.jpg";
import img2 from "../../../../assets/images/goldring.jpg";
import img3 from "../../../../assets/images/threerings.jpg";
import img4 from "../../../../assets/images/rucprsten.jpg";
import img5 from "../../../../assets/images/work6.jpg";
import img6 from "../../../../assets/images/work4.jpg";
import img7 from "../../../../assets/images/vaza.jpg";
import img8 from "../../../../assets/images/ormaric.jpg";
import img9 from "../../../../assets/images/sofa.jpg";

import styles from "./homeSectionFour.module.scss";

export const HomeSectionFour = () => {
  const imagesMakingOf = [img1, img2, img3];
  const imagesRepairs = [img4, img5, img6];
  const imagesAntique = [img7, img8, img9];

  return (
    <div className={styles.home_section_four}>
      <h1>Usluge</h1>
      <div className={styles.hsf_images}>
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
