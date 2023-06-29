import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
    dataList2: [],
    productName: "",
    categoryName: "",
  },
  reducers: {
    setData(state, action) {
      state.dataList = action.payload;
      state.dataList2 = action.payload;
    },
    filterByName(state, action) {
      state.productName = action.payload;
    },
    addCategory(state, action) {
      state.categoryName = action.payload;
      state.dataList2 = state.dataList;
      state.dataList2 = state.dataList2.filter(
        (items) => items.category === action.payload
      );
    },
    showAllProducts(state) {
      state.categoryName = "";
      state.dataList2 = state.dataList;
    },
  },
});

export const dataActions = dataSlice.actions;
