import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl text-blue-600 font-bold">Login now!</h1>
                <p className="py-6">Login to explore interesting features and get access to hidden pages</p>
            </div>

            <div className="md:w-3/4 lg:w-1/2 mx-auto">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#66b3ff]">Login</button>
                    </div>
                </form>
            </div>

            <div className="text-center">
                <h1>Do not have any account! <Link className="text-blue-600 font-bold" to={"/register"}>Register Now</Link></h1>
            </div>
        </div>
    );
};

export default Login;