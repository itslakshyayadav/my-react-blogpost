import { useState } from "react";

function ColorChange() {
  const [boxColor, setBoxColor] = useState("");
  function changeColor(color) {
    setBoxColor(`bg-${color}-600`);
  }
  function clearBox() {
    setBoxColor("");
  }

  return (
    <div className="flex bg-gray-200 flex-col gap-4 items-center p-2">
      <div
        id="resultBox"
        className={`flex justify-center items-center border h-48 w-48 ${boxColor}`}
      >
        Result box
      </div>
      <div className="flex flex-wrap gap-3 ">
        <button
          type="button"
          className="bg-emerald-600 h-48 w-48 text-white flex justify-center items-center"
          onClick={function () {
            changeColor("emerald");
          }}
        >
          Green box
        </button>
        <button
          type="button"
          className="bg-blue-600 h-48 w-48 text-white flex justify-center items-center"
          onClick={function () {
            changeColor("blue");
          }}
        >
          Blue box
        </button>
        <button
          type="button"
          className="bg-pink-600 h-48 w-48 text-white flex justify-center items-center"
          onClick={function () {
            changeColor("pink");
          }}
        >
          Pink box
        </button>
        <button
          type="button"
          className=" border-2 border-black w-20 h-20  "
          onClick={function () {
            clearBox("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ColorChange;
