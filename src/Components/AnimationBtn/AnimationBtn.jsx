import React from "react";
import { Link } from "react-router-dom";
import "./AnimationBtn.scss";

export const AnimationBtn = ({ name, path }) => {
  return (
    <div className="button-anim-container">
      <div className="button-anim">
        <Link className="link-anim" to={path}>
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
