import React from "react";
import "./InfiniteSlider.scss";
import { useSelector } from "react-redux";

export const InfiniteSlider = () => {
  const images = useSelector((state) => state.data.dataList);

  return (
    <div className="slider-component">
      <div className="slider">
        <div className="slide-track">
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.img} alt="img" />
            </div>
          ))}
        </div>
        <div className="slide-track two">
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
