import React from "react";

const SocialLinks = () => {
  const socialMedia = ["Facebook", "Twitter", "Google+", "LinkedIn", "Instagram"];

  return (
    <div className="flex justify-center space-x-10 py-5">
      {socialMedia.map((platform, index) => (
        <div 
          key={index} 
          className="text-white relative text-sm uppercase tracking-wider group flex flex-col items-center"
        >
          {/* Top Line - Moves Down More on Hover with Reduced Opacity and Color Change */}
          <span className="w-20 border-t border-white mb-2 transition-all duration-300 ease-in-out 
            group-hover:w-24 group-hover:rotate-45 group-hover:translate-y-4 
            group-hover:border-gray-400 group-hover:opacity-50"></span>

          {/* Text */}
          <span className="relative z-10">{platform}</span>

          {/* Bottom Line - Moves Up More on Hover with Reduced Opacity and Color Change */}
          <span className="w-20 border-t border-white mt-2 transition-all duration-300 ease-in-out 
            group-hover:w-24 group-hover:-rotate-45 group-hover:-translate-y-4 
            group-hover:border-gray-400 group-hover:opacity-50"></span>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
