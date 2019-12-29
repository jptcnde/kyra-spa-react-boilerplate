import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../modules/Home';
import About from '../../modules/About';
import routes from './constants';

function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/"  />
      <Route component={Home} path={routes.home}  />
      <Route component={About} path={routes.booking} />
    </Switch>
  );
}

export default Routes;
