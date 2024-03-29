import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login/login-slice";
import dataSlice from "./slice/data/data-slice";
import paginationSlice from "./slice/pagination/pagination-slice";
import modalSlice from "./slice/modal/modal-slice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    data: dataSlice,
    pagination: paginationSlice,
    modal: modalSlice,
  },
});
