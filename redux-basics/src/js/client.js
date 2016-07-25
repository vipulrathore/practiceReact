import { combineReducers, applyMiddleware, createStore } from "redux";

const userReducer = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            state = {...state, name:action.payload}
            break;
        }
        case 'CHANGE_AGE': {
            state = {...state, age:action.payload}
            break;
        }
    }
    return state;
}

const tweetsReducer = (state=[], action) => {
    return state
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

const reducer = (state, action) => {
    if (action.type === 'INC') {
        return state + action.payload
    }
    if( action.type === 'ERROR') {
        throw new Error("Fatta")
    }
    return state
}

var logger = (store) => (next) => (action) => {
    console.log("Action fired", action);
    next(action);
}

var error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log("Error occured", e)
    }
}


const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe(()=>{
    console.log("Store has changed", store.getState());
})

store.dispatch({
    type: 'CHANGE_NAME',
    payload: 'Vipul'
})

store.dispatch({
    type: 'CHANGE_AGE',
    payload: 22
})

store.dispatch({
    type: 'INC',
    payload: 1
})

store.dispatch({
    type: 'ERROR'
})
