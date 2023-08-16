import { Link, Outlet } from "react-router-dom";

export default function Practice() {
  return (
    <div className="border bg-black text-white p-8">
      <div className="flex py-4 gap-2">
        <Link className="border-2 py-3 px-5" to="/practices/change-color">
          <b>Color change</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/counter">
          <b>Counter</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/typewriter">
          <b>Typewriter</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/numberwriter">
          <b>Numberwriter</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/elements">
          <b>Predict Age</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/add-user">
          <b>Add User</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/post-title">
          <b>Post Title</b>
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/todo-select">
          <b>Todo Select</b>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
