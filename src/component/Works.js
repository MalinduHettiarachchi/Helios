import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/web1.jpg";
import img2 from "../assets/web2.jpg";
import img3 from "../assets/web3.jpg";
import img4 from "../assets/web4.jpg";
import img5 from "../assets/web5.jpg";
import img6 from "../assets/mob4.jpg";
import img7 from "../assets/mob1.jpg";
import img8 from "../assets/mob2.jpg";
import img9 from "../assets/mob3.jpg";
import img11 from "../assets/clo1.jpeg";

function Works() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const categories = ["Show All", "Web", "Mobile", "Cloud", "Network"];

  // Sample photos with categories
  const photos = [
    { id: 1, src: img1, category: "Web" },
    { id: 2, src: img2, category: "Web" },
    { id: 3, src: img3, category: "Web" },
    { id: 4, src: img4, category: "Web" },
    { id: 5, src: img5, category: "Web" },
    { id: 6, src: img6, category: "Mobile" },
    { id: 7, src: img7, category: "Mobile" },
    { id: 8, src: img8, category: "Mobile" },
    { id: 9, src: img9, category: "Mobile" },
    { id: 10, src: img11, category: "Cloud" },
  ];

  // Filter photos based on the selected category
  const filteredPhotos =
    selectedCategory === "Show All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div>
      {/* Header Section */}
      <div className="p-4 md:p-8 lg:p-16 w-full overflow-x-hidden bg-[#1a1a1a]">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-10 text-left ml-4 md:ml-10 lg:ml-20"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-left ml-4 md:ml-10 lg:ml-20 mt-2 md:mt-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          HIRE US{" "}
          <span className="relative inline-block">
            IF YOU LIKE
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
          WHAT WE DO
        </motion.p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 py-4 sm:py-6 md:py-10 bg-[#232323]">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`text-white relative text-xs sm:text-sm md:text-base uppercase tracking-wider group flex flex-col items-center cursor-pointer ${
              selectedCategory === category ? "text-[#ff4d00]" : ""
            }`}
          >
            {/* Top Line */}
            <span
              className={`w-8 sm:w-12 md:w-16 lg:w-20 border-t ${
                selectedCategory === category
                  ? "border-[#ff4d00]"
                  : "border-white"
              } mb-1 sm:mb-2 transition-all duration-300 ease-in-out 
              group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 lg:group-hover:w-24 group-hover:rotate-45 group-hover:translate-y-1 sm:group-hover:translate-y-2 md:group-hover:translate-y-4 
              group-hover:border-gray-400 group-hover:opacity-50`}
            ></span>

            {/* Text */}
            <span className="relative z-10">{category}</span>

            {/* Bottom Line */}
            <span
              className={`w-8 sm:w-12 md:w-16 lg:w-20 border-t ${
                selectedCategory === category
                  ? "border-[#ff4d00]"
                  : "border-white"
              } mt-1 sm:mt-2 transition-all duration-300 ease-in-out 
              group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 lg:group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 md:group-hover:-translate-y-4 
              group-hover:border-gray-400 group-hover:opacity-50`}
            ></span>
          </div>
        ))}
      </div>

      {/* Masonry Grid Layout for Images */}
      <div className="flex flex-col items-center w-full bg-[#232323]">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-4 p-4 sm:p-6 md:p-8 bg-[#232323] w-full max-w-[800px]">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                className="relative overflow-hidden rounded-lg mb-2 sm:mb-4 break-inside-avoid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={photo.src}
                  alt={`Photo ${photo.id}`}
                  className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm sm:text-base md:text-lg">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Works;