import { all, fork } from "redux-saga/effects";
import { exampleWatcher } from "./ExampleStore/ExampleSaga";

export default function* reduxSaga() {
  yield all([
    fork(exampleWatcher),
    // fork(exampleWatcher),
  ]);
}
