import React from "react";
import { useState } from "react";

function Child({ setvalue }) {
  return (
    <div>
      <button onClick={() => setvalue("Parent value updated")}>click me</button>
    </div>
  );
}

const Parent = () => {
  const [value, setvalue] = useState("Not Updated");
  return (
    <div>
      <div>{value}</div>
      <Child setvalue={setvalue} />
    </div>
  );
};

export default Parent;
