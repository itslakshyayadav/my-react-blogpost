import { useState } from "react";

function AddNumber() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    console.log("vishal");
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  }

  function onNum1Change(event) {
    const num1Value = event.target.value;
    setNum1(num1Value);
  }

  function onNum2Change(event) {
    const num2Value = event.target.value;
    setNum2(num2Value);
  }

  return (
    <>
      <div className="flex flex-col shadow-md p-8 gap-4 rounded-md max-w-4xl mx-auto">
        <div className="flex flex-col gap-1">
          <label htmlFor="num1" className="MR-1">
            Num 1 :
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            id="num1"
            value={num1}
            onInput={onNum1Change}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="num2" className="MR-1">
            Num 2 :
          </label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            id="num2"
            value={num2}
            onInput={onNum2Change}
          />
        </div>

        <div>
          <p id="result">Result: {result}</p>
        </div>

        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={add}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddNumber;
