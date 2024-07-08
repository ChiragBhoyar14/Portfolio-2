import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar_Component = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-gradient-to-r from-blue-600 to-purple-700 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-lg p-4 transition-colors duration-500`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className={`text-xl font-bold ${darkMode ? "text-gray-200" : "text-white"} transition duration-300`}
          activeClassName={`text-yellow-300`}
          exact
        >
          Home
        </NavLink>

        {/* Toggle Button for Small Screens */}
        <button
          className="lg:hidden text-gray-200 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <NavLink
            to="/"
            className={`text-gray-200 hover:text-yellow-300 transition duration-300`}
            activeClassName={`text-yellow-300`}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`text-gray-200 hover:text-yellow-300 transition duration-300`}
            activeClassName={`text-yellow-300`}
          >
            About
          </NavLink>
          <NavLink
            to="/career"
            className={`text-gray-200 hover:text-yellow-300 transition duration-300`}
            activeClassName={`text-yellow-300`}
          >
            Career
          </NavLink>
          <NavLink
            to="/projects"
            className={`text-gray-200 hover:text-yellow-300 transition duration-300`}
            activeClassName={`text-yellow-300`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-gray-200 hover:text-yellow-300 transition duration-300`}
            activeClassName={`text-yellow-300`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_Component;
