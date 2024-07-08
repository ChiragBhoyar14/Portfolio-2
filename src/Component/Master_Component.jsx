import React from "react";
import Header_Component from "./Header_Component";
import About_Component from "./About_Component";
import Career_Component from "./Career_Component";
import Project_Component from "./Project_Component";
import Contact_Component from "./Contact_Component";

const Master_Component = ({ darkMode }) => {
  return (
    <div>
      <Header_Component darkMode={darkMode} />
      <About_Component darkMode={darkMode} />
      <Career_Component darkMode={darkMode} />
      <Project_Component darkMode={darkMode} />
      <Contact_Component darkMode={darkMode} />
    </div>
  );
};

export default Master_Component;
