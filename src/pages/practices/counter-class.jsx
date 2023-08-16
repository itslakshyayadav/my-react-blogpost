import { Component } from "react";

class CounterClass extends Component {
  constructor() {
    console.log("constructor called");
    super();

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    console.log("incre called");
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  resetScreen = () => {
    this.setState({
      counter: 0,
    });
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("render called");

    const { counter } = this.state;
    return (
      <div className="flex flex-col gap-2 ">
        <div className="py-2">
          <span>Click class counter: {counter}</span>
        </div>

        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3    px-6"
          onClick={this.incrementCounter}
        >
          Click
        </button>
        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3 px-6"
          onClick={this.resetScreen}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default CounterClass;
