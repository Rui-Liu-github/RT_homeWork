import React, { useEffect, useRef, useState } from "react";

// delay the execution of the callback until a certain time
function UseDebounce() {
  const [task, setTask] = useState<string>("");
  const [useDebounceTask, setUseDebounceTask] = useState("");

  useDebounce(
    () => {
      setUseDebounceTask(task);
    },
    2000,
    [task]
  );

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <p>{task}</p>
      <p>{useDebounceTask}</p>
    </div>
  );
}

//create useDebounce hook
function useDebounce<T>(
  callbackFn: () => void,
  delay: number,
  dependencyArray: T[]
): void {
  // let timer:null | number = null;
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      callbackFn();
    }, delay);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
    //eslint-disable-next-line
  }, [callbackFn, delay, ...dependencyArray]);
}

export default UseDebounce;
