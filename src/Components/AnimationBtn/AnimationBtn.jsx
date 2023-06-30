import React from "react";
import { Link } from "react-router-dom";

import { goToTopOfPage } from "utilities/tools";

import styles from "./animationBtn.module.scss";

export const AnimationBtn = ({ name, path, color }) => {
  return (
    <div className={color}>
      <div className={styles.button_anim}>
        <Link onClick={goToTopOfPage} className={styles.link_anim} to={path}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {name}
        </Link>
      </div>
    </div>
  );
};
