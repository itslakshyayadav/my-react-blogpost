import { useState } from "react";
function AddUser() {
  const [userModel, setUserModel] = useState({
    firstName: "",
    lastName: "",
    age: null,
  });

  const onValueChange = (event, fieldName) => {
    console.log("event.target.value", event.target.value);
    console.log("fieldName", fieldName);
    const updateModel = {
      ...userModel,
      [fieldName]: event.target.value,
    };
    setUserModel(updateModel);
  };

  const onFormSubmit = (event) => {
    console.log("on form submit called");
    event.preventDefault();

    console.log("userModel", userModel);
    console.log("before fetch called");

    fetch("https://dummyjson.com/users/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userModel),
    })
      .then((response) => {
        console.log(`response then 1`);
        return response.json();
      })
      .then((response) => {
        console.log(`response then  2`);
        console.log(response);
      });

    console.log("after fetch called");
  };

  return (
    <>
      <h1>Add User</h1>

      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-3 p-6 text-gray-950"
      >
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            required
            value={userModel.firstName}
            onInput={(event) => {
              onValueChange(event, "firstName");
            }}
            placeholder="Enter first name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            required
            value={userModel.lastName}
            onInput={(event) => {
              onValueChange(event, "lastName");
            }}
            placeholder="Enter last name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Age*</label>
          <input type="text" name="age" required placeholder="Enter age" />
        </div>

        <button className="px-5 py-3 my-5 bg-slate-200" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
