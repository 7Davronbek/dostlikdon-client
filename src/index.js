import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './components/main.scss'


import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
