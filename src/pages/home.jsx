import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const darkModeBtn = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div>
      <div>
        <div
          className="flex  p-2  items-center justify-between	"
          style={myStyle}
        >
          <div className="flex gap-3">
            <Link className="border py-3 px-5" to="/blog">
              Blog
            </Link>
            <Link className="border py-3 px-5" to="/my-profile">
              My profile
            </Link>
            <Link className="border py-3 px-5" to="/portfolio">
              Portfolio
            </Link>
            <Link className="border  py-3 px-5" to="/example">
              Text Analyzer
            </Link>
            <Link className="border  py-3 px-5" to="/practices">
              Practices
            </Link>
          </div>
          <div>
            <button
              style={myStyle}
              type="button"
              className=" my-5 border  	py-3 px-5 "
              onClick={darkModeBtn}
            >
              {btnText}
            </button>
          </div>
        </div>
        <div className="bg-green-100 p-2 text-center" role="alert">
          This is a <b>success</b> alert - check it out!
        </div>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Home;
