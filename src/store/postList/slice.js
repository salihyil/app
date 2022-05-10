import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postList } from "../../service/User/api";

const initialState = {
  postListData: [],
  loading: false,
  error: "",
};

export const postListAsync = createAsyncThunk("user/postList", async () => {
  const postListDta = await postList();

  return postListDta;
});

export const postListSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {},
  extraReducers: {
    [postListAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [postListAsync.fulfilled]: (state, action) => {
      state.postListData = action.payload;
      state.loading = false;
    },
    [postListAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function

export default postListSlice.reducer;
