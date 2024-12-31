import React, { useState } from "react";

function UseForceUpdate() {
  let num = 0;

  const update = useForceUpdate();

  function getRandom(): number {
    num = Math.random();
    return num;
  }

  return (
    <div style={{ margin: "50px" }}>
      <div>{getRandom()}</div>
      <button onClick={update}>click me</button>
    </div>
  );
}

//create useForceUpdate hook
//useForceUpdate: returns a function when called
//will rerender the component !!
function useForceUpdate(): () => void {
  const [, setUpdate] = useState<number>(0);

  return () => setUpdate((prev) => prev + 1);
}
export default UseForceUpdate;
