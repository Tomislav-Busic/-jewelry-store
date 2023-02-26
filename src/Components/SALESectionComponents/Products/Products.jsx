import React from "react";
import "./Products.scss";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard/ProductCard";

export const Products = () => {
  const products = useSelector((state) => state.data.dataList);

  return (
    <div className="products">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
