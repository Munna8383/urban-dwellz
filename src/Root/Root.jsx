import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>

            <div className="w-11/12 mx-auto">
               <div>
               <Navbar></Navbar>
               </div>

               <div>
                <Outlet></Outlet>
               </div>


            </div>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;