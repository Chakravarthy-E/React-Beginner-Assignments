import React from "react";
import { useState } from "react";
const SumofTwoNum = () => {
  const [value1, setvalue1] = useState();
  const [value2, setvalue2] = useState();
  const [total, settotal] = useState(0);
  function Add() {
    settotal(value1 + value2);
  }
  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => setvalue1(+e.target.value)}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setvalue2(+e.target.value)}
      />
      <button onClick={Add}>ADD</button>
      <p>Total : {total || ""}</p>
    </div>
  );
};

export default SumofTwoNum;
