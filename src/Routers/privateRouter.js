import Home from "../Pages/Home";
import Login from '../Pages/Login/index';
import About from "../Pages/About";

const privateRouter = [
  {
    index: true,
    path: "",
    element: Home,
  },
  {
    index: true,
    path: "home",
    element: Home,
    children: [
      {
        path: "1",
        element: About,
      }
    ]
  },
];

export default privateRouter;
