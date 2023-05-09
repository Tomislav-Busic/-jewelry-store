import React from "react";
import "./ProductCard.scss";
import { useDispatch } from "react-redux";

export const ProductCard = ({ product }) => {
  const { id, name, category, img, img_name } = product;
  const dispatch = useDispatch();

  const openImg = () => {
    console.log(id);
  };
  return (
    <div className="product-card" id={id}>
      <img onClick={() => openImg()} src={img} alt={img_name} />
      <div className="category">
        <h3>{category}</h3>
      </div>
      <div className="info-card">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
