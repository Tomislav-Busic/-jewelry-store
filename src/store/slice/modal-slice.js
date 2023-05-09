import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    toggleModal: false,
    img: null,
  },
  reducers: {
    closeModal(state) {
      state.toggleModal = !state.toggleModal;
    },
    setImg(state, action) {
      state.img = null;
      state.img = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
