import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
  },
  reducers: {
    setPage(state) {
      state.page = 1;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
