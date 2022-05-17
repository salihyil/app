import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

const initialState = {
  postDetailData: {},
  loading: false,
  error: "",
};

export const postDetailSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    pendingPostDetail: (state, action) => {
      state.loading = true;
    },
    fulfilledPostDetail: (state, action) => {
      state.postDetailData = action.payload;
      state.loading = false;
    },
    rejectedPostDetail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { pendingPostDetail, fulfilledPostDetail, rejectedPostDetail } =
  postDetailSlice.actions;

export default postDetailSlice.reducer;
