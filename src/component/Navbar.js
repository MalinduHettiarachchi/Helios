import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled:", !isMenuOpen); // Debugging
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white flex justify-between items-center px-4 md:px-10 py-4 relative">
      {/* Logo */}
      <div className="text-white text-3xl font-light tracking-wide">
        H E L I
        <span className="text-red-600"> O </span>S
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            // Close icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-6 uppercase text-lg font-light absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 px-4 md:px-0 py-4 md:py-0 z-50`}
      >
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Home</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">About Us</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">The Team</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Services</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Works</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Blog</li>
        <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;