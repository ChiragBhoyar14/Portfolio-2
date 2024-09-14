// src/components/MyProjects_Component.jsx

import React from "react";

const projects = [
  {
    title: "Blood Doner API's",
    description: "The BloodBank API is a .NET-based application designed to manage blood donor information. It provides functionality for user registration, login, searching available blood donors, and more. The API uses JWT (JSON Web Tokens) for secure authentication and supports various operations related to blood donation.",
    image: "./Images/ApiImage.png",
    link: "https://github.com/ChiragBhoyar14/BloodBankAPI"
  },
  {
    title: "Personsl Portfolio",
    description: "I am currently developing my personal portfolio to showcase my skills as a junior full stack .NET developer. This project highlights my expertise in creating dynamic and responsive web applications, utilizing the latest technologies for an optimal user experience.",
    image: "./Images/Portfolio.png",
    link: "https://github.com/ChiragBhoyar14/Portfolio-2"
  },
  {
    title: "Blood Doner UI",
    description: "BloodDoner is an ASP.NET Core MVC web application that allows users to register as blood donors, log in, and view available donors. The application integrates with external APIs to manage and retrieve donor information. It utilizes JWT for authentication and session management.",
    image: "./Images/BloodDonationUI.jpg",
    link: "https://github.com/ChiragBhoyar14/BloodDonerUI"
  }
];

const MyProjects_Component = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            A selection of projects I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects_Component;
