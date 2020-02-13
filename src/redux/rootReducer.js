import { combineReducers } from "redux";
import counterDataReducers from "./counterData/counterDataReducers";

const rootReducers = combineReducers({
    counterDataReducers
});

export default rootReducers;
