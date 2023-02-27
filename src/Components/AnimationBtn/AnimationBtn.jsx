import React from "react";
import { Link } from "react-router-dom";
import "./AnimationBtn.scss";
import { goToTopOfPage } from "../../Tools/Tools";

export const AnimationBtn = ({ name, path, color }) => {
  return (
    <div className={color}>
      <div className="button-anim">
        <Link onClick={goToTopOfPage} className="link-anim" to={path}>
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
