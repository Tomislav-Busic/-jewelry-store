import React from "react";
import { CategoriesMenu } from "../../Components/SALESectionComponents/CategoriesMenu/CategoriesMenu";
import { Filters } from "../../Components/SALESectionComponents/Filters/Filters";
import { Products } from "../../Components/SALESectionComponents/Products/Products";
import { ModalImg } from "../../Components/ModalImg/ModalImg";
import { useSelector } from "react-redux";
import "./Sale.scss";

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
