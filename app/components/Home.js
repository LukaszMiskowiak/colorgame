var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    About = require('./About');

const Home = () => (
  <div className="container">
    <h1>Color-Game</h1>
      <Link to={'/start'}><button type='button'>Get Started</button></Link>
      <About />
  </div>
);

module.exports = Home;
