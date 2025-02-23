import React from 'react'
import { motion } from "framer-motion";

function Works() {
    const socialMedia = ["Show All", "Twitter", "Google+", "LinkedIn", "Instagram"];

  return (
    <div>
      <div className="p-8 md:p-16 w-full overflow-x-hidden bg-[#1a1a1a]">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-left ml-4 md:ml-20"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#ff4d00] italic">WHAT </span>
          <span className="italic font-light text-white">IT LOOK LIKE?</span>
        </motion.h1>

        {/* Paragraph with Framer Motion */}
        <motion.p
          className="text-base md:text-xl text-white text-left ml-4 md:ml-20 mt-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          HIRE US {" "}
          <span className="relative inline-block">
          IF YOU LIKE
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
          WHAT WE DO
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-6 py-5  bg-[#232323]">
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
  )
}

export default Works
