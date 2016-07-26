export default function reducer(state={
    fetching:false,
    fetched:false,
    users:[],
    error:null
}, action) {
    switch (action.type) {
        case 'FETCH_USERS_PENDING': {
            state = {...state, fetching:true}
            break;
        }
        case 'FETCH_USERS_FULFILLED': {
            state = {...state, fetching:false, fetched:true, users:action.payload.data}
            break;
        }
        case 'FETCH_USERS_REJECTED': {
            state = {...state, fetching:false, error:action.payload}
            break;
        }
    }
    return state;
}