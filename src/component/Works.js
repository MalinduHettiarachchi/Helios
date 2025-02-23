import React, { useState } from "react";
import { motion } from "framer-motion";
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
          HIRE US{" "}
          <span className="relative inline-block">
            IF YOU LIKE
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
          WHAT WE DO
        </motion.p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 py-10 bg-[#232323]">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`text-white relative text-xs md:text-sm uppercase tracking-wider group flex flex-col items-center cursor-pointer ${
              selectedCategory === category ? "text-[#ff4d00]" : ""
            }`}
          >
            {/* Top Line */}
            <span
              className={`w-12 md:w-20 border-t ${
                selectedCategory === category
                  ? "border-[#ff4d00]"
                  : "border-white"
              } mb-1 md:mb-2 transition-all duration-300 ease-in-out 
              group-hover:w-16 md:group-hover:w-24 group-hover:rotate-45 group-hover:translate-y-2 md:group-hover:translate-y-4 
              group-hover:border-gray-400 group-hover:opacity-50`}
            ></span>

            {/* Text */}
            <span className="relative z-10">{category}</span>

            {/* Bottom Line */}
            <span
              className={`w-12 md:w-20 border-t ${
                selectedCategory === category
                  ? "border-[#ff4d00]"
                  : "border-white"
              } mt-1 md:mt-2 transition-all duration-300 ease-in-out 
              group-hover:w-16 md:group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-2 md:group-hover:-translate-y-4 
              group-hover:border-gray-400 group-hover:opacity-50`}
            ></span>
          </div>
        ))}
      </div>

      {/* Masonry Grid Layout for Images */}
      <div className="flex flex-col items-center w-full bg-[#232323]">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-8 bg-[#232323] w-[800px]">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg mb-4 break-inside-avoid"
            >
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
