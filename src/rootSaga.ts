import { fork } from 'redux-saga/effects';

import { loadTodoWatcher } from './Saga/loadTodoSaga';

export function* rootSaga(){
    yield fork(loadTodoWatcher);
}