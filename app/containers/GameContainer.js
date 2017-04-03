import React from 'react'
import Game from '../components/Game'
    require('../styles/colors.css');
    require('../styles/game.css');

const colors = ['black', 'white', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
//shuflle function
const shuffle = (a) => {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

//object with props to display
const gameObj = () => {
  return  {
    colors: colors,
    colorname: colors[(Math.floor(Math.random() * 7 ) + 0)],
    colorclass: colors[(Math.floor(Math.random() * 7 ) + 0)],
  }
};

//main color-text
var colorname = gameObj().colorname;

const refreshGame = () => {
  shuffle(colors);
  gameObj();
  colorname = gameObj().colorname;
};

const GameContainer = React.createClass({
  points: 0,
  handleClick: function(e, index) {
    e.preventDefault();
    this.setState({
      color: e.target.getAttribute('value')
    });
    if ( colorname == e.target.getAttribute('value')) {
      this.points++;
      refreshGame();
    } else {
      refreshGame();
      this.points--;
    }
  },
  render: function () {
    return (
      <Game
        test='jestem testem'
        colorName={colorname}
        colorClass={gameObj().colorclass}
        colors={gameObj().colors}
        onCheck={this.handleClick}
        points={this.points}/>
    )
  }
});

export default GameContainer;
