
import { Helmet } from "react-helmet-async";
import {  useLoaderData, useParams } from "react-router-dom";
import 'animate.css';

const CardDetails = () => {

    const {id}=useParams()

    const fullData = useLoaderData()

    const singleData = fullData.find(item=>item.id==id);
    

    

    const {image,description,estate_title,segment_name,price,status,area,location,facilities}=singleData;


   
    return (
        <div className="mt-10">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row items-center gap-10">
            
                   <div className="w1/2 animate__animated animate__backInLeft">
                   <img className="rounded-xl" src={image} alt="" />
                   </div>
            

                <div className="space-y-2 w-1/2 text-center lg:text-left animate__animated animate__backInRight">
                    <div>
                        <h1 className="text-3xl font-bold">{estate_title}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Segment: </span>{segment_name}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Location: </span>{location}</h1>
                    </div>
                    <hr />

                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Status: </span>{status}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1 className="text-xl font-semibold"><span className="text-blue-600">Price: </span>{price}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Area: </span>{area}</h1>

                    </div>
                    <hr />
                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Facilities: </span>{facilities[0]},{facilities[1]},{facilities[3]}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1 className="text-lg font-semibold"><span className="text-blue-600">Description: </span>{description}</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CardDetails;