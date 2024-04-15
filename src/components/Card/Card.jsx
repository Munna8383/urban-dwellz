/* eslint-disable react/prop-types */

import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GiFootyField } from "react-icons/gi";
import { Link } from "react-router-dom";
const Card = ({card}) => {
    const{id,image,estate_title,price,location,area}=card
    return (
        <div>

<div className="card card-compact bg-base-100 shadow-xl">
  <figure data-aos="zoom-in" ><img src={image} alt="Shoes" /></figure>
  <div className="card-body space-y-4">
    <h2 className="card-title text-2xl font-bold">{estate_title}</h2>

    <div  data-aos="fade-up" data-aos-delay="50" className="flex gap-2 items-center font-bold">
        <div>
        <FaLocationDot />
        </div>
        <div>
            <h1>Location:{location}</h1>
        </div>
    </div>
    <div  data-aos="fade-up" data-aos-delay="100" className="flex gap-2 items-center font-bold">
        <div>
        <GiFootyField />
        </div>
        <div>
            <h1>Area:{area}</h1>
        </div>
    </div>
    
    <div  data-aos="fade-up" data-aos-delay="150" className="flex gap-2 items-center font-bold">
        <div>
        <AiFillDollarCircle />
        </div>
        <div>
            <h1>Price:{price}</h1>
        </div>
    </div>
    <div  data-aos="fade-up" data-aos-delay="200" className="card-actions justify-left">
     <Link  to={`/${id}`}> <button className="btn bg-[#66b3ff]">View Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;