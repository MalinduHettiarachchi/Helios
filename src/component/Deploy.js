import React, { useState, useRef, useEffect } from "react";
import Aboutus from "./Aboutus";
import BackImage from "./backimage";
import Theteam from "./Theteam";
import Backimg2 from "./Backimg2";
import Services from "./Services";
import Backimg3 from "./Backimg3";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Side1 from "../assets/side6.jpg";
import Side2 from "../assets/web3.jpg";
import Side3 from "../assets/side7.jpg";
import Side4 from "../assets/backimg2.jpg";
import SocialLinks from "../component/SocialLinks";
import Arror from "../assets/down.png";

function Deploy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div ref={homeRef}>
        <div className="relative flex justify-center items-center h-screen bg-black overflow-x-hidden">
          {/* White Overlay Layer with Custom Size */}
          <div className="pt-10 absolute flex flex-col justify-center items-center top-1/4 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[650px] h-auto bg-black bg-opacity-80 z-20 rounded-md md:left-1/2 md:w-[500px] lg:w-[650px]">
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

          <button
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 transition-all hover:bg-black hover:bg-opacity-60 flex justify-center items-center w-40 h-20 hover:w-screen md:w-32 md:h-16 lg:w-40 lg:h-20"
            onClick={() => scrollToSection(aboutRef)} // Scroll to About Us
          >
            <img
              src={Arror}
              alt="Bottom Image"
              className="w-20 h-10 transition-all scale-90 hover:scale-100 md:w-16 md:h-8 lg:w-20 lg:h-10"
            />
          </button>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <nav className="bg-black text-white flex justify-between items-center px-4 md:px-10 py-4 relative ">
          {/* Logo */}
          <div className="text-white text-3xl font-light tracking-wide">
            H E L I <span className="text-red-600"> O </span>S
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100 flex flex-col md:flex-row justify-center items-center md:justify-start md:space-x-6 uppercase text-lg font-light absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 px-4 md:px-0 py-4 md:py-0 z-50`}
          >
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(teamRef)}
            >
              The Team
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(worksRef)}
            >
              Works
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(blogRef)}
            >
              Blog
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>

      {/* Sections with References */}
      <div ref={aboutRef} className="scroll-mt-16">
        <Aboutus />
      </div>
      <BackImage />
      <div ref={teamRef} className="scroll-mt-16">
        <Theteam />
      </div>
      <Backimg2 />
      <div ref={servicesRef} className="scroll-mt-16">
        <Services />
      </div>
      <Backimg3 />
      <div ref={worksRef} className="scroll-mt-16">
        <Works />
      </div>
      <div ref={blogRef} className="scroll-mt-16">
        <Blog />
      </div>
      <div ref={contactRef} className="scroll-mt-16">
        <Contact />
      </div>
    </div>
  );
}

export default Deploy;
