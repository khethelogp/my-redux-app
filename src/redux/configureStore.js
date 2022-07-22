import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';
import { watcherSaga } from '../sagas/saga';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
