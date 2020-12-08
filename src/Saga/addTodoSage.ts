import { call, takeLatest, put } from 'redux-saga/effects';
import { addTodo, addTodoToList, ADD_TODO } from '../Action/todoAction';

import { postTodo } from '../API/api';

export function* addTodoWatcher() {
    yield takeLatest(ADD_TODO, addTodoFlow);
}

function* addTodoFlow(addAction: addTodo) {
    const todoItem = yield call(postTodo,addAction.payload);
    yield put(addTodoToList(todoItem));
}