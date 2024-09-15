import React, { useState } from "react";
import Header_Component from "./Component/Header_Component";
import About_Component from "./Component/About_Component";
import Career_Component from "./Component/Career_Component";
import Contact_Component from "./Component/Contact_Component";
import MyProjects_Component from "./Component/MyProjects_Component";
import InProgressProject_Component from "./Component/InProgressProject_Component";
import { BsSun, BsMoon } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <>
        <Header_Component />
        <About_Component />
        <Career_Component />
        <MyProjects_Component />
        <Contact_Component />
      </>

      {/* Dark/Light Mode Toggle */}
      <div
        className="fixed bottom-4 right-4 flex items-center cursor-pointer"
        onClick={toggleDarkMode}
      >
        {/* Slider Container */}
        <div
          className="relative w-16 h-8 bg-transparent rounded-full flex items-center border border-gray-400 dark:border-gray-600"
        >
          {/* Light/Dark Mode Indicators */}
          <span
            className={`absolute text-xl transition-transform duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-900"
            }`}
            style={{ left: "0.5rem" }}
          >
            <BsSun />
          </span>
          <span
            className={`absolute text-xl transition-transform duration-300 ${
              darkMode ? "text-gray-900" : "text-gray-400"
            }`}
            style={{ right: "0.5rem" }}
          >
            <BsMoon />
          </span>
          <div
            className={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out border border-gray-400 dark:border-gray-600 ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
            style={{ left: "0.25rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
