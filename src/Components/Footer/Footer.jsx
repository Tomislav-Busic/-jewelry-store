import React from "react";
import "./Footer.scss";

export const Footer = () => {
  let date = new Date();
  let currnetYear = date.getFullYear();

  return (
    <div className="footer">
      <h4>
        &copy; 2023 - {currnetYear} CALVI | Designed By{" "}
        <a href="http://xn--tomislavbui-vlb28i.com/">Tomislav Bušić</a>
      </h4>
    </div>
  );
};
