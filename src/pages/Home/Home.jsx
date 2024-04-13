import Cards from "../../components/Cards/Cards";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>

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