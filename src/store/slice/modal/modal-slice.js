import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    toggleModal: false,
    img: null,
    name: null,
  },
  reducers: {
    closeModal(state) {
      state.toggleModal = !state.toggleModal;
    },
    setImg(state, action) {
      state.img = null;
      state.img = action.payload;
    },
    setName(state, action) {
      state.name = null;
      state.name = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
