import React from "react";
import { store } from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <button>Increment button section</button>
        <button>Redux thunk example</button>
        <Switch>
          <Route path="/">
            <CounterPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
