import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
   
    const navigate = useNavigate()

   

    const {updatePhotoAndName,user}= useContext(AuthContext)
    if(!user){
        navigate("/login")
      }
    const [textName,setTextName]= useState(user?.displayName)
    const [updatePhoto,setUpdatePhoto]= useState(user?.photoURL)

    const handleUpdate = (e)=>{

       

        e.preventDefault()

        const name = e.target.name.value 
        const photo = e.target.photo.value 

        updatePhotoAndName(name,photo)
        .then(()=>{
            toast.success('Updated Successfully')
            setTimeout(()=>{
                navigate("/userProfile")
            },2000)
        })
        .catch(()=>{
            toast.error("Update Unsuccessful")
        })


    }
    return (

      
        <div className="mt-5 md:w-3/4 lg:w-1/2 mx-auto">
            <Toaster />
            <Helmet>

                <title>Update Profile || Urban Dwellz</title>
            
            </Helmet>

            <div className="text-center">
                <h1 className="text-5xl text-blue-600 font-bold animate__animated animate__rotateIn">Update Profile</h1>
            </div>

            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" onChange={e=>setTextName(e.target.value)} name="name" value={textName} placeholder="Enter Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Photo URL</span>
                    </label>
                    <input type="text" onChange={e=>setUpdatePhoto(e.target.value)} name="photo" value={updatePhoto} placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                        <button className="btn bg-[#66b3ff]">Update</button>
                    </div>

            </form>
            
        </div>
    );
};

export default UpdateProfile;