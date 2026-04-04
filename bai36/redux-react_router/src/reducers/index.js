import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

const allReducer = combineReducers({
    cartReducer,
});

export default allReducer;