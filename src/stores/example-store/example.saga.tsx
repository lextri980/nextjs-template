import { HttpStatus } from '@/constants';
import { getPostApi } from '@api/example.api';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ExampleActions } from './example.reducer';
import { TGetPostApiRes } from './type';

function* getPostWorker(): Generator {
  try {
    const response: TGetPostApiRes = yield call(getPostApi);
    if (response.status === HttpStatus.OK) {
      yield put(ExampleActions.getPostSucess(response.data));
    } else {
      yield put(ExampleActions.getPostFail(response.statusText));
    }
  } catch {
    throw new Error();
  }
}

export function* exampleWatcher() {
  yield all([
    takeEvery(ExampleActions.getPostRequest.type, getPostWorker),
    // takeLatest(ExampleActions.exampleAction.type, otherWorker),
  ]);
}
