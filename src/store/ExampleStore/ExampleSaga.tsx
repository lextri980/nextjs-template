import { all, takeLatest } from "redux-saga/effects";
import { ExampleActions } from "./ExampleReducer";

export function* exampleWatcher() {
  yield all([
    takeLatest(ExampleActions.exampleAction.type, getExampleWorker),
    // takeLatest(ExampleActions.example.type, getExampleWorker),
  ]);
}

function* getExampleWorker() {}
