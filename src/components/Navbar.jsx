import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
    return (
      <div className="flex justify-center flex-wrap  lg:justify-between mt-7">
        <div className=" hidden md:block">
          <h1 className="btn btn-ghost text-blue-600 text-3xl font-extraboldbold">Urban Dwellz</h1>
        </div>


        <div className="flex gap-5 items-center">
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 border  border-blue-600 px-3 py-2 rounded-xl" : " "} to={"/"}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 border border-blue-600 py-2 px-3 rounded-xl" : " "} to={"/about"}>About</NavLink>
         {user&&   <NavLink className={({ isActive }) => isActive ? "text-blue-600 border border-blue-600 py-2 px-3 rounded-xl" : " "} to={"/userProfile"}>User Profile</NavLink>}

         <div className="tooltip hidden md:block" data-tip={user?.displayName||"Null"}>
         <img className="rounded-2xl" width={45} alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
         </div>

         {
          user?  <button onClick={()=>logout()}  className="btn bg-[#66b3ff]">Logout</button>  : <Link to={"/login"}><button className="btn bg-[#66b3ff]">Login</button></Link>
         }
        </div>


  </div>
 
    );
};

export default Navbar;