import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "store/slice/modal/modal-slice";

import styles from "./modalImg.module.scss";

export const ModalImg = () => {
  const dispatch = useDispatch();
  const src = useSelector((state) => state.modal.img);
  const name = useSelector((state) => state.modal.name);

  const toggleModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div
      className={styles.modal}
      onClick={() => toggleModal()}
      data-testid="modal"
    >
      <h2>{name}</h2>
      <img src={src} alt="img" />
    </div>
  );
};
