import React, { Component } from 'react';

import { todolistProps } from '../Containers/todolistContainer';
import { AddTodoInput } from './AddTodoComponent';

export default class TodolistComponent extends Component<todolistProps> {

    /**
     * Todo list component
     */
    constructor(props: todolistProps) {
        super(props);
        this.props.loadTodo();
        this.onDeleteClick.bind(this);
    }

    onDeleteClick(id: string){
        this.props.onDeleteClick(id);
    }

    render() {
        return (
            <div>
                <AddTodoInput onAddClicked={this.props.onAddToDoClick} isAddingTodo={this.props.isAddingTodo} />
                <div className="row justify-content-center py-5">
                    {this.props.isLoading ? <div>
                        <div className="spinner-grow text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> :
                        <ul className="list-group">
                            {this.props.todolist.map((todo) => {
                                return <li className="list-group-item d-flex justify-content-between" key={todo.Id}>{todo.Name}<button onClick={()=>this.onDeleteClick(todo.Id)} className="btn btn-danger">Delete</button></li>
                            })}
                        </ul>}
                </div>
            </div>
        )
    }
}

