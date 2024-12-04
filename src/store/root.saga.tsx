import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./authStore/auth.saga";
import { exampleWatcher } from "./exampleStore/example.saga";

export default function* reduxSaga() {
  yield all([fork(authWatcher), fork(exampleWatcher)]);
}
