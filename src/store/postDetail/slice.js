import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postDetail } from "../../service/User/api";
import { SLICE_NAME, TYPEPREFIX_NAME } from "./constants";

const initialState = {
  postDetailData: {},
  loading: false,
  error: "",
};

export const fetchPostDetailAsync = createAsyncThunk(
  TYPEPREFIX_NAME,
  async (id) => {
    const postDetailDta = await postDetail(id);

    return postDetailDta;
  }
);

export const postDetailSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostDetailAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPostDetailAsync.fulfilled]: (state, action) => {
      state.postDetailData = action.payload;
      state.loading = false;
    },
    [fetchPostDetailAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default postDetailSlice.reducer;
