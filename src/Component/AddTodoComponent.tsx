import React, { ChangeEvent, useState } from 'react';

import { Action } from '../Action/todoAction';

export const AddTodoInput = (props: { onAddClicked: (todo: string) => Action, isAddingTodo: boolean }) => {
    const [todoInput, setTodo] = useState("")

    const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const onAddClick = () => {
        props.onAddClicked(todoInput);
        setTodo("");
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="addTodo" value={todoInput} onChange={updateTodo} placeholder="what's in your mind?" />
                    <div className="input-group-append">
                        {props.isAddingTodo ? <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>:<button type="button" className="btn btn-primary" onClick={onAddClick}>Add</button>}
                    </div>
                </div>
            </div>
        </div>
    );
} 