import React from "react";
import "./servicesSectionOne.scss";
import img from "../../../images/work6.jpg";

export const ServicesSectionOne = () => {
  return (
    <div className="services-s-one">
      <div className="left-s-side">
        <h2>Usluge</h2>
        <ul>
          <li>Ručna izrada nakita po narudžbi</li>
          <li>Procjena nakita</li>
          <li>Nizanje bisera i koralja</li>
          <li>Restauriranje antiknog namještaja</li>
          <li>Tapeciranje namještaja</li>
          <li>Procjena umjetnina</li>
          <li>Restauriranje i čišćenje slika</li>
        </ul>
      </div>
      <div className="right-s-side">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
