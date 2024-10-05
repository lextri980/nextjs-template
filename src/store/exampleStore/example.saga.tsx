import { ResponseType } from "@/types";
import { ApiService } from "@/services";
import {
  CallEffect,
  PutEffect,
  all,
  call,
  takeLatest,
} from "redux-saga/effects";
import { ExampleActions } from "./example.reducer";

export function* exampleWatcher() {
  yield all([
    takeLatest(ExampleActions.getPostRequest.type, getPostWorker),
    // takeLatest(ExampleActions.exampleAction.type, otherWorker),
  ]);
}

const getPostApi = async () => await ApiService.get("/posts");
function* getPostWorker(): Generator<
  CallEffect | PutEffect,
  void,
  ResponseType<typeof getPostApi>
> {
  try {
    yield call(getPostApi);
  } catch (error) {
    throw new Error();
  }
}
