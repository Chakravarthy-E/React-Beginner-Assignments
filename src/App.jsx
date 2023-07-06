import React from "react";
import DisplayArrayOfUsers from "./Assignments/DisplayArrayOfUsers";
import ToggleAnElement from "./Assignments/ToggleAnElement";
import TwoWayBinding from "./Assignments/TwoWayBinding";
import DisableButton from "./Assignments/DisableButton";
import UpdateParentState from "./Assignments/UpdateParentState"
import SumofTwoNum from "./Assignments/SumofTwoNum";
import SimpleCounter from "./Assignments/SimpleCounter";
const App = () => {
  return (
    <div>
      <p>Fetching Data from Array</p>
      <DisplayArrayOfUsers />
      <hr />
      <p>Toggle the Element</p>
      <ToggleAnElement />
      <hr />
      <p>Two way binding</p>
      <TwoWayBinding />
      <hr />
      <p>Disable Button</p>
      <DisableButton />
      <hr />
      <p>Update Parent value</p>
      <UpdateParentState />
      <hr />
      <p>Add Two numbers</p>
      <SumofTwoNum />
      <hr />
      <p>Simple Counter</p>
      <SimpleCounter />
      <hr />
    </div>
  );
};

export default App;
