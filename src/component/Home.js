import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Side1 from "../assets/side1.jpg";
import Side2 from "../assets/side2.jpg";
import Side3 from "../assets/side3.jpg";
import SocialLinks from "../component/SocialLinks";
import Arror from "../assets/down.png";
function Home() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-x-hidden">
      {/* White Overlay Layer with Custom Size */}
      <div
        className="pt-10 absolute flex flex-col justify-center items-center top-1/4 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[650px] h-auto bg-black bg-opacity-80 z-20 rounded-md md:left-1/2 md:w-[500px] lg:w-[650px]"
      >
        {/* We Are Text */}
        <div
          className="text-4xl tracking-widest drop-shadow-lg z-30 mt-10 md:text-5xl lg:text-5xl"
          style={{ color: "#ff4d00" }}
        >
          We Are
        </div>

        {/* HELIOS Text with Custom "O" Color */}
        <div className="text-white text-[50px] font-bold tracking-widest drop-shadow-lg z-30 mt-8 mb-5 md:text-[60px] lg:text-[75px]">
          H E L I <span style={{ color: "#ff4d00" }}>O</span> S
        </div>

        <div
          className="text-4xl tracking-widest drop-shadow-lg z-30 md:text-5xl lg:text-5xl"
          style={{ color: "#ff4d00" }}
        >
          IT Solution
        </div>
        <div className="pt-10">
          <SocialLinks />
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-0 z-30 bg-black bg-opacity-60 p-4 text-white text-3xl hover:bg-opacity-60 transition flex items-center justify-center w-16 h-screen opacity-0 hover:opacity-100 md:w-16 md:h-screen lg:w-16 lg:h-screen"
        onClick={() => swiper && swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="w-full"
        onSwiper={setSwiper} // Set swiper instance
      >
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <motion.img
              src={Side1}
              alt="Slide 1"
              className="w-full h-screen object-cover"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <motion.div
              className="absolute top-1/3 left-10 text-white md:left-5 lg:left-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-3xl font-bold md:text-4xl lg:text-4xl">INNOVATIVE IT SOLUTIONS</h1>
              <p className="text-base md:text-lg lg:text-lg">
              Empowering Businesses with Next-Gen Technology.
              </p>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden">
            <motion.img
              src={Side2}
              alt="Slide 2"
              className="w-full h-screen object-cover"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <motion.div
              className="absolute top-1/3 left-10 text-white md:left-5 lg:left-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-3xl font-bold md:text-4xl lg:text-4xl">CUSTOM DEVELOPMENT</h1>
              <p className="text-base md:text-lg lg:text-lg"> Scalable & Secure Digital Solutions Tailored for You.</p>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative overflow-hidden">
            <motion.img
              src={Side3}
              alt="Slide 3"
              className="w-full h-screen object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <motion.div
              className="absolute top-1/3 left-10 text-white md:left-5 lg:left-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-3xl font-bold md:text-4xl lg:text-4xl">CLOUD & CYBERSECURITY</h1>
              <p className="text-base md:text-lg lg:text-lg"> Protecting Your Digital Assets with Advanced Security.</p>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Right Arrow */}
      <button
        className="absolute right-0 z-30 bg-black bg-opacity-60 p-4 text-white text-3xl hover:bg-opacity-60 transition flex items-center justify-center w-16 h-screen opacity-0 hover:opacity-100 md:w-16 md:h-screen lg:w-16 lg:h-screen"
        onClick={() => swiper && swiper.slideNext()}
      >
        <FaChevronRight />
      </button>

      {/* Image at the Bottom */}
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 transition-all hover:bg-black hover:bg-opacity-60 flex justify-center items-center w-40 h-20 hover:w-screen md:w-32 md:h-16 lg:w-40 lg:h-20">
        <img
          src={Arror}
          alt="Bottom Image"
          className="w-20 h-10 transition-all scale-90 hover:scale-100 md:w-16 md:h-8 lg:w-20 lg:h-10"
        />
      </button>
    </div>
  );
  
}

export default Home;