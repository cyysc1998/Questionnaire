import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import HomePage from './homePage';
import LoginPanel from './login'
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();



ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={HomePage}/>
      <Route path="/login" component={LoginPanel}/>
    </Router>
  ),
  document.getElementById('root')
);


