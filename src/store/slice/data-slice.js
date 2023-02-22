import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
  },
  reducers: {
    getData(state, action) {
      state.dataList = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
