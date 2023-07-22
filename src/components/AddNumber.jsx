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
      <div className="flex flex-col">
        <div>
          <label htmlFor="num1" className="MR-1">
            Num 1 :
          </label>
          <input type="text" id="num1" value={num1} onInput={onNum1Change} />
        </div>

        <div>
          <label htmlFor="num2" className="MR-1">
            Num 2 :
          </label>
          <input type="text" id="num2" value={num2} onInput={onNum2Change} />
        </div>

        <div>
          <p id="result">Result: {result}</p>
        </div>
        <button
          type="button"
          className="p-2 bg-blue border-none text-white width-15rem"
          onClick={add}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddNumber;
