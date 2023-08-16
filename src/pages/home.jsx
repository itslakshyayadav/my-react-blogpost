import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const darkModeBtn = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div>
      <div className="flex  p-2  items-center justify-between" style={myStyle}>
        <div className="flex gap-3">
          <Link to="/blog" className="border py-3 px-5">
            Blog
          </Link>
          <Link to="/my-profile" className="border py-3 px-5">
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

        <button
          style={myStyle}
          type="button"
          className="my-5 border px-5 py-3"
          onClick={darkModeBtn}
        >
          {btnText}
        </button>
      </div>
      {/* <div className="bg-green-100 p-2 text-center" role="alert">
        This is a <b>success</b> alert - check it out!
      </div> */}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
