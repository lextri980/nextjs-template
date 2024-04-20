import { all, fork } from "redux-saga/effects";
import { exampleWatcher } from "./exampleStore/ExampleSaga";

export default function* reduxSaga() {
  yield all([
    fork(exampleWatcher),
    // fork(anotherWatcher),
  ]);
}
