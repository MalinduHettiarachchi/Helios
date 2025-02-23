import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaLaptop, FaSearch } from "react-icons/fa"; // Import icons

function Services() {
  const services = [
    {
      title: "GRAPHIC DESIGN",
      description:
        "Nulla odio elit, rurrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed.",
      items: [
        "Brand Design",
        "User Interface",
        "Illustrations",
        "Social Media",
        "Digital Installations",
      ],
      icon: <FaPaintBrush className="text-4xl text-[#ff4d00] mb-4" />, // Icon for Graphic Design
    },
    {
      title: "WEB DESIGN",
      description:
        "Nulla odio elit, rurrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed.",
      items: [
        "Product Design",
        "User Interface",
        "Search Engine Marketing",
        "Social Media",
        "Digital Installations",
      ],
      icon: <FaLaptop className="text-4xl text-[#ff4d00] mb-4" />, // Icon for Web Design
    },
    {
      title: "SEO",
      description:
        "Nulla odio elit, rurrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed.",
      items: [
        "Interactive Experience",
        "User Interface",
        "Search Engine Marketing",
        "Social Media",
        "Digital Installations",
      ],
      icon: <FaSearch className="text-4xl text-[#ff4d00] mb-4" />, // Icon for SEO
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a]">
      <div className="p-8 md:p-16 w-full overflow-x-hidden">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-left ml-4 md:ml-20"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#ff4d00] italic">WHAT </span>
          <span className="italic font-light text-white"> WE DO?</span>
        </motion.h1>

        {/* Paragraph with Framer Motion */}
        <motion.p
          className="text-base md:text-xl text-white text-left ml-4 md:ml-20 mt-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          OUR SERVICES ARE DELIVERED BY OUR TEAM WITH{" "}
          <span className="relative inline-block">
            YEARS OF EXPERIENCE
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
        </motion.p>
      </div>

      {/* Services Cards */}
      <div className="bg-[#232323] w-full flex justify-center overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-[#232323] max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center w-[290px] h-[440px] cursor-pointer"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }} // Hover effect: Scale up to 110%
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
              viewport={{ once: false }}
            >
              {/* Card Title */}
              <h2 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h2>

              {/* Icon between Title and Description */}
              <div className="flex justify-center p-1">{service.icon}</div>

              {/* Card Description */}
              <p className="text-base text-gray-300 mb-4 text-center">
                {service.description}
              </p>

              {/* Card Items (without bullet points) */}
              <div className="text-gray-300 mt-6">
                {service.items.map((item, i) => (
                  <div key={i} className="mb-1">
                    <p className={i === 0 ? "mt-2" : ""}>{item}</p>
                    {/* White line below each item */}
                    {i !== service.items.length - 1 && (
                      <div className="border-b border-gray-500 mt-1"></div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-8 md:p-12 w-full overflow-x-hidden flex flex-col items-center justify-center">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-3xl md:text-3xl font-bold mb-6 md:mb-6text-left ml-4 md:ml-20"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-white  ">ARE YOU READY TO START A CONVERSATION?</span>
        </motion.h1>

        {/* Paragraph with Framer Motion */}
        <motion.p
          className="text-base md:text-xl text-white text-left ml-4 md:ml-20 mt-1"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Get In Touch 
        </motion.p>
      </div>
    </div>
  );
}

export default Services;