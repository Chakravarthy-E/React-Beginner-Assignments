import React, { useState } from "react";

const ToggleAnElement = () => {
  const [para, setPara] = useState(false);

  return (
    <div>
      <div id="main">
        <button id="Click" onClick={() => setPara(!para)}>
          {para ? "hide" : "show"}
        </button>
        <p>
          {para && (
            <span>
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ToggleAnElement;
