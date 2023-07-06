import React from "react";
import { useState } from "react";

const DisableButton = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button disabled={value.length < 1}>submit</button>{" "}
      {/*if the value less than 1 it will be disabled */}
    </div>
  );
};

export default DisableButton;
