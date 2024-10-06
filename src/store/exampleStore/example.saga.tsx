import { ResponseType } from "@/types";
import { ApiService } from "@/services";
import {
  CallEffect,
  PutEffect,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { ExampleActions } from "./example.reducer";
import { HttpStatus } from "@/constants";

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
    if (response.status === HttpStatus.OK) {
      yield put(ExampleActions.getPostSucess(response.data));
    } else {
      yield put(ExampleActions.getPostFail(response.statusText));
    }
  } catch (error) {
    throw new Error();
  }
}
