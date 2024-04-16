/* eslint-disable react/prop-types */


const SingleAgent = ({agent}) => {
   const {agent_name1,agent_image,agent_email,agent1,contactNumber}= agent
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={agent_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{agent_name1}</h2>
          <p>{agent1}</p>
        <h1>{agent_email}</h1>
        <h1>{contactNumber}</h1>
        </div>
      </div>
    );
};

export default SingleAgent;