import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/backimg3.jpg";
import p1Logo from "../assets/pr1.png";
import p2Logo from "../assets/pr2.png";
import p3Logo from "../assets/pr3.png";
import p4Logo from "../assets/pr4.png";
import p5Logo from "../assets/pr5.png";
import p6Logo from "../assets/pr6.png";

function Backimg2() {
  const partners = [
    { name: "Partner 1", logo: p1Logo },
    { name: "Partner 2", logo: p2Logo },
    { name: "Partner 3", logo: p3Logo },
    { name: "Partner 4", logo: p4Logo },
    { name: "Partner 5", logo: p5Logo },
    { name: "Partner 6", logo: p6Logo },
  ];

  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <div
      className="min-h-64 bg-cover bg-center bg-fixed" // Fixed background
      style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image
    >
      <div className="py-20 sm:py-32 text-white text-center px-5 overflow-hidden">
        {/* Heading */}
        <div className="max-w-[300px] bg-[#232323] text-white mx-auto mb-10 sm:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold p-2 flex items-center justify-center">
            OUR PARTNERS
          </h2>
        </div>

        {/* Partner Logos with Infinite Scroll */}
        <motion.div
          className="flex justify-start items-center gap-5 sm:gap-10"
          animate={{
            x: ["0%", "-100%"], // Move from right to left
          }}
          transition={{
            duration: 20, // Adjust the duration for slower/faster scrolling
            repeat: Infinity, // Repeat the animation infinitely
            ease: "linear", // Smooth linear animation
          }}
        >
          {/* Render the duplicated partners list */}
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#232323] rounded-xl p-3 sm:p-5 w-24 h-12 sm:w-40 sm:h-20 flex justify-center items-center flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Backimg2;