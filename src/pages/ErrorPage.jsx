import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
			<Helmet>
				<title>Error Page</title>
			</Helmet>

<section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img width={200} src="https://i.ibb.co/FqwKNwq/imageedit-1-6600249944.png" alt="" />
		<p className="text-3xl">You entered in the wrong URL</p>
		<Link to={"/"}><button className="btn bg-[#66b3ff] text-white">Back To The Home Page</button></Link>
	</div>
</section>
            
        </div>
    );
};

export default ErrorPage;