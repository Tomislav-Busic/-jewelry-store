import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
  },
  reducers: {
    setData(state, action) {
      let newData = action.payload;
      state.dataList = newData;
    },
  },
});

export const dataActions = dataSlice.actions;
