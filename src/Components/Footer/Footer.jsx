import React from "react";
import "./footer.scss";

export const Footer = () => {
  let date = new Date();
  let currnetYear = date.getFullYear();

  return (
    <div className="footer">
      <h4>
        &copy; 2023 - {currnetYear} CALVI | Designed By{" "}
        <a href="https://tomislav-busic.web.app/">Tomislav Bušić</a>
      </h4>
    </div>
  );
};
