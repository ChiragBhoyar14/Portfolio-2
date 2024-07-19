import React from "react";


const InProgressProject_Component = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-4">
            A selection of projects I have worked on.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 animate-pulse">
          <img
            src="/Images/InProgress.png"
            alt="Chirag Bhoyar"
            style={{
              maxWidth: "48%",
              height: "auto",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
              transform: "rotateY(10deg) rotateX(10deg)",
              transition: "transform 0.5s"
            }}
            className="hover:transform hover:rotate-0"
          />
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 text-center mt-6">
            Currently working on a project using Angular and .NET Core, aiming to complete it soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InProgressProject_Component;
