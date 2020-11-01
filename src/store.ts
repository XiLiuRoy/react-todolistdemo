import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { todoReducer } from './Reducer/todoReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);