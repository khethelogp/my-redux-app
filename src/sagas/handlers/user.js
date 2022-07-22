import { call, put } from 'redux-saga/effects';
import { setUser } from '../../redux/ducks/user';
import { requestGetUser } from '../requests/user';

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
