import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users:  null,
    error: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING': {
            state = {...state, fetching: true}
            break;
        }
        case 'FETCH_USERS_FULFILLED': {
            state = {...state, fetching:false, fetched:true, users:action.payload.data}
            break;
        }
        case 'FETCH_USERS_REJECTED': {
            state = {...state, fetching:false, fetched:false, error:action.payload}
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

store.subscribe(()=>{
    console.log("Store has changed", store.getState());
})

// store.dispatch((dispatch)=>{
//     dispatch({
//         type: 'FETCH_USERS_START'
//     })
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then((response)=>{
//             dispatch({
//                 type: 'RECEIVE_USERS',
//                 payload: response.data
//             })
//         })
//         .catch((err)=>{
//             dispatch({
//                 type: 'FETCH_USERS_ERROR',
//                 payload: err
//             })
//         })

// })

store.dispatch({
    type: 'FETCH_USERS',
    payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});

