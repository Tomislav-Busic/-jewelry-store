import React from "react";
import { CategoriesMenu } from "../../Components/SALESectionComponents/CategoriesMenu/CategoriesMenu";
import { Filters } from "../../Components/SALESectionComponents/Filters/Filters";
import "./Sale.scss";

export const Sale = () => {
  return (
    <div className="art-page">
      <div className="container">
        <CategoriesMenu />
        <Filters />
      </div>
    </div>
  );
};
