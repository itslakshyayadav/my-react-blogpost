import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    console.log("incre called");
    const newValue = counter + 1;
    setCounter(newValue);
  }
  function resetScreen() {
    setCounter("");
  }
  return (
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
  );
}
