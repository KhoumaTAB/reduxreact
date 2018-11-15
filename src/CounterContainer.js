import React, { Fragment } from "react";
import { connect } from "react-redux";

const mapStatetoProps = state => ({
  compteur: state
});

const mapDispatchToProps = dispatch => ({
  add1: () => dispatch({ type: "ADD" }),
  add10: () => dispatch({ type: "ADD10" }),
  remove1: () => dispatch({ type: "REMOVE" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
  compteur,
  add1,
  add10,
  remove1,
  remove10,
  reset
}) => (
  <Fragment>
    <p>{compteur}</p>
    <button onClick={add1}>+ 1</button>
    <button onClick={add10}>+ 10</button>
    <button onClick={remove1}>- 1</button>
    <button onClick={remove10}>- 10</button>
    <button onClick={reset}>Reset</button>
  </Fragment>
);

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CounterComponent);
