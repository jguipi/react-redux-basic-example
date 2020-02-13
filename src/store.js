import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./redux/rootReducer";

var ReduxThunk = require("redux-thunk").default;

let enhancer;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  enhancer = compose(
    applyMiddleware(ReduxThunk),
    //uncommant that line to be able to use redux devtool
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  enhancer = compose(applyMiddleware(ReduxThunk));
}

const store = createStore(rootReducers, enhancer);

export { store };
