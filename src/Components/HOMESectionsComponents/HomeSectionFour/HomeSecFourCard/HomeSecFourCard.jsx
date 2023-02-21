import React from "react";
import "./HomeSecFourCard.scss";

export const HomeSecFourCard = ({ img, title }) => {
  return (
    <div
      className="hsf-card"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
      }}
    >
      <div className="card-text">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
