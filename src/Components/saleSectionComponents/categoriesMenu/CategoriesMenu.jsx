import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "store/slice/data-slice";
import { paginationActions } from "store/slice/pagination-slice";

import styles from "./categoriesMenu.module.scss";

export const CategoriesMenu = () => {
  const category = useSelector((state) => state.data.categoryName);
  const dispatch = useDispatch();

  const handleChangeCategory = (value) => {
    dispatch(dataActions.addCategory(value));
    dispatch(paginationActions.setPage());
  };

  const handleShowAll = () => {
    dispatch(dataActions.showAllProducts());
    dispatch(paginationActions.setPage());
  };

  return (
    <div className={styles.categories}>
      <button
        className={category === "" ? `${styles.active}` : ""}
        onClick={() => handleShowAll()}
      >
        Svi proizvodi
      </button>
      <button
        className={category === "nakit" ? `${styles.active}` : ""}
        onClick={() => handleChangeCategory("nakit")}
      >
        Nakit
      </button>
      <button
        className={category === "antikviteti" ? `${styles.active}` : ""}
        onClick={() => handleChangeCategory("antikviteti")}
      >
        Antikviteti
      </button>
      <button
        className={category === "slike" ? `${styles.active}` : ""}
        onClick={() => handleChangeCategory("slike")}
      >
        Slike
      </button>
      <button
        className={category === "ostalo" ? `${styles.active}` : ""}
        onClick={() => handleChangeCategory("ostalo")}
      >
        Ostalo
      </button>
    </div>
  );
};
