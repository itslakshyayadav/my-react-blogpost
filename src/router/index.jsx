import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blogs";
import MyProfile from "../pages/my-profile";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import TextAnalyzer from "../components/TextAnalyzer";
import Practices from "../pages/practices";
import ColorChange from "../pages/practices/color-change";
import Counter from "../pages/practices/counter";
import Typewriter from "../pages/practices/typewriter";
import Numberwriter from "../pages/practices/numberwriter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/example",
        element: (
          <TextAnalyzer
            name="Lakshya yadav"
            heading="Enter the text to analyze below"
          />
        ),
      },
      {
        path: "/practices",
        element: <Practices />,
        children: [
          {
            path: "/practices/change-color",
            element: <ColorChange />,
          },
          {
            path: "/practices/counter",
            element: <Counter />,
          },
          {
            path: "/practices/typewriter",
            element: <Typewriter />,
          },
          {
            path: "/practices/numberwriter",
            element: <Numberwriter />,
          },
        ],
      },
    ],
  },
]);

export default router;
