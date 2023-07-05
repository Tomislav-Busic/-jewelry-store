import React from "react";
import { Link } from "react-router-dom";

import { goToTopOfPage } from "utilities/tools";

import "./animationBtn.scss";

export const AnimationBtn = ({ name, path, color }) => {
  return (
    <div className={color}>
      <div className="button-anim">
        <Link
          onClick={goToTopOfPage}
          className="link-anim"
          to={path}
          data-testid="link"
        >
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
