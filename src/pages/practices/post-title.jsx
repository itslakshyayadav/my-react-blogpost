import { useState } from "react";

function PostTitle() {
  const [post, setPost] = useState({
    title: "",
    userId: 5,
  });

  const postValue = (event, fieldName) => {
    const updatePost = {
      ...post,
      [fieldName]: event.target.value,
    };
    setPost(updatePost);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="flex items-center gap-5">
          <label htmlFor="title">Title : </label>
          <textarea
            className="px-2 text-black"
            name="title"
            onInput={(event) => {
              postValue(event, "title");
            }}
            value={post.title}
            cols="30"
            rows="2"
          ></textarea>
          <label htmlFor="userid">userId*</label>

          <input
            className="px-2 p-1 text-black"
            type="text"
            name="age"
            value={post.userId}
            onInput={(event) => {
              postValue(event, "userId");
            }}
            placeholder="Enter UserId"
          />
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

export default PostTitle;
