import React, { Component, Fragment } from "react";
import CounterContainer from "./CounterContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <CounterContainer />
      </Fragment>
    );
  }
}

export default App;
