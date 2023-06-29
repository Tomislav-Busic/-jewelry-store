import React from "react";
import { CategoriesMenu } from "../../components/saleSectionComponents/categoriesMenu/CategoriesMenu";
import { Filters } from "../../components/saleSectionComponents/filters/Filters";
import { Products } from "../../components/saleSectionComponents/products/Products";
import { ModalImg } from "../../components/modalImg/ModalImg";
import { useSelector } from "react-redux";
import "./sale.scss";

export const Sale = () => {
  const imgModal = useSelector((state) => state.modal.toggleModal);
  return (
    <div className="art-page">
      <div className="container">
        <CategoriesMenu />
        <Filters />
        <Products />
        {imgModal && (
          <>
            <ModalImg />
          </>
        )}
      </div>
    </div>
  );
};
