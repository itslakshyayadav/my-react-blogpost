import { useState } from "react";

export default function Typewriter() {
  const defaultValue = "Laskhya";

  const [typewriter, setTypewriter] = useState(defaultValue);
  function printLetter(letter) {
    const newValue = typewriter + letter;
    setTypewriter(newValue);
  }
  function clearScreen() {
    setTypewriter("");
  }
  function resetScreen() {
    setTypewriter(defaultValue);
  }

  return (
    <div className="flex flex-col bg-red-100 p-5">
      <div id="result" className="py-1">
        Typed Text: {typewriter}
      </div>
      <div className="flex gap-2 ">
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("Q");
          }}
        >
          Q
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("W");
          }}
        >
          W
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("E");
          }}
        >
          E
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("R");
          }}
        >
          R
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("T");
          }}
        >
          T
        </button>
        <button
          type="button"
          className="border border-emerald-800 px-5 py-3"
          onClick={function () {
            printLetter("Y");
          }}
        >
          Y
        </button>
      </div>
      <button
        type="button"
        className="border-2 bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
        onClick={function () {
          clearScreen();
        }}
      >
        Clear
      </button>
      <button
        type="button"
        className="border-2 bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
        onClick={function () {
          resetScreen();
        }}
      >
        Reset
      </button>
    </div>
  );
}
