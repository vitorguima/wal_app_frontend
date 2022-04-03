import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PostsFeed from './pages/PostsFeed';
import Register from './pages/Register';
import UserPosts from './pages/UserPosts';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" component={ Home } />
      <Route exact path="/feed" component={ PostsFeed } />
      <Route exact path="/posts/:id" component={ UserPosts } />
      <Route exact path="register" component={ Register } />
      <Route componente={ NotFound } />
    </Switch>
  );
}

export default Routes;
