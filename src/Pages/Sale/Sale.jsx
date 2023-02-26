import React from "react";
import { CategoriesMenu } from "../../Components/SALESectionComponents/CategoriesMenu/CategoriesMenu";
import { Filters } from "../../Components/SALESectionComponents/Filters/Filters";
import { Products } from "../../Components/SALESectionComponents/Products/Products";
import "./Sale.scss";

export const Sale = () => {
  return (
    <div className="art-page">
      <div className="container">
        <CategoriesMenu />
        <Filters />
        <Products />
      </div>
    </div>
  );
};
