import React, { Component } from 'react';

import { todolistProps } from '../Containers/todolistContainer';
import { AddTodoInput } from './AddTodoComponent';

export default class TodolistComponent extends Component<todolistProps> {

    /**
     *
     */
    constructor(props: todolistProps) {
        super(props);

    }

    componentWillMount() {
        //dispatch = useDispatch(function)
        //this.props.loadTodo();
    }

    render() {
        return (
            <div>
                <AddTodoInput onAddClicked={this.props.onAddToDoClick} />
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
                                return <li className="list-group-item" key={todo.Id}>{todo.Name}</li>
                            })}
                        </ul>}
                </div>
            </div>
        )
    }
}

