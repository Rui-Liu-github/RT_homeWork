import React, { useEffect, useState } from "react";

// The UI should have a count, a start, pause and reset button
/**
 * Initially
Count should be 0
Start button should be enabled
Pause button should be disabled

After clicking start
Count should go up by 1 every second
Start button should be disabled
Pause button should be enabled
Then you can pause or reset
 * ** */

function CounterTimer() {
  let [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  function handleStartClick() {
    setDisabled(!disabled);
  }

  function handlePause() {
    setDisabled(!disabled);
  }

  function handleReset() {
    setCount(0);
    setDisabled(false);
  }

  useEffect(() => {
    let timer: number | null = null;

    if (disabled) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (!disabled && timer) {
      clearInterval(timer);
    }

    //useEffect需要有个return 函数 进行清理，当state 发生改变时，组件会重新渲染，这是需要清理之前的操作，必须计时器
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [disabled]);

  return (
    <div>
      <h1>{count}</h1>
      <div className="buttons">
        <button
          className="Start"
          disabled={disabled}
          onClick={handleStartClick}
        >
          Start
        </button>
        <button className="Pause" disabled={!disabled} onClick={handlePause}>
          Pause
        </button>
        <button className="Reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterTimer;
