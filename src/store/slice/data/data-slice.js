import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseData } from "./data-service";

const initialState = {
  dataList: [],
  dataList2: [],
  isError: false,
  isSuccess: false,
  productName: "",
  categoryName: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    try {
      return await firebaseData();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.dataList = action.payload;
        state.dataList2 = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default dataSlice;
export const dataActions = dataSlice.actions;

/*
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
*/
