import { all, fork } from "redux-saga/effects";
import { exampleWatcher } from "./exampleStore/example.saga";

export default function* reduxSaga() {
  yield all([
    fork(exampleWatcher),
    // fork(anotherWatcher),
  ]);
}
