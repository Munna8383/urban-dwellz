/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <div className="flex justify-center mt-10"><span className="loading loading-spinner text-info"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate to={"/login"} state={location?.pathname || "/"}></Navigate>
};

export default PrivateRoute;