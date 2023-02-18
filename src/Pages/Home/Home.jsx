import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";
import { TextAnimation } from "../../Components/TextAnimation/TextAnimation";
import { SocialIcons } from "../../Components/SocialIcons/SocialIcons";
import { AnimationBtn } from "../../Components/AnimationBtn/AnimationBtn";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section s-one">
          <h1>
            <span>CALVI </span>antique fine jewellery
          </h1>
          <TextAnimation />
          <SocialIcons />
          <h3>Praška 10, Zagreb</h3>
          <AnimationBtn name={"Kontakt"} path={"./kontakt"} />
        </div>
        <InfiniteSlider />
      </div>
    </div>
  );
};
