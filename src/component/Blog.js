import React, { useState } from "react";
import BackgroundImage from "../assets/backimg4.jpg";
import Cardbg1 from "../assets/cardbg1.jpg";
import Cardbg2 from "../assets/cardbg2.jpg";
import Cardbg3 from "../assets/cardbg3.jpg";
import Cardbg4 from "../assets/cardbg4.jpg";
import Cardbg5 from "../assets/cardbg5.jpg";
import Cardbg6 from "../assets/cardbg6.jpg";
import Cardbg7 from "../assets/cardbg7.jpg";

function Blog() {
  // Sample card data with images
  const cards = [
    {
      id: 1,
      date: "May 21, 2001",
      title: "Card 1 Title",
      content: "This is the content of card 1.",
      image: Cardbg1,
    },
    {
      id: 2,
      date: "May 21, 2001",
      title: "Card 2 Title",
      content: "This is the content of card 2.",
      image: Cardbg2,
    },
    {
      id: 3,
      date: "May 21, 2001",
      title: "Card 3 Title",
      content: "This is the content of card 3.",
      image: Cardbg3,
    },
    {
      id: 4,
      date: "May 21, 2001",
      title: "Card 4 Title",
      content: "This is the content of card 4.",
      image: Cardbg4,
    },
    {
      id: 5,
      date: "May 21, 2001",
      title: "Card 5 Title",
      content: "This is the content of card 5.",
      image: Cardbg5,
    },
    {
      id: 6,
      date: "May 21, 2001",
      title: "Card 6 Title",
      content: "This is the content of card 6.",
      image: Cardbg6,
    },
    {
      id: 7,
      date: "May 21, 2001",
      title: "Card 7 Title",
      content: "This is the content of card 7.",
      image: Cardbg7,
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
          <div className="max-w-[240px] bg-[#232323] text-white mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold p-2 flex items-center justify-center mt-5">
              LATEST NEWS
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#232323] shadow-lg flex flex-col"
                style={{ minHeight: "400px", height: "auto" }}>
                {/* Top Part with Background Image */}
                <div
                  className="p-6 bg-cover bg-center"
                  style={{
                    height: "240px",
                    borderBottom: "1px solid #444",
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <p className="text-white bg-[#232323] p-1 w-[110px] opacity-80">
                    {card.date}
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="p-6 flex-1 flex flex-col ">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {card.content}
                  </p>

                  {/* Add Button */}
                  <button
                    className="mt-4 py-1 px-1 bg-[#1a1a1a] text-white w-[100px] transition-all"
                    onClick={() => alert(`Button clicked for ${card.title}`)}
                  >
                    Read More
                  </button>
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
            className="bg-[#232323] text-white px-4 py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= cards.length}
            className="bg-[#232323] text-white px-4 py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
