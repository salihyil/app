import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

import userDataReducer from "./userData/slice";
import postListReducer from "./postList/slice";
import postDetailReducer from "./postDetail/slice";
import postCommentReducer from "./postComment/slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  userData: userDataReducer,
  postList: postListReducer,
  postDetail: postDetailReducer,
  postComment: postCommentReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
