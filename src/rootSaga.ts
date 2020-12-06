import { fork } from 'redux-saga/effects';

import { loadTodoWatcher } from './Saga/loadTodoSaga';
import { addTodoWatcher } from './Saga/addTodoSage';
import { deleteTodoWatcher } from './Saga/deleteTodoSage';

export function* rootSaga(){
    yield fork(loadTodoWatcher);
    yield fork(addTodoWatcher);
    yield fork(deleteTodoWatcher);
}