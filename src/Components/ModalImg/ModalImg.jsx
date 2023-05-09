import React from "react";
import "./ModalImg.scss";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/slice/modal-slice";

export const ModalImg = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div className="modal" onClick={() => toggleModal()}>
      ModalImg
    </div>
  );
};
