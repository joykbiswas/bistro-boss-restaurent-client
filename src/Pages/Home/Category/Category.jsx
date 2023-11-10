import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section>
      <div className="mx-auto md:w-4/12 my-8 text-center">
        <p className="text-yellow-600 ">--- From 11:00am to 10:00pm ---</p>
        <h3 className="text-4xl uppercase border-y-4 py-4 ">ORDER ONLINE</h3>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-16"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="text-4xl uppercase text-center -mt-16 text-white">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="text-4xl uppercase text-center -mt-16 text-white">
              pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="text-4xl uppercase text-center -mt-16 text-white">
              soup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="text-4xl uppercase text-center -mt-16 text-white">
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="text-4xl uppercase text-center -mt-16 text-white">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
