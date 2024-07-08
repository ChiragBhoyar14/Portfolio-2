import React, { useState } from "react";
import Navbar_Component from "./Component/Navbar_Component";
import Header_Component from "./Component/Header_Component";
import About_Component from "./Component/About_Component";
import Career_Component from "./Component/Career_Component";
import Contact_Component from "./Component/Contact_Component";
import MyProjects_Component from "./Component/MyProjects_Component";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      {/* <Router>
        <Navbar_Component darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Header_Component darkMode={darkMode} />} />
          <Route path="/about" element={<About_Component />} />
          <Route path="/career" element={<Career_Component />} />
          <Route path="/contact" element={<Contact_Component />} />
          <Route path="/projects" element={<MyProjects_Component />} />
        </Routes>
      </Router> */
      <>
      <Header_Component></Header_Component>
      <About_Component></About_Component>
      <Career_Component></Career_Component>
      <MyProjects_Component></MyProjects_Component>
      <Contact_Component></Contact_Component>
      </>
      }
      <button
        className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg ${darkMode ? "bg-gray-300" : "bg-gray-800"}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
