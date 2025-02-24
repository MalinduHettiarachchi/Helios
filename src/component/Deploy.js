import React, { useState, useRef, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";
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

  const socialMedia = [
    "Facebook",
    "Twitter",
    "Google+",
    "LinkedIn",
    "Instagram",
  ];

  

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
      
      <footer className="bg-[#1a1a1a] text-white py-10">
            <div className="container mx-auto px-4">
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                {/* Logo Section */}
                <div className="flex flex-col space-y-4">
                  <h1 className="text-2xl font-bold text-white">HELIOS</h1>
                  <p className="text-gray-400">
                    Home and Office: Brace Spasojevic 27, Trstenik, Serbia
                  </p>
                </div>
      
                {/* For Work Inquiry Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    For Work Inquiry
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-gray-400">
                      <FaPhoneAlt className="text-white" />{" "}
                      <span>+94 76 941 7154</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <FaPhoneAlt className="text-white" />{" "}
                      <span>+94 77 008 5670</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <FaEnvelope className="text-white" />{" "}
                      <span>career@helios.lk</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <FaEnvelope className="text-white" />{" "}
                      <span>info@helios.lk</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <FaSkype className="text-white" /> <span>helios-skype</span>
                    </li>
                  </ul>
                </div>
      
                {/* Company Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-semibold text-white">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/fueltrix"
                        className="text-gray-400 hover:text-orange-500"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/buy" className="text-gray-400 hover:text-orange-500">
                        Buy Now
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ourteam"
                        className="text-gray-400 hover:text-orange-500"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-gray-400 hover:text-orange-500"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-gray-400 hover:text-orange-500"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
      
                {/* Services Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-semibold text-white">Services</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">
                      Fast Delivery
                    </li>
                    <li className="text-gray-400">
                      24 Hours Customer Services
                    </li>
                    <li className="text-gray-400">
                      Maintaining 
                    </li>
                  </ul>
                </div>
      
                {/* Industries Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-lg font-semibold text-white">Category</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">Web</li>
                    <li className="text-gray-400">Moblie</li>
                    <li className="text-gray-400">Cloud</li>
                    <li className="text-gray-400">Network</li>
                  </ul>
                </div>
              </div>
      
              {/* Bottom Section */}
              <div className="border-t border-white pt-6 text-center">
                <p className="text-gray-400">
                  © 2025 Helios. All rights reserved.| Designed and Developed by
                  HELIOS IT (Pvt) Ltd
                </p>
              </div>
      
              
      
              <div className="flex flex-wrap justify-center gap-4 md:gap-2 py-10">
                {socialMedia.map((platform, index) => (
                  <div
                    key={index}
                    className="text-white relative text-xs md:text-sm uppercase tracking-wider group flex flex-col items-center"
                  >
                    {/* Top Line - Moves Down More on Hover with Reduced Opacity and Color Change */}
                    <span
                      className="w-12 md:w-20 border-t border-white mb-1 md:mb-2 transition-all duration-300 ease-in-out 
                    group-hover:w-16 md:group-hover:w-24 group-hover:rotate-45 group-hover:translate-y-2 md:group-hover:translate-y-4 
                    group-hover:border-gray-400 group-hover:opacity-50"
                    ></span>  
      
                    {/* Text */}
                    <span className="relative z-10">{platform}</span>
      
                    {/* Bottom Line - Moves Up More on Hover with Reduced Opacity and Color Change */}
                    <span
                      className="w-12 md:w-20 border-t border-white mt-1 md:mt-2 transition-all duration-300 ease-in-out 
                    group-hover:w-16 md:group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-2 md:group-hover:-translate-y-4 
                    group-hover:border-gray-400 group-hover:opacity-50"
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </footer>

      <div class="fixed lg:bottom-16 bottom-4 right-4 w-[50px] h-[50px] flex justify-center items-center z-50">
        <a
          href="https://wa.me/94763630369"
          class="bg-green-500 text-white p-3 h-[50px] w-[50px] rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex justify-center items-center"
          target="_blank"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Deploy;
