import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section s-one">
          <h1>
            <span>CALVI </span>antique fine jewellery
          </h1>
          <div className="social">
            <a>
              <FaFacebookSquare className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/calviantique_finejewellery/"
              target="_blank"
            >
              <FaInstagramSquare className="social-icon" />
            </a>
            <a>
              <FaLinkedin className="social-icon" />
            </a>
          </div>
          <h3>Praška 10 Zagreb</h3>
          <h3>Anita Calvi</h3>
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
