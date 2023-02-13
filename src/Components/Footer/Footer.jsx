import React from "react";
import "./Footer.scss";

export const Footer = () => {
  let date = new Date();
  let currnetYear = date.getFullYear();

  return (
    <div className="footer">
      <a href="http://xn--tomislavbui-vlb28i.com/">
        &copy; Tomislav Bušić 2023-{currnetYear}
      </a>
    </div>
  );
};
