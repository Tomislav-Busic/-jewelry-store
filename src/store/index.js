import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/login-slice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
