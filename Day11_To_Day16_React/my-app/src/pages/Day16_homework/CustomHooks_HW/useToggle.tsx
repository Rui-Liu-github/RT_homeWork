import React, { useCallback, useState } from "react";

//example1: const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
//every time to call the toggle, will move the value to the next item in the array

//example2: const [value, toggle] = useToggle();
// -> value === false
//toggle(); // -> value === true
//If you do not provide an array with options, then use-toggle will use boolean values with false as default:

function UseToggle() {
  // use hook here
  const [valueOne, toggleOne] = useToggle<string>([
    "orange",
    "pink",
    "green",
    "purple",
  ]);
  //const [valueTwo, toggleTwo] = useToggle<boolean>();

  return (
    <div style={{ margin: "50px" }}>
      {/* 这样写是错的 */}
      {/* <button onClick={toggleOne} color={valueOne}>{valueOne}</button> */}
      {/*Type assertion specify generic explicitly： {backgroundColor : valueOne as string} */}
      <button
        onClick={() => toggleOne()}
        style={{
          backgroundColor: valueOne as string,
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {valueOne}
      </button>
    </div>
  );
}

//create hook
//use generic
function useToggle<T>(paramsIsArray?: T[]): [T | boolean, () => void] {
  const [state, setState] = useState<T | boolean>(
    paramsIsArray && paramsIsArray.length > 0 ? paramsIsArray[0] : false
  );
  const [, setIndex] = useState(0);

  const toggle = useCallback(() => {
    if (paramsIsArray && paramsIsArray.length > 0) {
      setIndex((preIndex) => {
        const nextIndex = (preIndex + 1) % paramsIsArray.length;
        //Ensures that the index wraps around to 0
        // ex: lastIndex = 3, (3+ 1) % 4 = 0
        setState(paramsIsArray[nextIndex]);
        return nextIndex;
      });
    } else {
      setState((prev) => !prev);
    }
  }, [paramsIsArray]);

  return [state, toggle];
}
// create useToggle hook : switch status
//(status is a array, and can be switched to many status)
export default UseToggle;
