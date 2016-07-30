import { toggleTodo } from "../actions/todoActions"
import { connect } from "react-redux"
import TodoList from "../components/TodoList"


function getVisibleTodos(todos, filter) {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'COMPLETED':
            return todos.filter(t => t.completed)
        case 'PENDING':
            return todos.filter(t => !t.completed)
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList