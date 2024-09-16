import React, { useState } from "react";
import { FaMobileAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { TailSpin } from 'react-loader-spinner'; // Using TailSpin loader

const Contact_Component = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // State to manage sending status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Start the sending animation

    emailjs
      .send(
        "service_gqovrqf",
        "template_nv73ijl",
        formData,
        "O0K7fwhegnnIeiKhJ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          setIsSending(false); // Stop the sending animation
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });

          // Hide success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setIsSending(false); // Stop the sending animation
        }
      );
  };

  const contactDetails = {
    address: "SR Nagar, Hyderabad",
    phone: "9834194933",
    whatsapp: "9834194933",
    linkedin: "https://www.linkedin.com/in/chirag-bhoyar-725747286/",
    email: "chiragbhoyar@gmail.com",
    instagram: "https://www.instagram.com/chirag.bhoyar14?igsh=MW96azRncHh5dHh5aQ=="
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Quote Section */}
          <div className="bg-blue-600 dark:bg-blue-800 text-white py-6 px-8">
            <div className="text-center">
              <p className="text-lg lg:text-xl font-bold">
                Give me one opportunity, and I’ll prove that I can exceed your expectations.
              </p>
            </div>
          </div>

          {/* Contact Details and Form */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Phone */}
              <a href={`tel:${contactDetails.phone}`} className="flex items-center">
                <FaMobileAlt className="text-red-500 text-xl" />
                <p className="ml-2 dark:text-white">{contactDetails.phone}</p>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaWhatsapp className="text-green-500 text-xl" />
                <p className="ml-2 dark:text-white">{contactDetails.whatsapp}</p>
              </a>

              {/* LinkedIn */}
              <div className="flex items-center">
                <FaLinkedin className="text-blue-500 text-xl" />
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:underline dark:text-white"
                >
                  LinkedIn
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="ml-2 hover:underline dark:text-white"
                >
                  {contactDetails.email}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center">
                <FaInstagram className="text-purple-500 text-xl" />
                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:underline dark:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Subject Input */}
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Message Input */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Loading Spinner */}
            {isSending && (
              <div className="flex justify-center items-center mt-6">
                <TailSpin color="#007BFF" height={40} width={40} />
                <p className="text-gray-500 dark:text-gray-300 ml-4">Sending your message...</p>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted && !isSending && (
              <p className="text-center mt-4 text-green-600 dark:text-green-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Component;
