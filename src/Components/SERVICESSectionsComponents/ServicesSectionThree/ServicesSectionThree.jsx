import React from "react";
import "./servicesSectionThree.scss";
import img from "../../../images/work5.jpg";

export const ServicesSectionThree = () => {
  return (
    <div className="services-s-three">
      <div className="left-s-side">
        <h2>Popravci i restauriranje nakita</h2>
        <p>
          Sve vrste popravaka i restauracije nakita apsolutno su na našoj listi
          prioriteta usluga koje nudimo kako bi smo udovoljili Vašim zahtjevima
          i potrebama.
        </p>
      </div>
      <div className="right-s-side">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
