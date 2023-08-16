import { useState, useEffect } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [intervalID, setIntervalID] = useState(0);

  function incrementCounter() {
    let newValue = counter + 1;
    setCounter(newValue);
  }

  function resetScreen() {
    setCounter(0);
  }

  const startStopwatch = () => {
    const intId = setInterval(() => {
      console.log("stopwatch called");
      // console.log(counter);
      setCounter2((prevValue) => prevValue + 1);
    }, 1000);

    setIntervalID(() => intId);
  };

  const resetStopwatch = () => {
    console.log("resetStopwatch called");
    console.log(intervalID);
    clearInterval(intervalID);
    setCounter2(0);
  };

  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("useEffect unmount called");
      clearInterval(intervalID);
    };
  }, [intervalID]);

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="py-2">
          <span>Click counter: {counter}</span>
        </div>

        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3    px-6"
          onClick={incrementCounter}
        >
          Click
        </button>
        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3 px-6"
          onClick={function () {
            resetScreen();
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="py-2">
          <span>Stopwatch: {counter2}</span>
        </div>

        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3    px-6"
          onClick={startStopwatch}
        >
          Start
        </button>
        <button
          type="button"
          className="border bg-blue-100 rounded-md text-black py-3 px-6"
          onClick={resetStopwatch}
        >
          Reset
        </button>
      </div>
    </>
  );
}
