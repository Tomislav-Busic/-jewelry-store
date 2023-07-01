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

console.log(firebaseData());
export const getProducts = createAsyncThunk(
  "products/getAll",
  async (thunkAPI) => {
    try {
      return await firebaseData();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: (state) => state.initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dataList = action;
        state.dataList2 = action;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

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
