import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData/slice";
import postListReducer from "./postList/slice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    postList: postListReducer,
  },
});
