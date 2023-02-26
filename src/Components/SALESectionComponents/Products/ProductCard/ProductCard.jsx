import React from "react";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const { id, name, description, price, img, img_name } = product;
  return (
    <div className="product-card" id={id}>
      <img src={img} alt={img_name} />
      <div className="info-card">
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
};
