import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="">
        <div className="flex gap-3 p-3 bg-gray-950">
          <Link className="border text-white py-3 px-5" to="/blog">
            Blog
          </Link>
          <Link className="border text-white py-3 px-5" to="/my-profile">
            My profile
          </Link>
          <Link className="border text-white py-3 px-5" to="/portfolio">
            Portfolio
          </Link>
          <Link className="border text-white py-3 px-5" to="/example">
            Text Analyzer
          </Link>
          <Link className="border text-white py-3 px-5" to="/practices">
            Practices
          </Link>
        </div>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Home;
