import { stat } from 'fs';
import { Action } from '../Action/todoAction';
import { AppState } from '../Interface/todoInterface';

const initialState = {
    IsLoading: true,
    todolist: [
        {
            Id: "1",
            Name: "test",
            Description: "test"
        }
    ]
}

export const todoReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, IsLoading: true };
        case "ADD_TODO_TO_LIST":
            return { ...state, IsLoading: false, todolist: [...state.todolist, action.payload] }
        case "LOAD_TODO":
            return { ...state, IsLoading: true }
        case "SET_TODO":
            return { ...state, IsLoading: false, todolist: action.payload }
        case "DELETE_TODO":
            state.todolist = state.todolist.filter(x => x.Id !== action.payload);
            return { ...state, IsLoading: false }
        default:
            return state;
    }
}