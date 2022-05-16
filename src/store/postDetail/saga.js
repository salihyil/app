import { call, put, takeLatest } from "redux-saga/effects";

import {
  fulfilledPostDetail,
  rejectedPostDetail,
  pendingPostDetail,
} from "./slice";
import { postDetail } from "../../service/User/api";

function* postDetailUser({ payload }) {
  try {
    const postDetailDta = yield call(postDetail, payload);

    yield put(fulfilledPostDetail(postDetailDta));
  } catch (error) {
    console.log(error.message);
    yield put(rejectedPostDetail(error.message));
  }
}

export default function* postDetailWatcher() {
  yield takeLatest(pendingPostDetail, postDetailUser);
}
