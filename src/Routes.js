import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" component="" />
      <Route exact path="/feed" component="" />
      <Route exact path="/posts/:id" component="" />
      <Route exact path="register" component="" />
    </Switch>
  );
}

export default Routes;
