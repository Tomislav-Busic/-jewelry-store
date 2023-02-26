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
      <button onClick={() => handleShowAll()}>Svi proizvodi</button>
      <button onClick={() => handleChangeCategory("nakit")}>Nakit</button>
      <button onClick={() => handleChangeCategory("inventar")}>Inventar</button>
      <button onClick={() => handleChangeCategory("slike")}>Slike</button>
      <button onClick={() => handleChangeCategory("ostalo")}>Ostalo</button>
    </div>
  );
};
