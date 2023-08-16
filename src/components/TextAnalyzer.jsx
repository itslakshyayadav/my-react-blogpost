import { useState } from "react";

function Home(props) {
  const [analyzerModel, setAnalyzerModel] = useState("");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtn] = useState("Enable Dark Mode");
  const darkModeBtn = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        // border: "2px solid black",
      });
      setBtn("Enable Dark Mode");
    }
  };

  function onTextAreaInput(event) {
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

  function clearScreen() {
    setAnalyzerModel("");
  }

  const copyText = () => {
    let text = document.getElementById("analyzerArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };

  const removerExtraSpaces = () => {
    let newtext = analyzerModel.split(/[ ]+/);
    setAnalyzerModel(newtext.join(" "));
  };

  return (
    <div className="p-8 conatiner" style={myStyle}>
      <h1 className="text-center text-5xl p-8 container">{props.heading}</h1>
      <div className="flex justify-center border-2 border-orange-900 p-8 rounded-xl">
        <textarea
          className="border-2 border-red-700 p-5"
          style={myStyle}
          id="analyzerArea"
          cols="100"
          rows="4"
          value={analyzerModel}
          onInput={onTextAreaInput}
        ></textarea>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-3 py-4">
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-4 text-white"
            onClick={changeUpperCase}
          >
            Change Uppercase
          </button>
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-4 text-white"
            onClick={changeLowerCase}
          >
            Change Lowercase
          </button>
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-4 text-white btn-success"
            onClick={copyText}
          >
            Copy-text
          </button>
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-4 text-white btn-success"
            onClick={removerExtraSpaces}
          >
            Remove-ExtraSpaces
          </button>
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-4 text-white btn-success"
            onClick={clearScreen}
          >
            Clear
          </button>
        </div>
        <div className="py-4">
          <button
            style={myStyle}
            type="button"
            className=" my-5 border-2  rounded-xl	bg-sky-400	p-4 text-white btn-success"
            onClick={darkModeBtn}
          >
            {btnText}
          </button>
        </div>
      </div>
      <div className="rounded-sm">
        <h1 className=" text-lg py-5 ">
          <b>Your Text Summary :</b>
          <p className="inline">
            {
              analyzerModel.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {analyzerModel.length}
            characters.
          </p>
          <p>
            <b>Read Time :</b>{" "}
            {0.008 *
              analyzerModel.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
          <h1>
            <b>Preview:</b>
            <p>
              {analyzerModel.length > 0
                ? analyzerModel
                : "Enter something text here to preview you content"}
            </p>
          </h1>
        </h1>
      </div>
    </div>
  );
}
export default Home;
