const React = require('react');

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    let timesUp = this.state.secondsLeft === 0
    return (
      <div>
        {timesUp ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

Bomb.defaultProps = {
  initialCount: 10
};

Bomb.propTypes = {
  initialCount: React.PropTypes.number,
};

module.exports = Bomb;