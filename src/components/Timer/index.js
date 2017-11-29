import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  
  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    console.log('Process took: ', this.state.time);
  }

  render() {
    return (
      <div>Timer: {this.state.time} sec</div>
    );
  }
}

export default Timer;
