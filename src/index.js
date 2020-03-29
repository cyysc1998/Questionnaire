import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import HomePage from './homePage';
import LoginPage from './login'
import RegisterPage from './register'
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();



ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
    </Router>
  ),
  document.getElementById('root')
);


