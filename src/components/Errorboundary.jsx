import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </div>
      );
    }

    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function Errorboundary() {
  return (
    <main className="w-4/5 mx-auto mt-20  ">
      <div className="text-center bg-white py-5 px-5">
        <h1 className="text-3xl text-[#002147] font-extrabold">
          Test for Error Boundary
        </h1>
        <p className="text-[#002147] mt-2 text-xl">
          {" "}
          Click on the numbers to increase the counters.
        </p>
        <p className="mt-2  text-[#002147] text-lg">
          {" "}
          The counter is programmed to throw when it reaches 5. <br />
          This simulates a JavaScript error in a component.{" "}
        </p>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <Link
          className="flex bg-[#7FD77B] items-center  text-white py-2 w-1/4 text-yellow font-bold mt-10 rounded-2xl  justify-center mx-auto"
          to="/"
        >
          {" "}
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>
    </main>
  );
}
export default Errorboundary;
