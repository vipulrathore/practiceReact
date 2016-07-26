export default function reducer(state={
    fetching:false,
    fetched:false,
    tweets:[],
    error:null
}, action) {
    switch (action.type) {
        case 'FETCH_TWEETS_PENDING': {
            state = {...state, fetching:true}
            break;
        }
        case 'FETCH_TWEETS_FULFILLED': {
            state = {...state, fetching:false, fetched:true, users:action.payload}
            break;
        }
        case 'FETCH_TWEETS_REJECTED': {
            state = {...state, fetching:false, error:action.payload}
            break;
        }
    }
    return state;
}