var React = require('react'),
    PropTypes = React.PropTypes;

const Game = props => (
  <div className='container'>
    <h1>Color Game</h1>
    <div className="color game">
      <h2 style={{color: props.colorClass}}>{props.colorName}</h2>
      <ul >
        {
          props.colors.map((color, index) => (
            <li key={index}>
              <a onClick={props.onCheck}
                 value={props.colors[(7-index)]}
                 title={color}
                 className={props.colors[(7-index)]}>
                 {color}
              </a>
            </li>)
          )
        }
      </ul>
    </div>
    <h1> {props.points}</h1>
    <h1> {props.time}</h1>
  </div>
);

Game.propTypes = {
  colorClass: PropTypes.string.isRequired,
  colorName: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired
}

module.exports = Game;
