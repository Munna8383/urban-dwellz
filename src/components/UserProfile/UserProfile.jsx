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
      
        <div className="flex justify-center mt-5">
          <Helmet>
            <title>User Profile || Urban Dwellz</title>
          </Helmet>
        

<div className="card w-96 bg-base-500 shadow-xl">
<div className="text-center">
                <h1 className="text-4xl text-blue-600 font-bold animate__animated animate__rotateIn">User Profile</h1>
            </div>
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