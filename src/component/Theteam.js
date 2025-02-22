import React from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // To detect when the element is in view

// Import images for team members (replace with actual image paths)
import RobertDoeImage from "../assets/person1.jpg";
import CarolineSmithImage from "../assets/person2.jpg";

function Theteam() {
  const socialMedia1 = ["Facebook", "Twitter", "Instagram"];
  const socialMedia2 = ["Facebook", "Instagram", "Google+"];

  // Animation for circular progress bars
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        strokeDasharray: ["0 100", "79 100", "83 100", "92 100", "87 100"],
        transition: { duration: 3, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#1a1a1a]">
      {/* Top Section: Heading and Paragraph */}
      <div className="p-16 overflow-x-hidden">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-5xl font-bold mb-10 text-left ml-20"
          initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animate when in view
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }} // Allow animation to trigger again on scroll up
        >
          <span className="text-[#ff4d00] italic">WHO'S</span>
          <span className="italic font-light text-white"> BEHIND HELIOS?</span>
        </motion.h1>

        {/* Paragraph with Framer Motion */}
        <motion.p
          className="text-xl text-white text-left ml-20 mt-4"
          initial={{ x: 200, opacity: 0 }} // Start from the right and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animate when in view
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }} // Allow animation to trigger again on scroll up
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
      </div>

      {/* Team Members Section */}
      <div className="bg-[#232323] p-16 w-full">
        <div className="flex justify-center flex-wrap gap-20 max-w-[1200px] mx-auto">
          {/* Robert Doe */}
          <div className="flex flex-col">
            {/* Image and Text Overlay with Framer Motion */}
            <motion.div
              className="relative"
              initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <img
                src={RobertDoeImage}
                alt="Robert Doe"
                className="w-96 h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 text-white p-2 w-full">
                <h2 className="text-right text-2xl text-black">CAROLINE</h2>
              </div>
            </motion.div>

            {/* Title and List with Framer Motion */}
            <motion.div
              initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <p className="text-3xl text-white text-bold mt-10 text-left">
                HEAD OF DEVELOPMENT
              </p>
              <ul className="text-white text-left mt-4 space-y-2">
                <li className="flex items-center">
                  <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                    ✓
                  </span>
                  Brand Design
                </li>
                <li className="flex items-center">
                  <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                    ✓
                  </span>
                  Visual Identity
                </li>
                <li className="flex items-center">
                  <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                    ✓
                  </span>
                  Product Design
                </li>
                <li className="flex items-center">
                  <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                    ✓
                  </span>
                  Illustrations
                </li>
                <li className="flex items-center">
                  <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                    ✓
                  </span>
                  Brand Action
                </li>
              </ul>
            </motion.div>

            {/* Social Links with Framer Motion */}
            <motion.div
              className="flex flex-wrap justify-left gap-4 md:gap-6 py-5 mt-6"
              initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              {socialMedia1.map((platform, index) => (
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
                  <span className="relative z-10 ">{platform}</span>

                  {/* Bottom Line - Moves Up More on Hover with Reduced Opacity and Color Change */}
                  <span
                    className="w-12 md:w-20 border-t border-white mt-1 md:mt-2 transition-all duration-300 ease-in-out 
                      group-hover:w-16 md:group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-2 md:group-hover:-translate-y-4 
                      group-hover:border-gray-400 group-hover:opacity-50"
                  ></span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Caroline Smith */}
          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* Image and Text Overlay with Framer Motion */}
              <motion.div
                className="relative"
                initial={{ x: 200, opacity: 0 }} // Start from the right and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 1, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }} // Allow animation to trigger again on scroll up
              >
                <img
                  src={CarolineSmithImage}
                  alt="Caroline Smith"
                  className="w-96 h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 text-white p-2 w-full">
                  <h2 className="text-left text-2xl text-black">ROBERT DOE</h2>
                </div>
              </motion.div>

              {/* Title and List with Framer Motion */}
              <motion.div
                initial={{ x: 200, opacity: 0 }} // Start from the right and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 1, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }} // Allow animation to trigger again on scroll up
              >
                <p className="text-3xl text-white text-bold mt-10 text-left">
                  CLIENT SERVICE DIRECTOR
                </p>
                <ul className="text-white text-left mt-4 space-y-2">
                  <li className="flex items-center">
                    <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                      ✓
                    </span>
                    Interactive Experience
                  </li>
                  <li className="flex items-center">
                    <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                      ✓
                    </span>
                    User Interface
                  </li>
                  <li className="flex items-center">
                    <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                      ✓
                    </span>
                    Search Engine Marketing
                  </li>
                  <li className="flex items-center">
                    <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                      ✓
                    </span>
                    Social Media
                  </li>
                  <li className="flex items-center">
                    <span style={{ color: "#ff4d00", marginRight: "10px" }}>
                      ✓
                    </span>
                    Digital Installations
                  </li>
                </ul>
              </motion.div>

              {/* Social Links with Framer Motion */}
              <motion.div
                className="flex flex-wrap justify-left gap-4 md:gap-6 py-5 mt-6"
                initial={{ x: 200, opacity: 0 }} // Start from the right and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 1, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }} // Allow animation to trigger again on scroll up
              >
                {socialMedia2.map((platform, index) => (
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
                    <span className="relative z-10 ">{platform}</span>

                    {/* Bottom Line - Moves Up More on Hover with Reduced Opacity and Color Change */}
                    <span
                      className="w-12 md:w-20 border-t border-white mt-1 md:mt-2 transition-all duration-300 ease-in-out 
                      group-hover:w-16 md:group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-2 md:group-hover:-translate-y-4 
                      group-hover:border-gray-400 group-hover:opacity-50"
                    ></span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Skills Section */}
      <div className="bg-[#1a1a1a] p-10 overflow-x-hidden" ref={ref} >
        <div className="max-w-[1200px] mx-auto">
          <motion.h1
            className="text-5xl font-bold mb-8 text-[#ff4d00] ml-20"
            initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
            whileInView={{ x: 0, opacity: 1 }} // Animate when in view
            transition={{ duration: 1, ease: "easeOut" }} // Animation settings
            viewport={{ once: false }} // Allow animation to trigger again on scroll up
          >
            <h2 className="">TEAM SKILLS</h2>
          </motion.h1>
          <motion.h1
            className="text-lg mb-12 text-white ml-20 mr-20"
            initial={{ x: 200, opacity: 0 }} // Start from the left and invisible
            whileInView={{ x: 0, opacity: 1 }} // Animate when in view
            transition={{ duration: 1, ease: "easeOut" }} // Animation settings
            viewport={{ once: false }} // Allow animation to trigger again on scroll up
          >
            <p>
              Consectetur est quis mauris accumsan eleifend sit amet non neq.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur est quis mauris accumsan eleifend sit amet non neq.
              Vivamus vitae purus eros, nec ullamcorper risus.
            </p>
          </motion.h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PHP Skill */}
            <motion.h1
              initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">PHP</h3>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <motion.path
                      className="text-[#ff4d00]"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      initial={{ strokeDasharray: "0 100" }}
                      animate={controls}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                    79%
                  </span>
                </div>
              </div>
            </motion.h1>

            {/* CSS3 Skill */}
            <motion.h1
              initial={{ x: -200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">CSS3</h3>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <motion.path
                      className="text-[#ff4d00]"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      initial={{ strokeDasharray: "0 100" }}
                      animate={controls}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                    83%
                  </span>
                </div>
              </div>
            </motion.h1>

            {/* HTML5 Skill */}
            <motion.h1
              initial={{ x: 200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">HTML5</h3>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <motion.path
                      className="text-[#ff4d00]"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      initial={{ strokeDasharray: "0 100" }}
                      animate={controls}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                    92%
                  </span>
                </div>
              </div>
            </motion.h1>

            {/* jQuery Skill */}
            <motion.h1
              initial={{ x: 200, opacity: 0 }} // Start from the left and invisible
              whileInView={{ x: 0, opacity: 1 }} // Animate when in view
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
              viewport={{ once: false }} // Allow animation to trigger again on scroll up
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">jQuery</h3>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <motion.path
                      className="text-[#ff4d00]"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      initial={{ strokeDasharray: "0 100" }}
                      animate={controls}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                    87%
                  </span>
                </div>
              </div>
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theteam;
