import React from "react";
import "./CategoriesMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/slice/data-slice";

export const CategoriesMenu = () => {
  const category = useSelector((state) => state.data.categoryName);
  const dispatch = useDispatch();

  const handleChangeCategory = (value) => {
    dispatch(dataActions.addCategory(value));

  };

  const handleShowAll = () => {
    dispatch(dataActions.showAllProducts());
  };

  return (
    <div className="categories">
      <button
        className={category === "" ? "active" : ""}
        onClick={() => handleShowAll()}
      >
        Svi proizvodi
      </button>
      <button
        className={category === "nakit" ? "active" : ""}
        onClick={() => handleChangeCategory("nakit")}
      >
        Nakit
      </button>
      <button
        className={category === "inventar" ? "active" : ""}
        onClick={() => handleChangeCategory("inventar")}
      >
        Inventar
      </button>
      <button
        className={category === "slike" ? "active" : ""}
        onClick={() => handleChangeCategory("slike")}
      >
        Slike
      </button>
      <button
        className={category === "ostalo" ? "active" : ""}
        onClick={() => handleChangeCategory("ostalo")}
      >
        Ostalo
      </button>
    </div>
  );
};
