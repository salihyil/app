import { call, put, takeLatest } from "redux-saga/effects";

import { loginRequest, loginSuccess, loginError } from "./slice";
import { userData } from "../../service/User/api";

function* authorizeUser({ payload }) {
  try {
    const userDta = yield call(userData, payload);

    if (userDta.length > 0) {
      yield put(loginSuccess(userDta));
    } else {
      yield put(loginError("Kullanıcı bulunamadı"));
    }
  } catch (error) {
    // Calling an error action so that UI can handle error
    yield put(loginError("Request failed with status code 404"));
  }
}

export default function* userDataWatcher() {
  yield takeLatest(loginRequest, authorizeUser);
}
