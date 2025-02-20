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
    <div className="relative flex justify-center items-center h-screen bg-black">
      {/* White Overlay Layer with Custom Size */}
      <div
        className="pt-10 absolute flex flex-col justify-center items-center top-1/4 right-[-150px] w-[650px] h-[600px] bg-black bg-opacity-80 z-20 rounded-md"
        style={{
          transform: "translate(-50%, -50%)", // Center the overlay
        }}
      >
        {/* We Are Text */}
        <div
          className=" text-5xl tracking-widest drop-shadow-lg z-30 mt-20"
          style={{ color: "#ff4d00" }}
        >
          We Are
        </div>

        {/* HELIOS Text with Custom "O" Color */}
        <div className="text-white text-[75px] font-bold tracking-widest drop-shadow-lg z-30 mt-8 mb-5">
          H E L I <span style={{ color: "#ff4d00" }}>O</span> S
        </div>

        <div
          className="text-5xl tracking-widest drop-shadow-lg z-30"
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
        className="absolute left-5 z-30 bg-black bg-opacity-60 p-4 rounded-md text-white text-3xl hover:bg-opacity-60 transition flex items-center justify-center w-20 h-80 opacity-0 hover:opacity-100"
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
              className="absolute top-1/3 left-10 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-4xl font-bold">LATEST LAPTOPS</h1>
              <p className="text-lg">
                Powerful Performance. Portable Perfection.
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
              className="absolute top-1/3 left-10 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-4xl font-bold">GAMING LAPTOPS</h1>
              <p className="text-lg">THE RIGHT GEAR FOR THE GAME</p>
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
              className="absolute top-1/3 left-10 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-4xl font-bold">ACCESSORIES</h1>
              <p className="text-lg">WIDE RANGE OF COMPUTER ACCESSORIES</p>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Right Arrow */}
      <button
        className="absolute right-5 z-30 bg-black bg-opacity-60 p-4 rounded-md text-white text-3xl hover:bg-opacity-60 transition flex items-center justify-center w-20 h-80 opacity-0 hover:opacity-100"
        onClick={() => swiper && swiper.slideNext()}
      >
        <FaChevronRight />
      </button>

      {/* Image at the Bottom */}
<div className="absolute bottom-0 left-1/2  -translate-x-1/2 z-50 transition-all  hover:bg-black hover:bg-opacity-60 flex justify-center items-center w-40 h-20 hover:w-screen">
  <img
    src={Arror}
    alt="Bottom Image"
    className="w-20 h-10 transition-all scale-90 hover:scale-100"
  />
</div>



    </div>
  );
}

export default Home;
