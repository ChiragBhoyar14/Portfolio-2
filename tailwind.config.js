/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx', // Define the paths to all of the template files in your project
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {}, // You can extend the default theme here
  },
  plugins: [
    require('flowbite/plugin'), // Example of a Tailwind CSS plugin
  ],
};
