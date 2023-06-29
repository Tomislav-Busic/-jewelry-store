import React, { useState } from "react";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard/ProductCard";
import { Pagination } from "antd";
import { paginationActions } from "../../../store/slice/pagination-slice";
import { goToTopOfPage } from "../../../Tools/Tools";
import { Link } from "react-router-dom";

export const Products = () => {
  const products = useSelector((state) => state.data.dataList2);
  const productName = useSelector((state) => state.data.productName);
  const page = useSelector((state) => state.pagination.page);
  const productsPerPage = 10;
  const total = products.length;
  const dispatch = useDispatch();

  const indexOfLastPage = page * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const setPage = (value) => {
    dispatch(paginationActions.changePage(value));
    goToTopOfPage();
  };

  return (
    <>
      <br />
      <h2 className="price">Cijene su na upit</h2>
      <div className="products">
        {products
          .filter(
            (product) =>
              product.name.toLowerCase().includes(productName) ||
              product.name.includes(productName)
          )
          .slice(indexOfFirstPage, indexOfLastPage)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
      <br />
      <Pagination
        onChange={(page) => setPage(page)}
        pageSize={productsPerPage}
        total={total}
        current={page}
      />
      <br />
      <br />
      <Link
        onClick={goToTopOfPage}
        style={{ textDecoration: "none" }}
        to={"/kontakt"}
      >
        <button className="btn">Kontakt</button>
      </Link>
      <br />
      <br />
    </>
  );
};
