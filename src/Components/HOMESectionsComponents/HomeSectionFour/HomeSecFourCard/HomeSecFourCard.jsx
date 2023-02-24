import React, { useState } from "react";
import "./HomeSecFourCard.scss";

export const HomeSecFourCard = ({ title, images }) => {
  const [currentImg, setCurrentImg] = useState(images[1]);
  const [style, setStyle] = useState(0);

  const changeImage = (img) => {
    setCurrentImg(img);
  };

  return (
    <div className="hsf-card">
      <img src={currentImg} alt={currentImg} />
      <div className="images-card">
        {images.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={img}
            onClick={() => changeImage(img)}
          />
        ))}
      </div>
      <div className="card-text">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
