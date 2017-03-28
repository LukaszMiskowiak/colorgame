var React = require('react');
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');
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

module.exports = Main;
