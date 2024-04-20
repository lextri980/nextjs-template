import { ResponseType } from "@/interface";
import {
  CallEffect,
  PutEffect,
  all,
  call,
  takeLatest,
} from "redux-saga/effects";
import { ExampleActions } from "./ExampleReducer";
import { ApiService } from "@/services";

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
    const response = yield call(getPostApi);
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}
