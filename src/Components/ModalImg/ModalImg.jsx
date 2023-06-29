import React from "react";
import "./modalImg.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/slice/modal-slice";

export const ModalImg = () => {
  const dispatch = useDispatch();
  const src = useSelector((state) => state.modal.img);
  const name = useSelector((state) => state.modal.name);

  const toggleModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <h2>{name}</h2>
      <img src={src} alt="img" />
    </div>
  );
};
