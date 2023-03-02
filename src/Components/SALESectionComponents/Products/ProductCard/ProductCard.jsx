import React from "react";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const { id, name, category, price, img, img_name } = product;
  return (
    <div className="product-card" id={id}>
      <img src={img} alt={img_name} />
      <div className="category">
        <h3>{category}</h3>
      </div>
      <div className="info-card">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
