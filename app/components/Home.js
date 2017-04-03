import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter, {Link} from 'react-router'
import About from './About'

const Home = () => (
  <div className="container">
    <h1>Color-Game</h1>
      <Link to={'/start'}><button type='button'>Get Started</button></Link>
      <About />
  </div>
);

export default Home;
