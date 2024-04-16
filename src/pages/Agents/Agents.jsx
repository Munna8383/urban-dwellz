import { useLoaderData } from "react-router-dom";
import SingleAgent from "./SingleAgent";
import { Helmet } from "react-helmet-async";


const Agents = () => {

    const agentsData = useLoaderData()

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <Helmet>
                <title>Agent || Urban Dwellz</title>
            </Helmet>

           {
            agentsData.map((agent,index)=><SingleAgent key={index} agent={agent}></SingleAgent>)
           }
            
        </div>
    );
};

export default Agents;