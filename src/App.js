import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      countdown: false,
    };
  }
  close = (key) => {
    this.setState({ [key]: false });
  };
  render() {
    return (
      <div className="app">
        <div className="app-title">Timers</div>
        <div className="timers">
          {this.state.stopwatch ? (
            <Stopwatch close={this.close} />
          ) : (
            <button onClick={() => this.setState({ stopwatch: true })}>
              Show Stopwatch
            </button>
          )}
          {this.state.countdown ? (
            <Countdown close={this.close} />
          ) : (
            <button onClick={() => this.setState({ countdown: true })}>
              Show countdown
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
