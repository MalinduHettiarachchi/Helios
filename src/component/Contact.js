import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="p-8 md:p-16 w-full overflow-x-hidden bg-[#1a1a1a]">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-left ml-4 md:ml-20"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#ff4d00] italic">LET </span>
          <span className="italic font-light text-white">HAVE A CHAT</span>
        </motion.h1>

        {/* Paragraph with Framer Motion */}
        <motion.p
          className="text-base md:text-xl text-white text-left ml-4 md:ml-20 mt-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {" "}
          <span className="relative inline-block">
            WE CAN HELP YOU
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff4d00]"></div>
          </span>{" "}
          PROMOTE YOUR BUSINESS
        </motion.p>
      </div>

      <div className="bg-[#232323] p-10">
        {/* Heading with Framer Motion */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#ff4d00]">SAY HELLO </span>
        </motion.h1>

        <div className="flex flex-col items-start w-[500px] mx-auto">
          {/* Name Field */}
          <motion.div
            className="flex flex-col items-start w-full"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <label
              htmlFor="name"
              className="text-sm font-medium text-left text-white"
            >
              Name: *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white mb-4 "
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="flex flex-col items-start w-full"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-left text-white"
            >
              Email: *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white mb-4 "
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="flex flex-col items-start w-full"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <label
              htmlFor="message"
              className="text-sm font-medium text-left text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white resize-none mb-4 "
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="flex flex-col items-start w-full"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#ff4d00] text-white font-bold  hover:bg-[#e64500] transition-colors "
            >
              Submit
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
