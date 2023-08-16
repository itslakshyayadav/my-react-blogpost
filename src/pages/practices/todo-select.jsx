import { useState } from "react";

function TodoSelect() {
  const [todo, setTodo] = useState({
    title: "",
    userId: "",
    // Gender: { male: "male", female: "female" },
  });

  const todoChangeValue = (event, fieldName) => {
    const updateTodo = { ...todo, [fieldName]: event.target.value };
    setTodo(updateTodo);
  };

  const Submit = (event) => {
    event.preventDefault();

    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <form onSubmit={Submit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            value={todo.title}
            onInput={(event) => {
              todoChangeValue(event, "title");
            }}
            name="title"
            placeholder="Enter a Title"
            className="px-2  text-black"
          />

          <label htmlFor="userid">UserId :</label>
          <input
            onInput={(event) => {
              todoChangeValue(event, "userId");
            }}
            value={todo.userId}
            type="text"
            name="userid"
            placeholder="Enter userId"
            className="px-2  text-black"
          />

          {/* <label htmlFor="age">Select gender : </label>
          <select
            type="checkbox"
            className="text-black"
            value={todo.completed}
            onInput={(event) => {
              todoChangeValue(event.target.value);
            }}
          >
            <option value="">Please select a value</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Other</option>
          </select> */}
        </div>
        <button
          className="px-5 py-3 my-5 bg-slate-200 text-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default TodoSelect;
