import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";
// import profileImage from './Images/Sticker1.png'; // Ensure you have an image in your project

const Header_Component = ({ darkMode }) => {
  return (
    <section
      className={`relative bg-gradient-to-r from-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24 overflow-hidden transition-colors duration-500 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
      style={{ backgroundImage: darkMode ? '' : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background graphic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 opacity-30 w-full h-full dark:opacity-20"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Abstract shapes */}
            <motion.svg
              width="1200"
              height="1200"
              className="absolute transform -translate-y-1/2 -translate-x-1/2 opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              <circle cx="600" cy="600" r="500" fill="#ffffff" />
            </motion.svg>
            <motion.svg
              width="600"
              height="600"
              className="absolute transform translate-y-1/3 translate-x-1/4 opacity-40"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <circle cx="300" cy="300" r="250" fill="#ffffff" />
            </motion.svg>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 dark:to-gray-900"></div>
      </div>
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center lg:justify-start z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              // src={profileImage}
              src="./Images/Sticker1.png"
              alt="Profile"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="lg:w-2/3 text-center lg:text-left z-10 px-4 lg:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 transform transition-transform duration-300 hover:scale-105 hover:text-yellow-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Chirag Bhoyar,<br className="lg:hidden" /> a .NET Software Developer
            </motion.h1>
            <p className="text-lg lg:text-xl font-light mb-6 lg:mb-8 transition duration-300 hover:text-yellow-400">
              Crafting scalable software solutions with passion and precision.
            </p>
            {/* Introduction Section */}
            <motion.div
              className={`bg-blue-200 dark: p-6 rounded-lg shadow-lg mb-6 lg:mb-8 hover:shadow-xl transform transition-shadow duration-300 hover:scale-105 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="flex items-center mb-4">
                <FaDotCircle className={`text-purple-600 dark:text-purple-400 mr-2 transition duration-300 hover:scale-125`} />
                <h2 className={`text-xl lg:text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  About Me
                </h2>
              </div>
              <p className={`text-md lg:text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} transition duration-300 hover:text-purple-600 dark:hover:text-purple-400`}>
                I hold a Bachelor’s Degree in Science from Gondwana University, where I focused on Chemistry, Zoology, and Biology. This interdisciplinary education has provided me with a robust analytical and problem-solving skill set, which I have successfully transitioned into the software industry. My scientific background has equipped me with a methodical approach to tackling complex challenges, a keen attention to detail, and the ability to analyze and synthesize information effectively—all of which are invaluable in my software development career.
              </p>
              <div className="mt-4 flex items-start">
                <FaDotCircle className={`text-purple-600 dark:text-purple-400 mr-2 transition duration-300 hover:scale-125`} />
                <p className={`text-md lg:text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} transition duration-300 hover:text-purple-600 dark:hover:text-purple-400`}>
                  Whether working on complex backend systems or user-friendly front-end interfaces, I bring a deep understanding of software architecture, performance optimization, and a dedication to best practices.
                </p>
              </div>
              <p className={`mt-4 text-md lg:text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} transition duration-300 hover:text-purple-600 dark:hover:text-purple-400`}>
                I am excited to leverage my expertise to tackle challenging projects and create impactful software.
              </p>
            </motion.div>
            {/* Action Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="./Images/Chirag Resume.pdf"
                download="./Images/Chirag Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/chirag-bhoyar-725747286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={30} />
              </motion.a>
              <motion.a
                href="https://github.com/ChiragBhoyar14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-yellow-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={30} />
              </motion.a>
              <motion.a
                href="mailto:chiragbhoyar14@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-red-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={30} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header_Component;
