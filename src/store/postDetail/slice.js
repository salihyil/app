import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postDetail } from "../../service/User/api";

const initialState = {
  postDetailData: {},
  loading: false,
  error: "",
};

export const fetchPostDetailAsync = createAsyncThunk(
  "user/postDetail",
  async (id) => {
    const postDetailDta = await postDetail(id);

    return postDetailDta;
  }
);

export const postDetailSlice = createSlice({
  name: "postDetail",
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
