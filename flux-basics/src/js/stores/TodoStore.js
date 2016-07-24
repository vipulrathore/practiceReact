import { EventEmitter } from "events";

import dispatcher from "../dispatcher";


class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                'id':1,
                'description': 'Learning Flux',
                'completed': false
            },
            {
                'id':2,
                'description': 'Start soon Redux',
                'completed': false
            }
        ];
    }

    createTodo(description) {
        const id = Date.now();
        this.todos.push({
            id,
            description,
            completed: false
        });
        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case 'CREATE_TODO':
                this.createTodo(action.description);6
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
window.todoStore = todoStore;

export default todoStore;