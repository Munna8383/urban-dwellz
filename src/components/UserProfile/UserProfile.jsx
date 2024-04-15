import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import {  useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {

  const navigate = useNavigate()

    const {user}=useContext(AuthContext)

    if(!user){
      navigate("/login")
    }

    return (
      
        <div className="flex justify-center">
          <Helmet>
            <title>User Profile</title>
          </Helmet>


<div className="card w-96 bg-base-500 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name:{user?.displayName}</h2>
    <p>Email:{user?.email}</p>
   
  </div>
</div>

            
        </div>
    );
};

export default UserProfile;