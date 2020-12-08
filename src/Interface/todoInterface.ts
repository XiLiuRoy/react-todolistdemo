export interface Todo {
    Id:string;
    Name:string;
    Description:string;
    DueDate?: string;
    IsDone?: boolean;
    CreatedDate?:Date;
}

export interface AppState{
    todolist: Todo[],
    IsLoading: boolean,
    IsAddingTodo: boolean
}