import dispatcher from "../dispatcher";

export function createTodo(description) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        description
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}

export function reloadTodos() {
    dispatcher.dispatch({type: 'FETCH_TODOS'});
    setTimeout(()=>{
        dispatcher.dispatch({
            type: 'RELOAD_TODOS',
            todos: [
                {
                    'id':1,
                    'description': 'Finished Flux',
                    'completed': false
                },
                {
                    'id':2,
                    'description': 'Will start Redux',
                    'completed': false
                }
            ]
        })
    });
}