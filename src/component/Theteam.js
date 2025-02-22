import React from "react";
import { motion } from "framer-motion";

// Import images for team members (replace with actual image paths)
import RobertDoeImage from "../assets/person1.jpg";
import CarolineSmithImage from "../assets/person2.jpg";

function Theteam() {
  return (
    <div className="p-16 w-full overflow-x-hidden bg-[#1a1a1a]">
      {/* Heading with left-to-right animation */}
      <motion.h1
        className="text-5xl font-bold mb-8 text-left ml-20"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-[#ff4d00] italic">WHO'S</span>
        <span className="italic font-light text-white"> BEHIND HELIOS?</span>
      </motion.h1>

      {/* Paragraph with right-to-left animation */}
      <motion.p
        className="text-xl text-white text-left ml-20"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        WE DESIGN{" "}
        <span className="relative inline-block">
          WEBSITES
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
        </span>
        ,{" "}
        <span className="relative inline-block">
          APPLICATIONS
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
        </span>
        ,{" "}
        <span className="relative inline-block">
          LOGOS
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
        </span>{" "}
        AND OTHER AWESOME DIGITAL MEDIA
      </motion.p>

      {/* Team Members Section */}
      <div className="mt-20 flex justify-center flex-wrap gap-20">
        {/* Robert Doe */}
        <motion.div
          className="flex flex-col" // Removed items-center to align text to the left
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={RobertDoeImage}
              alt="Robert Doe"
              className="w-96 h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 text-white p-2 w-full">
              <h2 className="text-right text-2xl text-black">CAROLINE</h2>
            </div>
          </div>
          <p className="text-3xl text-white text-bold mt-10 text-left">HEAD OF DEVELOPMENT</p> {/* Added text-left */}
        </motion.div>

        {/* Caroline Smith */}
        <motion.div
          className="flex flex-col" // Removed items-center to align text to the left
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={CarolineSmithImage}
              alt="Caroline Smith"
              className="w-96 h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 text-white p-2 w-full">
              <h2 className="text-left text-2xl text-black">ROBERT DOE</h2>
            </div>
          </div>
          <p className="text-3xl text-white text-bold mt-10 text-left">CLIENT SERVICE DIRECTOR</p> {/* Added text-left */}
        </motion.div>
      </div>
    </div>
  );
}

export default Theteam;