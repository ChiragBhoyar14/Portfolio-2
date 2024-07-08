// src/components/MyProjects_Component.jsx

import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One. It's a web application that does amazing things.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/project-one"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two. It's a mobile app that simplifies tasks.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/project-two"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three. An innovative project that solves real-world problems.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/project-three"
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
