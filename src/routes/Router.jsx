import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import CardDetails from "../pages/Home/CardDetails/CardDetails";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/:id",
          element:<CardDetails></CardDetails>,
          loader:()=>fetch("../data.json")
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);


  export default router;