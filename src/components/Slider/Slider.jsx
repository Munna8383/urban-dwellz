import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
const Slider = () => {
    return (
        <div className="mt-10">
         
              <Swiper 
               navigation={true} modules={[Navigation,Autoplay,Pagination]}
               pagination={{clickable:true}}
               loop={true}
               autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              className="mySwiper">
              <SwiperSlide><img className="w-3/4 h-[480px] mx-auto rounded-xl" src="https://i.ibb.co/JjwN1Mf/door-opening-revealing-beautiful-city.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img className="w-3/4 h-[480px] mx-auto rounded-xl" src="https://i.ibb.co/F8ryZSh/set-designer-work-indoors.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img className="w-3/4 h-[480px] mx-auto rounded-xl" src="https://i.ibb.co/8x3SsTL/2150761206.jpg" alt="" /></SwiperSlide>
        
              </Swiper>


            
        </div>
    );
};

export default Slider;