import { Todo } from '../Interface/todoInterface';

export const getTodos = async ():Promise<Todo[]> => {
    return fetch("https://api.todolistdemo.com").then(res => res.json());
}

export const postTodo = async (todo:Todo) => {
    return fetch("https://api.todolistdemo.com",{
        method:"POST",
        headers: {
            'content-type':'application/json',
            'accept':'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}