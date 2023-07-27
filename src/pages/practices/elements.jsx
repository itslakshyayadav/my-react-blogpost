import { useState } from "react";

function Elements() {
  const [age, setAge] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [gender, setGender] = useState(false);

  function onInputChange(event) {
    const value = event.target.value;
    setAge(value);
  }

  function fetchMyAgeDescription() {
    let returnHtml = "";
    if (age > 0) {
      if (age <= 10) {
        returnHtml = <p>I am a kid</p>;
      } else if (age > 10 && age <= 30) {
        returnHtml = <p>I am a adult person</p>;
      } else if (age > 30 && age <= 50) {
        returnHtml = <p>I am a middle aged person</p>;
      } else {
        returnHtml = <p>I am an old person</p>;
      }
    }
    return returnHtml;
  }

  return (
    <div className="flex flex-col">
      <div className="flex py-2 ">
        <label htmlFor="age">
          Age :{" "}
          <input
            className="text-center rounded-xl p-2"
            type="text"
            value={age}
            onInput={onInputChange}
            placeholder="Enter your age"
          />
        </label>
        {fetchMyAgeDescription()}
      </div>
      <div className="flex  ">
        <label htmlFor="age">
          Show disclaimer :{" "}
          <input
            type="checkbox"
            value={showDisclaimer}
            onInput={(event) => {
              setShowDisclaimer(event.target.checked);
            }}
          />
        </label>
      </div>

      {showDisclaimer ? (
        <p>Disclaimer: some demo disclaimer to be written here</p>
      ) : (
        ""
      )}

      {/* {showDisclaimer && (
          <p>Disclaimer: some demo disclaimer to be written here</p>
        )} */}

      <div className="flex  gap-1 py-2">
        <label htmlFor="age">Select gender : </label>
        <select
          type="checkbox"
          value={gender}
          onInput={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value="">Please select a value</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Other</option>
        </select>

        {gender === "male" && <p>I am male.</p>}
        {gender === "female" && <p>I am female.</p>}
        {gender === "others" && <p>I am Others.</p>}
      </div>
    </div>
  );
}

export default Elements;
