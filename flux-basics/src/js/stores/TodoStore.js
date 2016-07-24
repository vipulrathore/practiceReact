import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                'id':1,
                'description': 'Learn Flux',
                'completed': false
            },
            {
                'id':2,
                'description': 'Learn Redux',
                'completed': false
            }
        ];
    }

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;