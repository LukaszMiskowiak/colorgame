import React, { Component } from 'react'
import {ReactRouter, IndexRoute, hashHistory, browserHistory, Link, Route, Router} from 'react-router'

import Player from '../components/Player'
import Main from '../components/Main'
import Home from '../components/Home'
import PlayerContainer from '../containers/PlayerContainer'
import GameContainer from '../containers/GameContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/start' component={PlayerContainer} />
      <Route path='/game' component={GameContainer} />
    </Route>
  </Router>
);

export default routes;
