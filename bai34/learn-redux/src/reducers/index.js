import counterReducer from "./counter";
import { combineReducers } from "redux";
import todoReducer from "./todo";

const allReducer = combineReducers({
    counterReducer,
    todoReducer,
    //Them nhieu reducer 
});

export default allReducer;