import React from "react";
import "./ModalImg.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/slice/modal-slice";

export const ModalImg = () => {
  const dispatch = useDispatch();
  const src = useSelector((state) => state.modal.img);

  const toggleModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div className="modal" onClick={() => toggleModal()}>
      <img src={src} alt="img" />
    </div>
  );
};
