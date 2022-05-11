import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

const initialState = {
  postCommentData: [],
  loading: false,
  error: "",
};

/* export const fetchPostCommentAsync = createAsyncThunk(
  TYPEPREFIX_NAME,
  async (id) => {
    const postCommentDta = await postComment(id);

    return postCommentDta;
  }
); */

export const postCommentSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    pendingPostComment: (state, action) => {
      state.loading = true;
    },
    fulfilledPostComment: (state, action) => {
      state.postCommentData = action.payload;
      state.loading = false;
    },
    rejectedPostComment: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { pendingPostComment, fulfilledPostComment, rejectedPostComment } =
  postCommentSlice.actions;

export default postCommentSlice.reducer;
