import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";

const reducer = function(state=[], action) {
    switch(action.type) {
        case 'ADD_TODO':
            state = [...state,{
                id: action.id,
                text: action.text,
                completed: false
            }];
            break;
    }
    return state;
}
let todoId = 0;
class Layout extends React.Component {
    render() {
        const { todoList } = this.props;
        return(
            <div>
                <input ref={node=>{
                    this.input = node;
                }} />
                <button onClick={()=>{
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: todoId++,
                        text: this.input.value 
                    });
                    this.input.value = '';
                }}> Add todo </button>
                <div>
                    {todoList.map(todo=><li key={todo.id}>{todo.text}</li>)}
                </div>
            </div>
        );
    }
}

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(<Layout todoList={store.getState()}/>, document.getElementById('app'))
}
store.subscribe(render)
ReactDOM.render(<Layout todoList={store.getState()}/>, document.getElementById('app'))