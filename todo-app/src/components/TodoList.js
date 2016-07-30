import React from "react"
import Todo from "./Todo"


export default class TodoList extends React.Component {
    render(){
        const { todos } = this.props;
        console.log(todos);
        return(
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={()=> this.props.onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}
