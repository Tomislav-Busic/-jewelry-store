import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import "./Home.scss";
import { Link } from "react-router-dom";
import { TextAnimation } from "../../Components/TextAnimation/TextAnimation";
import { SocialIcons } from "../../Components/SocialIcons/SocialIcons";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section s-one">
          <h1>
            <span>CALVI </span>antique fine jewellery
          </h1>
          <div className="anim-heading">
            <h2>
              <TextAnimation />
            </h2>
          </div>
          <SocialIcons />
          <h3>Praška 10, Zagreb</h3>
          <div class="button-anim-container">
            <div class="button-anim">
              <Link className="link-anim" to="./kontakt">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
        <InfiniteSlider />
      </div>
    </div>
  );
};
