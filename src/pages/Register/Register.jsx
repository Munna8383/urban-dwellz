import { Link } from "react-router-dom";


const Register = () => {



    const handleRegister = e =>{

        e.preventDefault()
        const name = e.target.name.value 
        const photo =e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

        console.log(name,email,photo,password)
    }
    return (

<div>
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