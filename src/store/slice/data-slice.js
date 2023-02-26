import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
    productName: "",
  },
  reducers: {
    setData(state, action) {
      state.dataList = action.payload;
    },
    filterByName(state, action) {
      state.productName = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
