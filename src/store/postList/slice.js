import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

const initialState = {
  postListData: [],
  loading: false,
  error: "",
};

export const postListSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    pendingPostList: (state, action) => {
      state.loading = true;
    },
    fulfilledPostList: (state, action) => {
      state.postListData = action.payload;
      state.loading = false;
    },
    rejectedPostList: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pendingPostList, fulfilledPostList, rejectedPostList } =
  postListSlice.actions;

export default postListSlice.reducer;
