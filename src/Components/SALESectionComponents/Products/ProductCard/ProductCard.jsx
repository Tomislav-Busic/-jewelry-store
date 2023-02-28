import React from "react";
import "./ProductCard.scss";
import { FormatCurrency } from "../../../../Tools/Tools";
import { Link } from "react-router-dom";
import { goToTopOfPage } from "../../../../Tools/Tools";

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
        <h2>{FormatCurrency(price)}</h2>
        <Link
          onClick={goToTopOfPage}
          style={{ textDecoration: "none" }}
          to={"/kontakt"}
        >
          <button>Kontakt</button>
        </Link>
        <br />
      </div>
    </div>
  );
};
