var React = require('react'),
    PropTypes = React.PropTypes;

const Player = (props) => (
  <div className='start container'>
    <h1>Introduce Yourself</h1>
    <div>
      <form onSubmit={props.onSubmitPlayer}>
        <input
          className=''
          placeholder='Hi, nice to meet you'
          onChange={props.onUpdatePlayer}
          value={props.playername}
          type='text' />
        <button
          type='submit'>
              Continue
        </button>
      </form>
    </div>
  </div>
)

Player.propTypes = {
  onUpdatePlayer: PropTypes.func.isRequired,
  onSubmitPlayer: PropTypes.func.isRequired,
  playername: PropTypes.string.isRequired
}

module.exports = Player;
