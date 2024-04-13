import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <h1 className="btn btn-ghost text-blue-600 text-2xl font-bold">Urban Dwellz</h1>
  </div>
  
  <div className="navbar-end space-x-3">

    <div>
    <NavLink className={({isActive})=>isActive?"text-blue-600 border  border-blue-600 px-3 py-2 rounded-xl":" "} to={"/"}>Home</NavLink>
     <NavLink  className={({isActive})=>isActive?"text-blue-600 border border-blue-600 py-2 px-3 rounded-xl":" "} to={"/about"}>About</NavLink>

    
   

    </div>




  <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
  </div>
  <Link to={"/login"}><button className="btn">Login</button></Link>
</div>
        </div>
    );
};

export default Navbar;