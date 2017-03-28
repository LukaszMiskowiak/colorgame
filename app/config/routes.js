var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute,

    Player = require('../components/Player'),
    Main = require('../components/Main'),
    Home = require('../components/Home'),
    PlayerContainer = require('../containers/PlayerContainer'),
    GameContainer = require('../containers/GameContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/start' component={PlayerContainer} />
      <Route path='/game' component={GameContainer} />
    </Route>
  </Router>
);

module.exports = routes;
