import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {

    const {googleLogin,githubLogin,login}= useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

     
    const handleLogin =e =>{

        e.preventDefault()

        const email = e.target.email.value 
        const password = e.target.password.value 
        

        login(email,password)
        .then(() => {

            toast.success('Logged In Successfully')
            // Signed in 
            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
            // ...
          })
          .catch(()=>{
            toast.error("Incorrect username or password")
          })

          e.target.reset()

    }

    const SignINGoogle = ()=>{

        googleLogin()
        .then(()=>{

            toast.success('Logged In Successfully')

            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
           
        })
        .catch(()=>{
           
        })

    }

    const SignINGithub =()=>{
        githubLogin()
        .then(()=>{

            toast.success('Logged In Successfully')
            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
        })
        .catch(()=>{
            toast.error("login unsuccessful")
        })
    }




    return (
        <div>
            <Toaster />
            <div className="text-center">
                <h1 className="text-5xl text-blue-600 font-bold">Login now!</h1>
                <p className="py-6">Login to explore interesting features and get access to hidden pages</p>
            </div>

            <div className="md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#66b3ff]">Login</button>
                    </div>
                </form>

                <div className="divider divider-info">or</div>

                <div className="flex justify-center gap-10 mb-5">

                    <button onClick={SignINGoogle}><span className="text-blue-600 text-4xl"><FaGoogle /></span></button>
                    <button onClick={SignINGithub}><span className="text-blue-600 text-4xl"><FaGithub /></span></button>

                </div>
            </div>

            <div className="text-center">
                <h1>Do not have any account! <Link className="text-blue-600 font-bold" to={"/register"}>Register Now</Link></h1>
            </div>
        </div>
    );
};

export default Login;