import React from "react";
import { CategoriesMenu } from "../SALESectionComponents/CategoriesMenu/CategoriesMenu";

export const ProductsFilters = () => {
  return (
    <div className="filters-container">
      <CategoriesMenu />
      <div className="filters">
        <input />
        <select name="cars" id="cars">
          <option value="lower">Niža cijena</option>
          <option value="higher">Viša cijena</option>
        </select>
      </div>
    </div>
  );
};
