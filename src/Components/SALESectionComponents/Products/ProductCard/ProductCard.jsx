import React from "react";
import "./ProductCard.scss";
import { FormatCurrency } from "../../../../Tools/Tools";

export const ProductCard = ({ product }) => {
  const { id, name, description, category, price, img, img_name } = product;
  return (
    <div className="product-card" id={id}>
      <img src={img} alt={img_name} />
      <div className="info-card">
        <h3>{name}</h3>
        <h3>{category}</h3>
        <h2>{FormatCurrency(price)}</h2>
        <button>Kontakt</button>
        <br />
      </div>
    </div>
  );
};
