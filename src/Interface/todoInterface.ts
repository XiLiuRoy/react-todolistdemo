export interface Todo {
    Id:string;
    Name:string;
    Description:string;
    DueDate?: Date;
    IsDone?: boolean;
    CreatedDate?:Date;
}

export interface AppState{
    todolist: Todo[],
    IsLoading: boolean
}