import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const navigate = useNavigate()

    const{createUser,updatePhotoAndName,logout}= useContext(AuthContext)



    const handleRegister = e =>{

        const passwordRegex = /^(?=.*[A-Z]).+$/;
        const lowerpasswordRegex = /^(?=.*[a-z]).+$/;

       

        e.preventDefault()
        const name = e.target.name.value 
        const photo =e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 


        if (!passwordRegex.test(password)) {
            toast.error("password must have an uppercase letter")

            return
          }

        if(!lowerpasswordRegex.test(password)){
            toast.error("password must have an lowercase letter")

            return
        }

        if(password.length<6){
            toast.error("password length mus be 6 character")

            return
        }





      


        createUser(email,password)
        .then(()=>{
            updatePhotoAndName(name,photo)
            .then(()=>{
                toast.success('Registered Successfully')
                logout()

                setTimeout(()=>{
                       navigate("/")

                },2000)
            })
        })

        e.target.reset()
    }
    return (

<div>

<Toaster />

            <div className="text-center">
                <h1 className="text-5xl text-blue-600 font-bold">Register Here!</h1>
            </div>

            <div className="md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder=" Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder=" Enter Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#66b3ff]">Register</button>
                    </div>
                    <div className="text-center">
                        <h1>Already Registered! <Link className="font-bold text-blue-600" to={"/login"}>Login here</Link></h1>
                    </div>
                </form>
            </div>
        </div>
            
    
    );
};

export default Register;