import React, { useState, useEffect } from "react";
import BackgroundImage from "../assets/backimg2.jpg"; // Replace with your background image path

function Backimg2(){
   
    return (
      <div
        className="min-h-64 bg-cover bg-center bg-fixed" // Fixed background
        style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image
      >
        <div className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Topic */}
            <div className="max-w-[450px] bg-[#232323] text-white mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold  p-2 flex items-center justify-center">
              OUR LATEST FLICKER SHOTS 
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Backimg2
