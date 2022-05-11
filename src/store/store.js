import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData/slice";
import postListReducer from "./postList/slice";
import postDetailReducer from "./postDetail/slice";
import postCommentReducer from "./postComment/slice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    postList: postListReducer,
    postDetail: postDetailReducer,
    postComment: postCommentReducer,
  },
});
