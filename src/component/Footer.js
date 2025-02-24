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

        <div class="fixed lg:bottom-16 bottom-4 right-4 w-[50px] h-[50px] flex justify-center items-center z-50">
    <a href="https://wa.me/94763630369"
        class="bg-green-500 text-white p-3 h-[50px] w-[50px] rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex justify-center items-center"
        target="_blank" aria-label="Contact us on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp"
            viewBox="0 0 16 16">
            <path
                d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
    </a>
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
  