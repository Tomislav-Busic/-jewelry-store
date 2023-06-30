import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "store/slice/modal-slice";

import styles from "./productCard.module.scss";

export const ProductCard = ({ product }) => {
  const { id, name, category, img, img_name } = product;
  const dispatch = useDispatch();

  const openImg = (img, name) => {
    dispatch(modalActions.setImg(img));
    dispatch(modalActions.setName(name));
    dispatch(modalActions.closeModal());
  };
  return (
    <div className={styles.product_card} id={id}>
      <img onClick={() => openImg(img, name)} src={img} alt={img_name} />
      <div className={styles.category}>
        <h3>{category}</h3>
      </div>
      <div className={styles.info_card}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
