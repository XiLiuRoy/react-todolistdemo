import { Todo } from '../Interface/todoInterface';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LOAD_TODO = 'LOAD_TODO';
export const SET_TODO = 'SET_TODO';

export interface addTodo {
    type: typeof ADD_TODO
    payload: Todo
}

export interface deleteTodo {
    type: typeof DELETE_TODO
    payload: string
}

interface loadTodo {
    type: typeof LOAD_TODO
}

interface setTodo {
    type: typeof SET_TODO
    payload: Todo[]
}

export type Action = addTodo | deleteTodo | loadTodo |setTodo;

export function addTodo(todo:string):Action{
    //Hack here as API requires coupe of fields not to be null :)
    // TODO: Lazy Roy to finish it
    return {
        type: ADD_TODO,
        payload: {Id:"", Name:todo, Description: todo, DueDate: '2022-12-10', CreatedDate: new Date("2022-12-10"), IsDone: false}
    }
}

export function deleteTodo(id:string):Action{
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function loadTodo():Action{
    return {
        type: LOAD_TODO
    }
}

export function setTodo(todolist:Todo[]):Action{
    return {
        type: SET_TODO,
        payload: todolist
    }
}