import React from "react";
import { FaCode, FaTools, FaGraduationCap, FaBriefcase, FaLightbulb } from "react-icons/fa";

const About_Component = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 lg:py-32 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-colors duration-500">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Card */}
          <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <img
              src="/Images/Chirag.jpg"
              alt="Chirag Bhoyar"
              className="w-full h-auto rounded-lg mb-6 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Chirag Bhoyar
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Passionate .NET Software Developer with experience in crafting scalable solutions and a knack for problem-solving.
            </p>
            <a
              href="./Images/Chirag Resume.pdf" 
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700"
              download
            >
              Download CV
            </a>
          </div>
          
          {/* Information Sections */}
          <div className="lg:w-2/3 space-y-8">
            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaCode className="text-blue-600 dark:text-blue-400" />
                Skills
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Proficient in .NET, C#, ASP.NET Core</li>
                <li>Experience with JavaScript, HTML, and Tailwind CSS</li>
                <li>Strong understanding of software architecture and design patterns</li>
                <li>Good knowledge of SQL, Web API, and Windows Services</li>
                <li>Familiar with MVC, Web API Core, Worker Services, React, Entity FrameWork.</li>
                <li>Knowledge of Agile methodologies and tools like Git</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-blue-600 dark:text-blue-400" />
                Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Over a year of experience in developing robust web applications and providing comprehensive project support. Demonstrated ability to lead development teams effectively, ensuring the delivery of high-quality software solutions within deadlines. Skilled in leveraging modern web technologies to solve complex problems and enhance user experiences.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Completed Bachelor's Degree in Science from Gondwana University, specializing in Chemistry, Zoology, and Biology.
              </p>
            </div>

            {/* Projects & Interests Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaLightbulb className="text-blue-600 dark:text-blue-400" />
                Projects & Interests
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enthusiastic about contributing to open-source projects and constantly exploring new technologies. Interests include Web API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Component;
