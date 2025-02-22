import React from "react";

// Import images for team members (replace with actual image paths)
import RobertDoeImage from "../assets/person1.jpg";
import CarolineSmithImage from "../assets/person2.jpg";

function Theteam() {
  const socialMedia1 = ["Facebook", "Twitter", "Instagram"];
  const socialMedia2 = ["Facebook", "Instagram", "Google+"];

  return (
    <div className="bg-[#1a1a1a]">
      {/* Top Section: Heading and Paragraph */}
      <div className="p-16 overflow-x-hidden">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-10 text-left ml-20">
          <span className="text-[#ff4d00] italic">WHO'S</span>
          <span className="italic font-light text-white"> BEHIND HELIOS?</span>
        </h1>

        {/* Paragraph */}
        <p className="text-xl text-white text-left ml-20 mt-4">
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
        </p>
      </div>

      {/* Team Members Section */}
      <div className="bg-[#232323] p-16 w-full">
        <div className="flex justify-center flex-wrap gap-20 max-w-[1200px] mx-auto">
          {/* Robert Doe */}
          <div className="flex flex-col">
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
            <p className="text-3xl text-white text-bold mt-10 text-left">HEAD OF DEVELOPMENT</p>
            <ul className="text-white text-left mt-4 space-y-2">
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Brand Design
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Visual Identity
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Product Design
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Illustrations
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Brand Action
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex flex-wrap justify-left gap-4 md:gap-6 py-5 mt-6">
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
            </div>
          </div>

          {/* Caroline Smith */}
          <div className="flex flex-col">
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
            <p className="text-3xl text-white text-bold mt-10 text-left">CLIENT SERVICE DIRECTOR</p>
            <ul className="text-white text-left mt-4 space-y-2">
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Interactive Experience
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                User Interface
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Search Engine Marketing
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Social Media
              </li>
              <li className="flex items-center">
                <span style={{ color: "#ff4d00", marginRight: "10px" }}>✓</span>
                Digital Installations
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex flex-wrap justify-left gap-4 md:gap-6 py-5 mt-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theteam;