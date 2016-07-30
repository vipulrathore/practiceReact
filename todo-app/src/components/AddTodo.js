import React from "react"
import ReactDOM from "react-dom"
import { addTodo } from "../actions/todoActions"

class AddTodo extends React.Component {
    addTodoFunc() {
        this.context.store.dispatch(addTodo(this._input.value));
        this._input.value = '';
    }
    render() {
        return(
            <div>
                <input ref={node => this._input = node} />
                <button onClick={this.addTodoFunc.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

AddTodo.contextTypes = {
  store: React.PropTypes.object,
};

export default AddTodo