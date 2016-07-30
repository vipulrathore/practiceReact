import { combineReducers } from "redux"
import todos from "./todoReducer"
import visibilityFilter from "./visibilityFilterReducer"

export default combineReducers({
    todos,
    visibilityFilter
})
