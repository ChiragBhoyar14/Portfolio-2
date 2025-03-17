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
                  <li><strong>Proficient in:</strong> .NET, C#, ASP.NET Core</li>
                  <li><strong>Experience with:</strong> JavaScript, HTML, and Tailwind CSS</li>
                  <li><strong>Strong understanding of:</strong> software architecture and design patterns</li>
                  <li><strong>Good knowledge of:</strong> SQL, Web API, and Windows Services</li>
                  <li><strong>Familiar with:</strong> MVC, Web API Core, Worker Services, React (Basics), Entity Framework</li>
                  <li><strong>Knowledge of:</strong> Agile methodologies and tools like Git</li>
                  <li><strong>Languages:</strong> C#, SQL, Python (Basics), JavaScript</li>
                  <li><strong>Frameworks:</strong> ASP.NET, ASP.NET MVC, ASP.NET Core, ASP.NET Core MVC, ASP.NET Core Web API, Entity Framework</li>
                  <li><strong>Technologies:</strong> React.js (Basics), ASP.NET Web API, Windows Services, Unit Testing in .NET</li>
                  <li><strong>Cloud & DevOps:</strong> Azure Data Factory, Azure DevOps, Azure Linked Services</li>
                  <li><strong>Big Data & Databases:</strong> Databricks, Databricks SQL</li>
                  <li><strong>Tools:</strong> Visual Studio, SQL Server Management Studio (SSMS), Postman, Git, Azure Portal, NUnit</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-blue-600 dark:text-blue-400" />
                Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                  <strong>.NET Core MVC Developer with 1+ Year of Experience</strong>
                  Highly skilled .NET Core MVC Developer with over a year of experience in designing, developing, and optimizing web applications. Proficient in ASP.NET Core MVC, ADO.NET, SQL Server, and Windows Services, with a strong focus on performance, scalability, and security. Adept at integrating APIs, implementing authentication mechanisms (JWT, cookies), and enhancing system efficiency using caching techniques like Microsoft.Cache and Lazy.Cache.Proven ability to lead development teams, troubleshoot complex issues, and ensure timely delivery of high-quality software solutions. Passionate about continuous learning, currently expanding expertise in Python and Data Engineering. Seeking opportunities to apply technical proficiency in a challenging and growth-oriented environment.
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
                 Enthusiastic about contributing to open-source projects and continuously exploring emerging technologies. Passionate about Web API development, backend optimization, and integrating scalable solutions to enhance application performance.            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Component;
