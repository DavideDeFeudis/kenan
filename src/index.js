import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
// import $ from 'jquery'
// import Popper from 'popper.js'
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./Auth";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import workshopReducer from "./store/reducers/workshopReducer";
import modalReducer from "./store/reducers/modalReducer";

const rootReducer = combineReducers({
  workshopReducer,
  modalReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
