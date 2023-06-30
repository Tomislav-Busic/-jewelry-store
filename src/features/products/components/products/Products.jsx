import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "store/slice/pagination-slice";
import { goToTopOfPage } from "utilities/tools";
import { Pagination } from "antd";

import { ProductCard } from "./productCard/ProductCard";

import styles from "./products.module.scss";

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
      <h2 className={styles.price}>Cijene su na upit</h2>
      <div className={styles.products}>
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
        <button className={styles.btn}>Kontakt</button>
      </Link>
      <br />
      <br />
    </>
  );
};
