import { useState } from "react";
import TodoListApp from "./day12_interactivity/TodoListApp/index";
import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox";
import Select from "./day12_interactivity/ControlledComponents/Select";
import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup";
import "./App.css";

function App() {
  return (
    <>
      <TodoListApp />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>checkbox homework:</span>
        <Checkbox />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>Select & option homework:</span>
        <Select />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>radio group:</span>
        <RadioGroup />
      </div>
    </>
  );
}

export default App;
