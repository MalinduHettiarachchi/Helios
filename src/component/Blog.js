import React, { useState } from "react";
import BackgroundImage from "../assets/backimg4.jpg";

function Blog() {
  // Sample card data with images
  const cards = [
    {
      id: 1,
      title: "Card 1 Title",
      content: "This is the content of card 1.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 2,
      title: "Card 2 Title",
      content: "This is the content of card 2.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 3,
      title: "Card 3 Title",
      content: "This is the content of card 3.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 4,
      title: "Card 4 Title",
      content: "This is the content of card 4.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 5,
      title: "Card 5 Title",
      content: "This is the content of card 5.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 6,
      title: "Card 6 Title",
      content: "This is the content of card 6.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
    {
      id: 7,
      title: "Card 7 Title",
      content: "This is the content of card 7.",
      image: "https://via.placeholder.com/400x240", // Example image URL
    },
  ];

  // State to track the current starting index
  const [startIndex, setStartIndex] = useState(0);

  // Number of cards to display at a time
  const cardsPerPage = 3;

  // Function to handle "Next" button click
  const handleNext = () => {
    if (startIndex + 1 <= cards.length - cardsPerPage) {
      setStartIndex(startIndex + 1);
    }
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Get the current set of cards to display
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <div
        className="min-h-64 bg-cover bg-center bg-fixed" // Fixed background
        style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image
      >
        <div className="max-w-3xl mx-auto text-center py-10">
          {/* Topic */}
          <div className="max-w-[240px] bg-[#232323] text-white mx-auto ">
            <h2 className="text-2xl sm:text-3xl font-bold p-2 flex items-center justify-center mt-5">
              LATEST NEWS
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#232323] shadow-lg flex flex-col" // Flex layout for splitting
                style={{ height: "400px" }} // Total height of the card
              >
                {/* Top Part (240px) with Background Image */}
                <div
                  className="p-6 bg-cover bg-center" // Background image styling
                  style={{
                    height: "240px",
                    borderBottom: "1px solid #444",
                    backgroundImage: `url(${card.image})`, // Set background image
                  }}
                >
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.content}</p>
                </div>

                {/* Bottom Part (160px) */}
                <div className="p-6" style={{ height: "160px" }}>
                  {/* Add additional content or styling for the bottom part */}
                  <p className="text-gray-300">Additional content here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center p-10 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="bg-[#232323] text-white px-2 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= cards.length}
            className="bg-[#232323] text-white px-2 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;