import React from "react";
import "./InfiniteSlider.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/slice/modal-slice";

export const InfiniteSlider = () => {
  const images = useSelector((state) => state.data.dataList);
  /* const dispatch = useDispatch(); */

  // ili navigacija sa async ili otvoriti u početnoj

  const showProduct = (item) => {
    console.log(item);
    /* const { name, img } = item;
    dispatch(modalActions.setName(name));
    dispatch(modalActions.setImg(img));
    dispatch(modalActions.closeModal()); */
  };

  return (
    <div className="slider-component">
      <div className="slider">
        <div className="slide-track">
          {images.map((img, index) => (
            <div onClick={() => showProduct(img)} className="slide" key={index}>
              <img src={img.img} alt="img" />
            </div>
          ))}
        </div>
        <div className="slide-track two">
          {images.map((img, index) => (
            <div onClick={() => showProduct(img)} className="slide" key={index}>
              <img src={img.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
