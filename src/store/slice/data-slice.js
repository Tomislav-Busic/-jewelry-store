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
  },
});

export const dataActions = dataSlice.actions;
