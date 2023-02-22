import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    getData(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
