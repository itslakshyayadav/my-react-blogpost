import { useState } from "react";

export default function numberwriter() {
  const defaultValue = "15/12/2002.";

  const [numberwriter, setNumberWriter] = useState(defaultValue);
  function printNumber(letter) {
    const newValue = numberwriter + letter;
    setNumberWriter(newValue);
  }
  function clearScreen() {
    setNumberWriter("");
  }
  function resetScreen() {
    setNumberWriter(defaultValue);
  }

  return (
    <div className="flex flex-col">
      <div id="result" className="py-1">
        Typed Number : {numberwriter}
      </div>
      <div className="flex gap-2 ">
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("1");
          }}
        >
          1
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("2");
          }}
        >
          2
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("3");
          }}
        >
          3
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("4");
          }}
        >
          4
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("5");
          }}
        >
          5
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printNumber("6");
          }}
        >
          6
        </button>
      </div>
      <button
        type="button"
        className="border bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
        onClick={function () {
          clearScreen();
        }}
      >
        Clear
      </button>
      <button
        type="button"
        className="border bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
        onClick={function () {
          resetScreen();
        }}
      >
        Reset
      </button>
    </div>
  );
}
