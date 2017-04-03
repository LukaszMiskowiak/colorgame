import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

const Game = (props) => (
  <div className='container'>
    <h1>Color Game</h1>
    <div className="color game">
      <h2 style={{color: props.colorClass}}>{props.colorName}</h2>
      <ul >
        {
          props.colors.map((color, index) => (
            <li key={index}>
              <a onClick={props.onCheck}
                  // values from last el of array to first (colors are random so, values are random to)
                 value={props.colors[(7-index)]}
                 className={props.colors[(7-index)]}>
                 {color}
              </a>
            </li>)
          )
        }
      </ul>
    </div>
    <h1> {props.points}</h1>
  </div>
);

Game.propTypes = {
  colorClass: PropTypes.string.isRequired,
  colorName: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired
}

export default Game;
