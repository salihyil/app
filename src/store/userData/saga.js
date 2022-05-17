import { call, put, takeLatest } from "redux-saga/effects";

import { loginRequest, loginSuccess, loginError } from "./slice";
import { userData } from "../../service/User/api";
import { ERROR_MSG } from "./constants";

function* authorizeUser({ payload }) {
  try {
    const userDta = yield call(userData, payload);

    if (userDta.length > 0) {
      yield put(loginSuccess(userDta));
    } else {
      yield put(loginError(ERROR_MSG));
    }
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export default function* userDataWatcher() {
  yield takeLatest(loginRequest, authorizeUser);
}
