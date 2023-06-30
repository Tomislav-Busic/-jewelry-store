import React from "react";
import { useSelector } from "react-redux";

import styles from "./infiniteSlider.module.scss";

export const InfiniteSlider = () => {
  const images = useSelector((state) => state.data.dataList);

  return (
    <div className={styles.slider_component}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {images.map((img, index) => (
            <div className={styles.slide} key={index}>
              <img src={img.img} alt="img" />
            </div>
          ))}
        </div>
        <div className={styles.slide_track_two} style={{}}>
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
