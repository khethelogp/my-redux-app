import { takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../redux/ducks/user';
import { handleGetUser } from './handlers/user';

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
