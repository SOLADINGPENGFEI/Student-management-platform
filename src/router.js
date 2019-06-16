import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import LoginPage from './views/Login/index';
import Main from './views/Section/Main/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/main"  component={Main} />
        <Route path="/login"  component={LoginPage} />
        <Redirect from='/' to='/login'/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
