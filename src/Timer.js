import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      start: false,
    };
    this.timerId = null;
  }

  timer = () => {
    this.timerId = setInterval(() => {
      this.setState({ sec: this.state.sec + 1 });
    }, 1000);
  };

  clickHandler = () => {
    const isStart = this.state.start;
    if (isStart) {
      clearInterval(this.timerId);
      this.setState({
        start: false,
      });
    } else {
      this.setState(
        {
          start: true,
        },
        () => {
          this.timer();
        }
      );
    }
  };

  render() {
    const count = this.state.sec;
    const second = count % 60;
    const minute = Math.floor(count / 60);
    const hour = Math.floor(count / 3600);
    return (
      <>
        <div className="container">
          <h2>
            Hrs{hour}:Min{minute}:sec{second}
          </h2>
          <button onClick={this.clickHandler}>
            {this.state.start ? "stop" : "Start"}
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
