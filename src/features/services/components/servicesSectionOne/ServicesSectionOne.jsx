import React from "react";

import img from "../../../assets/images/work6.jpg";

import "./servicesSectionOne.scss";

export const ServicesSectionOne = () => {
  return (
    <div className="services_s_one">
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
