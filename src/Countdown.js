import React from "react";

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sec: 0,
//       start: false,
//     };
//     this.timerId = null;
//   }

//   timer = () => {
//     this.timerId = setInterval(() => {
//       this.setState({ sec: this.state.sec + 1 });
//     }, 1000);
//   };

//   clickHandler = () => {
//     const isStart = this.state.start;
//     if (isStart) {
//       clearInterval(this.timerId);
//       this.setState({
//         start: false,
//       });
//     } else {
//       this.setState(
//         {
//           start: true,
//         },
//         () => {
//           this.timer();
//         }
//       );
//     }
//   };

//   render() {
//     const count = this.state.sec;
//     const second = count % 60;
//     const minute = Math.floor(count / 60);
//     const hour = Math.floor(count / 3600);
//     return (
//       <>
//         <div className="container">
//           <h2>
//             Hrs{hour}:Min{minute}:sec{second}
//           </h2>
//           <button onClick={this.clickHandler}>
//             {this.state.start ? "stop" : "Start"}
//           </button>
// {
//   this.state.sec > 0 && !this.state.start ? (
//     <button
//       onClick={() => {
//         this.setState({
//           sec: 0,
//         });
//         clearInterval(this.timerId);
//       }}
//     >
//       Reset
//     </button>
//   ) : null;
// }
//         </div>
//       </>
//     );
//   }
// }

// export default Timer;

class Countdown extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      console.log(`Time left is 🚀 ${newTime}`);
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: 0,
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="countdown">
        <span className="cross" onClick={() => this.props.close("countdown")}>
          X
        </span>
        <div className="countdown-header">Countdown</div>
        <div className="countdown-label">Hours : Minutes : Seconds</div>
        <div className="countdown-display">
          <button onClick={() => this.adjustTimer("incHours")}>⬆</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>⬆</button>
          <button onClick={() => this.adjustTimer("incSeconds")}>⬆</button>

          <div className="countdown-time">
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => this.adjustTimer("decHours")}>⬇</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>⬇</button>
          <button onClick={() => this.adjustTimer("decSeconds")}>⬇</button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          timerStart !== 0 &&
          timerStart !== timerTime &&
          timerTime !== 0 && (
            <button className="button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          timerStart !== timerTime &&
          timerStart > 0 && (
            <button className="button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Countdown;
