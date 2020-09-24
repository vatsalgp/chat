import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from './components/App';
import reducers from "./reducers";
// import * as serviceWorker from './serviceWorker';

const getAuth = () => {
  const string = window.localStorage.getItem("auth");
  if (string)
    return JSON.parse(string);
  else
    return null;
};

const initialState = { auth: getAuth(), page: null, message: {} };
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// serviceWorker.register();
