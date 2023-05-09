import { createSlice } from "@reduxjs/toolkit";

export const stripeSlice = createSlice({
  name: "modal",
  initialState: {
    toggleModal: false,
  },
  reducers: {
    closeModal(state) {
      state.toggleModal = !state.toggleModal;
    },
  },
});

export const stripeActions = stripeSlice.actions;
