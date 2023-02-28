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
    sortByPrice(state, action) {
      switch (action.payload) {
        case "lower":
          state.dataList2.sort((a, b) => a.price - b.price);
          break;
        case "higher":
          state.dataList2.sort((a, b) => b.price - a.price);
          break;
        default:
      }
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
