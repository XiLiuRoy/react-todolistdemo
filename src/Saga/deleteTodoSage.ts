import { call, takeLatest } from 'redux-saga/effects';

import { DELETE_TODO, deleteTodo } from '../Action/todoAction';
import { deleteTodo as removeTodo } from '../API/api';


export function* deleteTodoWatcher() {
    yield takeLatest(DELETE_TODO, deleteTodoFlow);
}

function* deleteTodoFlow(toBeDeleted: deleteTodo) {
    yield call(removeTodo, toBeDeleted.payload);
}