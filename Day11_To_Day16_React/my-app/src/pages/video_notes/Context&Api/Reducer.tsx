import React, { useReducer } from "react";

interface ActionType {
  type: "increment" | "decrement";
}

interface CountState {
  count: number;
}

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

//work for more complex state
function reducer(state: CountState, action: ActionType) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function increment() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <button onClick={decrement}> - </button>
      <p>{state.count}</p>
      <button onClick={increment}> + </button>
    </div>
  );
}
