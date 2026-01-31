import { all, fork } from 'redux-saga/effects';
import { exampleWatcher } from './example-store/example.saga';

export default function* reduxSaga() {
  yield all([fork(exampleWatcher)]);
}
