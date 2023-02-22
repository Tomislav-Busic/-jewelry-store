import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/login-slice";
import { dataSlice } from "./slice/data-slice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    data: dataSlice.reducer,
  },
});
