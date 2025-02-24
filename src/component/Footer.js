import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    "Facebook",
    "Twitter",
    "Google+",
    "LinkedIn",
    "Instagram",
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold text-white">HELIOS</h1>
            <p className="text-gray-400">
              Home and Office: Brace Spasojevic 27, Trstenik, Serbia
            </p>
          </div>

          {/* For Work Inquiry Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">
              For Work Inquiry
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <FaPhoneAlt className="text-white" />{" "}
                <span>+94 76 941 7154</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaPhoneAlt className="text-white" />{" "}
                <span>+94 77 008 5670</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaEnvelope className="text-white" />{" "}
                <span>career@helios.lk</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaEnvelope className="text-white" />{" "}
                <span>info@helios.lk</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaSkype className="text-white" /> <span>helios-skype</span>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/fueltrix"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/buy" className="text-gray-400 hover:text-orange-500">
                  Buy Now
                </a>
              </li>
              <li>
                <a
                  href="/ourteam"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-orange-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Fast Delivery
              </li>
              <li className="text-gray-400">
                24 Hours Customer Services
              </li>
              <li className="text-gray-400">
                Maintaining 
              </li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Category</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Web</li>
              <li className="text-gray-400">Moblie</li>
              <li className="text-gray-400">Cloud</li>
              <li className="text-gray-400">Network</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white pt-6 text-center">
          <p className="text-gray-400">
            © 2025 Helios. All rights reserved.| Designed and Developed by
            HELIOS IT (Pvt) Ltd
          </p>
        </div>

        

        <div className="flex flex-wrap justify-center gap-4 md:gap-2 py-10">
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
    </footer>
  );
};

export default Footer;
  