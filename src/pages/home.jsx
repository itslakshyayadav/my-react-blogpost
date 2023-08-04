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
        <div>
          <div className="flex w-96 justify-end items-center	 h-24 px-2 gap-3">
            <button type="button" className="bg-red-900 w-8 h-8 "></button>
            <button type="button" className="bg-blue-900 w-8 h-8 "></button>
            <button type="button" className="bg-green-900 w-8 h-8 "></button>
            <button type="button" className="bg-cyan-900 w-8 h-8 "></button>
            <button type="button" className="bg-yellow-900 w-8 h-8 "></button>

            <button
              style={myStyle}
              type="button"
              className="my-5 border	px-1 py-1"
              onClick={darkModeBtn}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-2 text-center" role="alert">
        This is a <b>success</b> alert - check it out!
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
