import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((count) => count + 1);
  };
  const handleDecrementCount = () => {
    setCount((count) => count - 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };
  const mystyle = {
    color: "4F4F4F",
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
