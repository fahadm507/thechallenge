import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App.js';
import './App.css';
import reducers from './store/reducers';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App/>
    </Provider>
  </Router>,
   document.querySelector('#root')
);