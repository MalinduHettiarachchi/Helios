import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Side1 from "../assets/side1.jpg";
import Side2 from "../assets/side2.jpg";
import Side3 from "../assets/side3.jpg";

function Home() {
  return (
    <div className="relative flex justify-center items-center  shadow-2xl h-screen">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  ">
        <h1 className="text-[#FF4500] text-6xl  font-Poppins tracking-wide drop-shadow-lg">
          We  Are 
        </h1>
      </div>
      {/* "HELIOS" text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  ">
        <h1 className="text-white text-9xl font-bold font-Poppins tracking-wide drop-shadow-lg">
          H  E  L  I  O  S
        </h1>
      </div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  ">
        <h1 className="text-[#FF4500] text-6xl  font-Poppins tracking-wide drop-shadow-lg">
          IT Company
        </h1>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full z-0">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1500}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className=" overflow-hidden shadow-2xl"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={Side1}
                alt="Slide 1"
                className="w-full h-screen object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={Side2}
                alt="Slide 2"
                className="w-full h-screen object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={Side3}
                alt="Slide 3"
                className="w-full h-screen object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
