import React from "react";
import Time from "./Time";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };
  }
  handleClick = () => {
    this.setState({ showClock: !this.state.showClock });
  };
  render() {
    return (
      <>
        <div className="container">
          {this.state.showClock ? (
            <Time handleClick={this.handleClick} />
          ) : (
            <button onClick={this.handleClick}>Show Component</button>
          )}
        </div>
      </>
    );
  }
}

export default Clock;
