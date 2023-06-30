import React from "react";
import { useSelector } from "react-redux";

import { CategoriesMenu } from "./components/categoriesMenu/CategoriesMenu";
import { Filters } from "./components/filters/Filters";
import { ProductsList } from "./components/products/ProductsList";
import { ModalImg } from "features/components/modalImg/ModalImg";

import styles from "./products.module.scss";

export const Products = () => {
  const imgModal = useSelector((state) => state.modal.toggleModal);
  <div className={styles.container}>
    <CategoriesMenu />
    <Filters />
    <ProductsList />
    {imgModal && (
      <>
        <ModalImg />
      </>
    )}
  </div>;
};
