import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
    require('../styles/main.css');
    require('../styles/animation.css');

const Main = (props) => (
  <div className='background'>
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}>
        {React.cloneElement(props.children, {key: props.location.pathname})}
    </ReactCSSTransitionGroup>
  </div>
);

export default Main;
