import React from "react";
import { InfiniteSlider } from "../../Components/InfiniteSlider/InfiniteSlider";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section s-one">
          <h1>
            <span>CALVI </span>antique fine jewellery
          </h1>
          <h3>Praška 10 Zagreb</h3>
          <h4>Anita Calvi</h4>
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
          <button>Kontakt</button>
        </div>
        <InfiniteSlider />
      </div>
    </div>
  );
};
