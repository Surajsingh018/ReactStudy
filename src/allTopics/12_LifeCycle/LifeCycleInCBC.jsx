import { Component } from "react";
import React from "react";

export default class LifeCycleInCBC extends React.Component {
  constructor(){
    super();
    console.log("I am Constructor");

    this.state = { count: 0 };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  componentDidMount() {
    console.log("I am ComponentDidMount");
   this.intervalid =  setInterval(() => {
      console.log("API CALLED");
    }, 2000);
  }
  componentDidUpdate(){
    console.log(" Component Update");
  }
  componentWillUnmount(){
    console.log("Component is going to Unmount");
    clearInterval(this.intervalid);
  }
  render() {
    console.log("I am Render");
    return (
      <div>
        <h1>count is {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
