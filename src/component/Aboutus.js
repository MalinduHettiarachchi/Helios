import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHtml5,
  FaTrophy,
  FaCoffee,
  FaGlobe,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

function Aboutus() {
  return (
    <div className="w-full overflow-x-hidden bg-[#1a1a1a]">
      {/* Title Section */}
      <div className="bg-[#232323] text-white py-10 md:py-20 px-5 md:px-10 lg:px-20 text-left">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#ff4d00] italic">WHO</span>
          <span className="italic font-light"> WE ARE?</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 tracking-wide"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          WE ARE A GROUP OF EXPERIENCED{" "}
          <span className="relative inline-block">
            DESIGNERS
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
          AND{" "}
          <span className="relative inline-block">
            DEVELOPERS
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="bg-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 md:mx-10 lg:mx-20 py-10">
          {/* Card 1 */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              WHAT WE DO?
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#1a1a1a] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaLaptopCode className="text-[#ff4d00] text-3xl md:text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              HOW DO WE DO IT?
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#1a1a1a] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaHtml5 className="text-[#ff4d00] text-3xl md:text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              WHAT WE ACHIEVE?
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#1a1a1a] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaTrophy className="text-[#ff4d00] text-3xl md:text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              AT THE END?
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#1a1a1a] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaCoffee className="text-[#ff4d00] text-3xl md:text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="text-center bg-[#232323] py-10 px-5 md:px-10 lg:px-20">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff4d00] uppercase"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          HOW ABOUT SOME FUN FACTS
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 text-sm md:text-base max-w-3xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Consectetur est quis mauris accumsan eleifend sit amet non neq. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur
          est quis mauris accumsan eleifend sit amet non neq. Vivamus vitae
          purus eros, nec ullamcorper risus.
        </motion.p>

        {/* Fun Facts Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-white">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white scale-100 hover:scale-110">45</span>
              <FaTrophy className="text-[#ff4d00] text-3xl md:text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-xs md:text-sm mt-1">
              Web Awards
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white scale-100 hover:scale-110">24</span>
              <FaGlobe className="text-[#ff4d00] text-3xl md:text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-xs md:text-sm mt-1">
              Locations
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white scale-100 hover:scale-110">97</span>
              <FaHeart className="text-[#ff4d00] text-3xl md:text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-xs md:text-sm mt-1">
              Happy Clients
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white scale-100 hover:scale-110">86</span>
              <FaRocket className="text-[#ff4d00] text-3xl md:text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-xs md:text-sm mt-1">
              Projects
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;