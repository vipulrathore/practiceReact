let nextId = 0;

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}