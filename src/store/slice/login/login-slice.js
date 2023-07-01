import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload;
    },
    logout(state) {
      state.isLoggedIn = null;
    },
  },
});

export default loginSlice.reducer;
export const loginActions = loginSlice.actions;
