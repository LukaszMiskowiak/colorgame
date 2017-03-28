var React = require('react'),
    Game = require('../components/Game');
    require('../styles/colors.css');
    require('../styles/game.css');

var colors = ['black', 'white', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
    colors2 = colors
    seconds = 3;


const

    shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    },

    gameObj = () => {
      return  {
        colors: colors,
        colorname: colors[(Math.floor(Math.random() * 7 ) + 0)],
        colorclass: colors[(Math.floor(Math.random() * 7 ) + 0)],
      }
    };


var colorname = gameObj().colorname,

    refreshGame = () => {
      shuffle(colors);
      shuffle(colors2);
      gameObj();
      colorname = gameObj().colorname;
    };

const GameContainer = React.createClass({
  game: gameObj(),
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  points: 0,
  getInitialState: function () {
    return {
      time: 3
    }
  },
  timer: (time) => {
          for (i = time; i > 0; i--) {
            if(time > 0) {
              setTimeout (() => {GameContainer.setState({time: time--}); console.log(this.state.time);}, 1000);
            }
          }
        },
  getInitialState: function () {
    return {
      color: ''
    }
  },
  componentDidMount: function () {

  },
  handleClick: function(e, index) {
    e.preventDefault();
    this.setState({
      color: e.target.getAttribute('value')
    });
    if ( colorname == e.target.getAttribute('value')) {
      this.points++;
      refreshGame();
      this.state.time = 3;
      this.timer(this.state.time);
    } else {
      refreshGame();
      this.points--;
      this.time = 3;
      this.timer(this.time);
    }
  },
  render: function () {
    return (
      <Game
        test='jestem testem'
        time={this.state.time}
        colorName={colorname}
        colorClass={gameObj().colorclass}
        colors={gameObj().colors}
        onCheck={this.handleClick}
        points={this.points}/>
    )
  }
});

module.exports = GameContainer;
