import { call, takeLatest, put } from 'redux-saga/effects';

import { ADD_TODO, addTodo } from '../Action/todoAction';
import { postTodo } from '../API/api';

export function* addTodoWatcher() {
    yield takeLatest(ADD_TODO, addTodoFlow);
}

function* addTodoFlow(addAction: addTodo) {
    const updatedTodoWithId = yield call(postTodo,addAction.payload);
    //TODO: update Todolist
}