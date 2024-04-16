import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import CardDetails from "../pages/Home/CardDetails/CardDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Agents from "../pages/Agents/Agents";


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
          element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
          loader:()=>fetch("../data.json")
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/userProfile",
          element:<UserProfile></UserProfile>
        },
        {
          path:"/updateProfile",
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:"/agents",
          element:<PrivateRoute><Agents></Agents></PrivateRoute>,
          loader: ()=> fetch("../agent.json")
        }
      ]
    },
  ]);


  export default router;