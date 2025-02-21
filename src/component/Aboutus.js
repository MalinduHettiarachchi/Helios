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
    <div>
      <div className="bg-[#232323] text-white py-20 px-5 text-left">
        {/* Title Animation - Start farther left */}
        <motion.h2
          className="text-4xl md:text-5xl ml-20 font-bold"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[#ff4d00] italic">WHO</span>
          <span className="italic font-light"> WE ARE?</span>
        </motion.h2>

        {/* Subtitle Animation - Start farther right */}
        <motion.p
          className="mt-4 text-lg md:text-xl ml-20 text-gray-300 tracking-wide"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
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

      <div className="bg-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20 py-10 ">
          {/* Card 1 - Left to Right */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md s"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-3 ml-5 text-white">
              WHAT WE DO?
            </h3>
            <div className="flex items-center gap-4 ml-5">
              <div className="bg-[#1a1a1a] w-20 h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaLaptopCode className="text-[#ff4d00] text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Right to Left */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-3 ml-5 text-white">
              HOW DO WE DO IT?
            </h3>
            <div className="flex items-center gap-4 ml-5">
              <div className="bg-[#1a1a1a] w-20 h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaHtml5 className="text-[#ff4d00] text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Left to Right */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-3 ml-5 text-white">
              WHAT WE ACHIEVE?
            </h3>
            <div className="flex items-center gap-4 ml-5">
              <div className="bg-[#1a1a1a] w-20 h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaTrophy className="text-[#ff4d00] text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Right to Left */}
          <motion.div
            className="bg-[#232323] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-3 ml-5 text-white">
              AT THE END?
            </h3>
            <div className="flex items-center gap-4 ml-5">
              <div className="bg-[#1a1a1a] w-20 h-20 rounded-full flex items-center justify-center hover:bg-white">
                <FaCoffee className="text-[#ff4d00] text-4xl scale-100 hover:scale-110" />
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam consectetur est quis mauris accumsan eleifend.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="text-center bg-[#232323] py-10">
        {/* Fun Facts Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#ff4d00] uppercase"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          HOW ABOUT SOME FUN FACTS
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Consectetur est quis mauris accumsan eleifend sit amet non neq. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur
          est quis mauris accumsan eleifend sit amet non neq. Vivamus vitae
          purus eros, nec ullamcorper risus.
        </motion.p>

        {/* Fun Facts Stats */}
        <div className="grid md:grid-cols-4 gap-0 mt-10 text-white">
          {/* Stat 1 (Matches Image Design) */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-white scale-100 hover:scale-110">45</span>
              <FaTrophy className="text-[#ff4d00] text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-base mt-1">
              Web Awards
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-white scale-100 hover:scale-110">24</span>
              <FaGlobe className="text-[#ff4d00] text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-base mt-1">
              Locations
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-white scale-100 hover:scale-110">97</span>
              <FaHeart className="text-[#ff4d00] text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-base mt-1">
              Happy Clients
            </span>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-white scale-100 hover:scale-110">86</span>
              <FaRocket  className="text-[#ff4d00] text-4xl" />
            </div>
            <span className="uppercase text-gray-300 text-base mt-1">
              Projects
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;