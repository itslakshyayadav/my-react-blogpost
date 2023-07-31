import { useState } from "react";

export default function Numberwriter() {
  const defaultValue = "15/12/2002.";
  const [numberWriter, setNumberWriter] = useState(defaultValue);
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  function printNumber(letter) {
    const newValue = numberWriter + letter;
    setNumberWriter(newValue);
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

  function clearScreen() {
    setNumberWriter("");
  }

  function resetScreen() {
    setNumberWriter(defaultValue);
  }

  return (
    <div className="flex flex-col border-2 p-5" style={myStyle}>
      <div id="result" className="py-1">
        Typed Number : {numberWriter}
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
      <div className="flex justify-between 	">
        <div className="flex gap-2">
          <button
            style={myStyle}
            type="button"
            className="border bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
            onClick={function () {
              clearScreen();
            }}
          >
            Clear
          </button>
          <button
            style={myStyle}
            type="button"
            className="border bg-blue-100 my-5 rounded-md px-5 py-3 max-w-xl"
            onClick={function () {
              resetScreen();
            }}
          >
            Reset
          </button>
        </div>
        <div className="flex">
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
