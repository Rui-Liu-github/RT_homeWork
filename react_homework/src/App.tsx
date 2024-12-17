import { useState } from "react";
import TodoListApp from "./day12_interactivity/TodoListApp/index";
import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox";
import Select from "./day12_interactivity/ControlledComponents/Select";
import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup";
import FetchPostByIdApp from "./day13_lifecycles/solutions/FetchPostByIdApp";
import CounterTimer from "./day13_lifecycles/solutions/CounterTimer";

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

      {/* Day 13 homework: FetchPostByIdApp & counter timer*/}
      <div>
        <FetchPostByIdApp />
      </div>
      <div>
        <CounterTimer />
      </div>
    </>
  );
}

export default App;
