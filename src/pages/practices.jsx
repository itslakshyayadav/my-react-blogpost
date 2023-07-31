import { Link, Outlet } from "react-router-dom";

export default function Practice() {
  return (
    <div className="border bg-red-50 p-8">
      <div className="flex my-4 gap-2">
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
      </div>

      <Outlet></Outlet>
    </div>
  );
}
