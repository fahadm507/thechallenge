import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App.js';
import './App.css';
import reducers from './store/reducers';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>
  </BrowserRouter>,
   document.querySelector('#root')
);