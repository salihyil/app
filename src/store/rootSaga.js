import { all } from "redux-saga/effects";

import { userDataSaga } from "./userData/";
import { postListSaga } from "./postList/";
import { postDetailSaga } from "./postDetail";
import { postCommentSaga } from "./postComment";

export default function* rootSaga() {
  yield all([
    userDataSaga(),
    postListSaga(),
    postDetailSaga(),
    postCommentSaga(),
  ]);
}
