import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import HomePage from './screen/homePage';
import LoginPage from './screen//login'
import RegisterPage from './screen/register'
import { createHashHistory } from 'history';
import EditorPage from './screen/editor'
import View from './screen/view'
import DashBoard from './screen/dashboard'
import SuccessfulPage from './screen/successfulPage'
import SubmitSuccessful from './screen/submitSuccessful'
import Manage from './screen/manage'
import Test from './component/manage/analysisSingle'

const hashHistory = createHashHistory();



ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/test" component={Test}/>
      <Route path="/editor" component={EditorPage}/>
      <Route path="/s/:qId" component={View}/>
      <Route path="/home" component={DashBoard}/>
      <Route path="/success/:qId" component={SuccessfulPage}/>
      <Route path="/submitsucceed" component={SubmitSuccessful}/>
      <Route path="/content/:qId" component={Manage}/>
    </Router>
  ),
  document.getElementById('root')
);


