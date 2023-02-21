import React from "react";

export const HomeSecFourCard = ({ img }) => {
  return (
    <div className="hsf-card">
      <img src={img} />
      <div className="card-text">
        <h2>Izrada nakita po narudži</h2>
      </div>
    </div>
  );
};
