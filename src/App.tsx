import React from 'react';

import TodolistComponent from './Containers/todolistContainer';

function App() {
    return (
        <div className="container">
            <div className="row py-5">
                <h2 className="col text-center">A Todo list demo app using React-redux-typescript</h2>
            </div>
            <TodolistComponent />
        </div>
    );
}

export default App;
