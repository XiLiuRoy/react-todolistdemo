import { Todo } from '../Interface/todoInterface';

export const getTodos = async ():Promise<Todo[]> => {
    return fetch("https://api.todolistdemo.com").then(res => res.json());
}

export const postTodo = async (todo:Todo) => {
    return fetch("https://api.todolistdemo.com/TodoItem",{
        method:"POST",
        headers: {
            'content-type':'application/json',
            'accept':'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const deleteTodo = async (id:string) => {
    return fetch("https://api.todolistdemo.com/TodoItem/"+ id,{
        method:"DELETE",
        headers: {
            'content-type':'application/json',
            'accept':'application/json'
        }
    })
}