import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import HomePage from './screen/homePage';
import LoginPage from './screen//login'
import RegisterPage from './screen/register'
import { createHashHistory } from 'history';
import test from './component/generate/test'

const hashHistory = createHashHistory();



ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/test" component={test}/>
    </Router>
  ),
  document.getElementById('root')
);


