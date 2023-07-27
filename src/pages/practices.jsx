import { Link, Outlet } from "react-router-dom";

export default function Practice() {
  return (
    <div className="border bg-red-50 p-8">
      <div className="flex my-4 gap-2">
        <Link className="border-2 py-3 px-5" to="/practices/change-color">
          Color change
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/counter">
          Counter
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/typewriter">
          Typewriter
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/numberwriter">
          Numberwriter
        </Link>
        <Link className="border-2 py-3 px-5" to="/practices/elements">
          Elements
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
