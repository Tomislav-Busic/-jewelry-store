import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
    productName: "",
    categoryName: "",
  },
  reducers: {
    setData(state, action) {
      state.dataList = action.payload;
    },
    filterByName(state, action) {
      state.productName = action.payload;
    },
    sortByPrice(state, action) {
      switch (action.payload) {
        case "lower":
          state.dataList.sort((a, b) => a.price - b.price);
          break;
        case "higher":
          state.dataList.sort((a, b) => b.price - a.price);
          break;
        default:
      }
    },
    addCategory(state, action) {
      state.categoryName = action.payload;
    },
    showAllProducts(state) {
      state.categoryName = "";
    },
  },
});

export const dataActions = dataSlice.actions;
