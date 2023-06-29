import React from "react";
import { useSelector } from "react-redux";

import { CategoriesMenu } from "../../components/saleSectionComponents/categoriesMenu/CategoriesMenu";
import { Filters } from "../../components/saleSectionComponents/filters/Filters";
import { Products } from "../../components/saleSectionComponents/products/Products";
import { ModalImg } from "../../components/modalImg/ModalImg";

import styles from "./productsPage.module.scss";

export const ProductsPage = () => {
  const imgModal = useSelector((state) => state.modal.toggleModal);
  return (
    <div className={styles.products_page}>
      <div className={styles.container}>
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
