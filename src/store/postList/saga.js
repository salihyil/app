import { call, put, takeLatest } from "redux-saga/effects";

import { pendingPostList, fulfilledPostList, rejectedPostList } from "./slice";
import { postList } from "../../service/User/api";

function* postListUser() {
  try {
    const postListDta = yield call(postList);

    yield put(fulfilledPostList(postListDta));
  } catch (error) {
    yield put(rejectedPostList(error.message));
  }
}

export default function* postListWatcher() {
  yield takeLatest(pendingPostList, postListUser);
}
