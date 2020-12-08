import { connect, ConnectedProps } from 'react-redux';

import { addTodo, deleteTodo, loadTodo } from '../Action/todoAction';
import TodolistComponent from '../Component/TodolistComponent';
import { AppState } from '../Interface/todoInterface';

const mapTodoListState = (state: AppState) => ({
    todolist: state.todolist,
    isLoading: state.IsLoading
})

const mapTodoListDispatch = {
    onAddToDoClick: (todo:string) => addTodo(todo), //TODO: change load to do to update id returned from server.
    onDeleteClick: (id:string) => deleteTodo(id),
    loadTodo: () => loadTodo()
}

const todoListConnector = connect(mapTodoListState, mapTodoListDispatch)

export type todolistProps = ConnectedProps<typeof todoListConnector>

export default todoListConnector(TodolistComponent);