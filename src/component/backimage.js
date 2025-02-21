import React, { useState, useEffect } from "react";

// Import your images (replace with your actual image paths)
import PreviousIcon from "../assets/previous.png";
import NextIcon from "../assets/next.png";
import BackgroundImage from "../assets/backimg.jpg"; // Replace with your background image path

function BackImage() {
  // Sample testimonials data
  const testimonials = [
    {
      text: "Duis in nibh id lorem pulvinar adipiscing. Nulla odio elit, rutrum at convallis in, rhoncus ac urna. Curabitur justo urna, congue quis volutpat sed.",
      author: "Sarah",
      company: "GraphicRiver",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John",
      company: "Envato",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Emily",
      company: "CodeCanyon",
    },
  ];

  // State to keep track of the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade animation
  const [slideDirection, setSlideDirection] = useState("next"); // State to control slide direction

  // Function to handle the "Next" button click
  const handleNext = () => {
    setFade(false); // Start fade-out
    setSlideDirection("next"); // Set slide direction to "next"
    setTimeout(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true); // Start fade-in
    }, 300); // Match the duration of the fade-out animation
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    setFade(false); // Start fade-out
    setSlideDirection("previous"); // Set slide direction to "previous"
    setTimeout(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(true); // Start fade-in
    }, 300); // Match the duration of the fade-out animation
  };

  // Auto-cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next testimonial
    }, 4000); // Change testimonial every 4 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentTestimonial]); // Re-run effect when currentTestimonial changes

  return (
    <div
      className="min-h-64 bg-cover bg-center bg-fixed" // Fixed background
      style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image
    >
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Topic */}
          <div className="max-w-[350px] bg-[#232323] text-white mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 p-1 flex items-center justify-center">
              CLIENT TESTIMONIALS
            </h2>
          </div>
          {/* Comments */}
          <div className="bg-[#232323] p-5 relative overflow-hidden h-48 sm:h-40">
            <div
              className={`transition-all duration-500 ease-in-out ${
                fade ? "opacity-100 translate-x-0" : "opacity-0"
              } ${
                slideDirection === "next"
                  ? fade
                    ? "translate-x-0"
                    : "-translate-x-full"
                  : fade
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
              key={currentTestimonial} // Force re-render for animation
            >
              <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="text-base sm:text-lg text-white">
                <span className="font-bold">
                  {testimonials[currentTestimonial].author}
                </span>
                <span className="italic ml-2">
                  {testimonials[currentTestimonial].company}
                </span>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-8 sm:mt-10">
            <button
              onClick={handlePrevious}
              className="bg-[#232323] px-2 rounded-lg hover:bg-[#333333] h-10 sm:h-12"
            >
              <img
                src={PreviousIcon}
                alt="Previous"
                className="w-3 h-5 sm:h-7 scale-100 hover:scale-110"
              />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#232323] px-2 rounded-lg hover:bg-[#333333] h-10 sm:h-12"
            >
              <img
                src={NextIcon}
                alt="Next"
                className="w-3 h-5 sm:h-7 scale-100 hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackImage;