import React from "react";
import "./Products.scss";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard/ProductCard";

export const Products = () => {
  const products = useSelector((state) => state.data.dataList);
  const productName = useSelector((state) => state.data.productName);

  return (
    <div className="products">
      {products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(productName) ||
            product.name.includes(productName)
        )
        .map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
};
