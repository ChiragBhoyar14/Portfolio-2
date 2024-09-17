import React from "react";
import { FaBriefcase, FaCalendarAlt, FaGraduationCap, FaBasketballBall } from "react-icons/fa";

const Career_Component = () => {
  // Professional experiences
  const experiences = [
    {
      title: "Junior .NET Developer",
      company: "Revalsys Technology",
      period: "Sep 2023 - Present",
      description: `
         Developing scalable web applications using ASP.NET and .NET Core.
         Working on RESTful APIs to enhance application interconnectivity.
         Implementing and managing Windows Services for various applications.
         Utilizing ADO.NET for efficient database interactions.
         Engaging with SQL Server for database management and query optimization.
         Developing and consuming WCF (Windows Communication Foundation) services.
      `,
      icon: <FaBriefcase className="text-blue-600 dark:text-blue-400" />,
    },
  
  
    {
      title: "Completed .NET Full Stack Training",
      company: "Sathya Technology, Hyderabad",
      period: "2023",
      description: `
         Completed comprehensive .NET Full Stack training.
         Acquired proficiency in C#, JavaScript, and SQL Server.
         Gained expertise in CSS for styling and design.
         Mastered .NET Framework and .NET Core for robust application development.
      `,
      icon: <FaGraduationCap className="text-green-600 dark:text-green-400" />,
    },
  ];

  // Education details
  const education = [
    {
      title: "Bachelor of Science (B.Sc.)",
      institution: "ANC College, Warora, Maharashtra",
      period: "2019 - 2022",
      description: `
         Graduated with a focus on Chemistry, Zoology, and Biology.
         Developed strong analytical and problem-solving skills.
         Gained a robust understanding of scientific principles and methodologies.
      `,
      icon: <FaGraduationCap className="text-green-600 dark:text-green-400" />,
    },,
    {
      title: "Higher Secondary (12th Grade)",
      institution: "ANC College, Warora, Maharashtra",
      period: "2017 - 2019",
      description: `
       Completed 12th grade with a focus on Biology, Zoology, Physics, and Chemistry.
       Developed a foundational understanding of biological sciences and physical principles.
      `,
      icon: <FaGraduationCap className="text-green-600 dark:text-green-400" />,
    },
    {
      title: "Secondary (10th Grade)",
      institution: "Lokmany Vidhalaya",
      period: "2019-2022",
      description: "Completed 10th grade with distinction.",
      icon: <FaGraduationCap className="text-green-600 dark:text-green-400" />,
    },
    
  ];

  // Basketball details
  const basketballExperience = {
    title: "Basketball Player",
    company: "Gondwana University",
    period: "2015 - 2017",
    description: "Represented the university in various intercollegiate basketball tournaments, contributing to two championship victories. Demonstrated teamwork, leadership, and strategic thinking on the court.",
    icon: <FaBasketballBall className="text-orange-600 dark:text-orange-400" />,
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 lg:py-32 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-colors duration-500">
          My Career & Education
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Professional Experiences */}
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div className="p-6 w-full">
                <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                  {experience.icon}
                  <FaCalendarAlt className="ml-2 text-gray-500 dark:text-gray-400" />
                  <span className="ml-2">{experience.period}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4"> {experience.description.split('\n').map((item, i) => (
                  <React.Fragment key={i}>
                    {item.trim() && <li className="mb-2">{item.trim()}</li>}
                  </React.Fragment>
                ))}</p>
                <p className="text-gray-500 dark:text-gray-400 italic">{experience.company}</p>
              </div>
            </div>
          ))}
          {/* Education Sections */}
          {education.map((edu, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div className="p-6 w-full">
                <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                  {edu.icon}
                  <FaCalendarAlt className="ml-2 text-gray-500 dark:text-gray-400" />
                  <span className="ml-2">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.title}
                </h3>
                <ul className="text-md font-light text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2">
                {edu.description.trim().split('\n').map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
                <p className="text-gray-500 dark:text-gray-400 italic">{edu.institution}</p>
              </div>
            </div>
          ))}
          {/* Basketball Experience */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="p-6 w-full">
              <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                {basketballExperience.icon}
                <FaCalendarAlt className="ml-2 text-gray-500 dark:text-gray-400" />
                <span className="ml-2">{basketballExperience.period}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {basketballExperience.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{basketballExperience.description}</p>
              <p className="text-gray-500 dark:text-gray-400 italic">{basketballExperience.company}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career_Component;
