import { useState } from "react";

export default function Typewriter() {
  const defaultValue = "Laskhya";
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

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

  const darkModeBtn = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="flex flex-col bg-white p-5" style={myStyle}>
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
      <div className="flex justify-between ">
        <div className="flex gap-2 ">
          <button
            style={myStyle}
            type="button"
            className="border-2 bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
            onClick={function () {
              clearScreen();
            }}
          >
            Clear
          </button>
          <button
            style={myStyle}
            type="button"
            className="border-2 bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
            onClick={function () {
              resetScreen();
            }}
          >
            Reset
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" border bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl "
            style={myStyle}
            onClick={darkModeBtn}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
