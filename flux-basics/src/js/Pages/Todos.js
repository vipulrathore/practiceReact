import React from "react";
import Todo from "../components/Todo"
import TodoStore from "../stores/TodoStore"
import * as TodoActions from "../actions/TodoActions"


export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            'todos': TodoStore.getAll()
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos)
        console.log("count", TodoStore.listenerCount("change"));
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    createTodo() {
        TodoActions.createTodo("New Todo");
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });
        return(
            <div>
                {TodoComponents}
                <button onClick={this.createTodo.bind(this)}>Create Todo</button>
                <button onClick={this.reloadTodos.bind(this)}>Reload</button>
            </div>
        );
    }
}