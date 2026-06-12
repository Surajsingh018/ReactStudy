import { Component } from "react";

class CounterCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  updateCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCounter = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>Counter Class Based ={this.state.count}</h1>
        <button onClick={this.updateCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <button onClick={this.resetCounter}>Reset</button>
      </>
    );
  }
}
export default CounterCBC;
