// import React from "react";

// class Time extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//     this.clock = null;
//   }

//   componentDidMount() {
//     this.clock = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.clock);
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <h1>The Time is:-{this.state.date.toLocaleTimeString()}</h1>

//           <button onClick={this.props.handleClick}>Hide Time Component</button>
//         </div>
//         ;
//       </>
//     );
//   }
// }

// export default Time;
