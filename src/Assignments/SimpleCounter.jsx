import React from "react";
import { useState } from "react";

const SimpleCounter = () => {
  const [value, setvalue] = useState(0);
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setvalue(value+1)}>Increment</button>
      <button onClick={() => setvalue(value-1)}>Decrement</button>
      <button onClick={() => setvalue(0)}>Reset</button>
    </div>
  );
};

export default SimpleCounter;
