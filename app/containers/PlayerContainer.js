var React = require('react'),
    Player = require('../components/Player');

const PlayerContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      playername: ''
    }
  },
  handleUpdatePlayer: function (e) {
    this.setState({
      playername: e.target.value
    })
  },
  handleSubmitPlayer: function (e) {
    e.preventDefault();
    var playername = this.state.playername;
    this.setState({
      playername: ''
    });
    if (this.state.playername !== undefined && this.state.playername !== '') {
      window.player = this.state.playername;
      this.context.router.push({
        pathname: '/game',
        query: {
          start: this.props.routeParams.start
        }
      })
    }
  },
  render: function () {
    return (
      <Player
        onSubmitPlayer={this.handleSubmitPlayer}
        onUpdatePlayer={this.handleUpdatePlayer}
        playername={this.state.playername} />
    )
  }
});

module.exports = PlayerContainer;
