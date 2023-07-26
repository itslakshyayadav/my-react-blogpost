import { useState } from "react";

function Home(props) {
  const [analyzerModel, setAnalyzerModel] = useState("");

  function onTextAreaInput(event) {
    console.log(`event`);
    console.log(event.target.value);
    const value = event.target.value;
    setAnalyzerModel(value);
  }

  function changeUpperCase() {
    console.log(analyzerModel);
    const uppValue = analyzerModel.toUpperCase();
    setAnalyzerModel(uppValue);
  }
  function changeLowerCase() {
    const lowValue = analyzerModel.toLowerCase();
    setAnalyzerModel(lowValue);
  }

  return (
    <div className="p-8">
      <h1 className="text-center text-5xl p-8 container">{props.heading}</h1>
      <div className="flex justify-center border-2	 border-orange-400 p-8 rounded-xl">
        <textarea
          className="border-2 border-red-400 p-5"
          id="analyzerArea"
          cols="60"
          rows="5"
          value={analyzerModel}
          onInput={onTextAreaInput}
        ></textarea>
      </div>
      <div className="flex gap-5 justify-center">
        <button
          id=""
          type="button"
          className=" my-5 rounded-xl	bg-sky-400	p-4 text-white"
          onClick={changeUpperCase}
        >
          Change Uppercase
        </button>
        <button
          id=""
          type="button"
          className=" my-5 rounded-xl	bg-sky-400	p-4 text-white"
          onClick={changeLowerCase}
        >
          Change Lowercase
        </button>
      </div>
    </div>
  );
}
export default Home;
