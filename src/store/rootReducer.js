import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from './slices/todos'

const rootReducer = combineReducers({
    todos: todoReducer,
})

export default rootReducer;