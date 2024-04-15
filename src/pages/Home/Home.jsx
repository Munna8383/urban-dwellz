import { Helmet } from "react-helmet-async";
import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div>
                <Slider></Slider>
            </div>

            <div className="mt-10">
                <Cards></Cards>
            </div>

            
        </div>
    );
};

export default Home;