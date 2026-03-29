import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counterReducer,
    //Them nhieu reducer 
});

export default allReducer;