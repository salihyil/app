import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postComment } from "../../service/User/api";

const initialState = {
  postCommentData: [],
  loading: false,
  error: "",
};

export const fetchPostCommentAsync = createAsyncThunk(
  "user/postComment",
  async (id) => {
    const postCommentDta = await postComment(id);

    return postCommentDta;
  }
);

export const postCommentSlice = createSlice({
  name: "postComment",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostCommentAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPostCommentAsync.fulfilled]: (state, action) => {
      state.postCommentData = action.payload;
      state.loading = false;
    },
    [fetchPostCommentAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default postCommentSlice.reducer;