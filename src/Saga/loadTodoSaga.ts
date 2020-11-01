import { call, put, takeLatest } from 'redux-saga/effects';

import { LOAD_TODO, setTodo } from '../Action/todoAction';
import { getTodos } from '../API/api';

export function* loadTodoWatcher(){
    yield takeLatest(LOAD_TODO, loadTodoFlow);
}

function* loadTodoFlow(){
    const todos = yield call(getTodos);
    yield put(setTodo(todos));
}