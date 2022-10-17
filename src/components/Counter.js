import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../services/actions/CounterAction.js";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleIncrementCount() {
    dispatch(incrementCounter());
  }
  const handleDecrementCount = () => {
    dispatch(decrementCounter());
  };
  const handleResetCount = () => {
    dispatch(resetCounter());
  };
  const mystyle = {
    color: "#FFFFFF",
    backgroundColor: "#e2136e",
    fontSize: "20px",
    padding: "10px",
    margin: "5px",
    fontFamily: "Arial",
    width: "200px",
    cursor: "pointer",
  };
  return (
    <div>
      <h2>Counter App</h2>

      <h2>Count = {count}</h2>
      <button style={mystyle} onClick={handleIncrementCount}>
        Increment
      </button>
      <button style={mystyle} onClick={handleDecrementCount}>
        Decrement
      </button>
      <button style={mystyle} onClick={handleResetCount}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
