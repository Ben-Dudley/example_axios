import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <ReactRouter>
    <Route
      component={App}
      exact
      path='/'
    />
  </ReactRouter>,
  document.getElementById('root')
);