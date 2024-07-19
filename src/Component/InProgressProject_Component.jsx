import React from "react";

const InProgressProject_Component = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            My Projects
          </h2>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="relative group">
            <img
              src="/Images/InProgress.png"
              alt="Chirag Bhoyar"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg transform transition duration-400 group-hover:scale-105"
              style={{ maxHeight: '300px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition duration-500 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-white text-xl lg:text-2xl font-bold">
              In Progress...
            </div>
          </div>
          <p className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 text-center mt-6">
            Currently working on a project using Angular and .NET Core, aiming to complete it soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InProgressProject_Component;
