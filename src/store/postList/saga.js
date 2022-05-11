import { call, put, takeLatest } from "redux-saga/effects";

import { pendingPostList, fulfilledPostList, rejectedPostList } from "./slice";
import { postList } from "../../service/User/api";

/* import { createBrowserHistory } from "history";
const history = createBrowserHistory(); */

function* postListUser() {
  try {
    const postListDta = yield call(postList);

    yield put(fulfilledPostList(postListDta));
  } catch (error) {
    // Calling an error action so that UI can handle error
    yield put(rejectedPostList("error"));
  }
}

export default function* postListWatcher() {
  yield takeLatest(pendingPostList, postListUser);
}
