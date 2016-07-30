export default function todos(state=[], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            break;
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                else {
                    return todo;
                }
            });
            break;
        default:
            return state;
    }
}
