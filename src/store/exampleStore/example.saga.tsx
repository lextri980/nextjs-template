import { HttpStatus } from "@/constants";
import { ResponseType } from "@/types";
import { getPostApi } from "@api/example.api";
import {
  CallEffect,
  PutEffect,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { ExampleActions } from "./example.reducer";

export function* exampleWatcher() {
  yield all([
    takeLatest(ExampleActions.getPostRequest.type, getPostWorker),
    // takeLatest(ExampleActions.exampleAction.type, otherWorker),
  ]);
}

function* getPostWorker(): Generator<
  CallEffect | PutEffect,
  void,
  ResponseType<typeof getPostApi>
> {
  try {
    const response = yield call(getPostApi);
    if (response.status === HttpStatus.OK) {
      yield put(ExampleActions.getPostSucess(response.data));
    } else {
      yield put(ExampleActions.getPostFail(response.statusText));
    }
  } catch (error) {
    throw new Error();
  }
}
