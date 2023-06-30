import React from "react";

import img from "../../../assets/images/work1.jpg";

import styles from "./servicesSectionTwo.module.scss";

export const ServicesSectionTwo = () => {
  return (
    <div className={styles.services_s_two}>
      <div className="left-s-side">
        <h2>Izrada nakita po narudžbi</h2>
        <p>
          Izrasli iz majstorske draguljarske radionice <i>"Salzberger"</i>{" "}
          spremni smo vaše želje i potrebe pretvoriti u vrhunske komade nakita.
          Za Vas možemo dizajnirati ili po Vašem dizajnu ručno izraditi unikatne
          primjerke nakita.
        </p>
      </div>
      <div className="right-s-side">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
