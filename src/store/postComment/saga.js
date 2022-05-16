import { call, put, takeLatest } from "redux-saga/effects";

import {
  pendingPostComment,
  fulfilledPostComment,
  rejectedPostComment,
} from "./slice";
import { postComment } from "../../service/User/api";

function* postCommentUser({ payload }) {
  try {
    const postDetailDta = yield call(postComment, payload);

    yield put(fulfilledPostComment(postDetailDta));
  } catch (error) {
    console.log(error);
    yield put(rejectedPostComment(error.message));
  }
}

export default function* postCommentWatcher() {
  yield takeLatest(pendingPostComment, postCommentUser);
}
