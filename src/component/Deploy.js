import React, { useState, useRef } from "react";
import Home from "../component/Home";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import BackImage from "./backimage";
import Theteam from "./Theteam";
import Backimg2 from "./Backimg2";
import Services from "./Services";
import Backimg3 from "./Backimg3";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";

function Deploy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Home Section */}
      <div ref={homeRef}>
        <Home />
      </div>

      {/* Sticky Navbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <nav className="bg-black text-white flex justify-between items-center px-4 md:px-10 py-4 relative ">
          {/* Logo */}
          <div className="text-white text-3xl font-light tracking-wide">
            H E L I <span className="text-red-600"> O </span>S
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
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
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100 flex flex-col md:flex-row justify-center items-center md:justify-start md:space-x-6 uppercase text-lg font-light absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 px-4 md:px-0 py-4 md:py-0 z-50`}
          >
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(teamRef)}
            >
              The Team
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(worksRef)}
            >
              Works
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(blogRef)}
            >
              Blog
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 md:py-0"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>

      {/* Sections with References */}
      <div ref={aboutRef} className="scroll-mt-16">
        <Aboutus />
      </div>
      <BackImage />
      <div ref={teamRef} className="scroll-mt-16">
        <Theteam />
      </div>
      <Backimg2 />
      <div ref={servicesRef} className="scroll-mt-16">
        <Services />
      </div>
      <Backimg3 />
      <div ref={worksRef} className="scroll-mt-16">
        <Works />
      </div>
      <div ref={blogRef} className="scroll-mt-16">
        <Blog />
      </div>
      <div ref={contactRef} className="scroll-mt-16">
        <Contact />
      </div>
    </div>
  );
}

export default Deploy;
