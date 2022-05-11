import { call, put, takeLatest } from "redux-saga/effects";

import {
  fulfilledPostDetail,
  rejectedPostDetail,
  pendingPostDetail,
} from "./slice";
import { postDetail } from "../../service/User/api";

/* import { createBrowserHistory } from "history";
const history = createBrowserHistory(); */

function* postDetailUser({ payload }) {
  try {
    const postDetailDta = yield call(postDetail, payload);
    console.log("postDetailDta", postDetailDta);

    yield put(fulfilledPostDetail(postDetailDta));
  } catch (error) {
    // Calling an error action so that UI can handle error
    yield put(rejectedPostDetail("error"));
  }
}

export default function* postDetailWatcher() {
  yield takeLatest(pendingPostDetail, postDetailUser);
}
