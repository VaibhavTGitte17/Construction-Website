import React from "react";
import { FaArrowRight } from "react-icons/fa"; 
import mark1 from "./Images/make1.avif"; 
import mark2 from "./Images/make2.webp"; 
import mark3 from "./Images/make3.avif"; 
import mark4 from "./Images/Bathroom.avif"; 
import mark5 from "./Images/Home.avif"; 
import mark6 from "./Images/make6.avif"; 
import house from "./Images/house1.avif";

function Services() {
  return (
    <div className="py-20 px-10 lg:px-20">
      <h1 className="text-4xl text-center mb-10">Our Services</h1>
      <p className="text-center mb-4">
        We provide top-notch services for your home remodeling needs. Whether
        you’re looking to renovate your living space, add new rooms, or
        completely revamp your bathroom, we’ve got you covered.
      </p>
      <p className="text-center mb-10">
        Our experienced professionals ensure that each project is executed with
        precision and care. Explore the variety of services we offer and start
        your home transformation journey with us today.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Service Block 1 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <img
            src={mark1}
            alt="Service 1"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:mr-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Living Room Remodeling</h1>
            <p className="text-lg mb-4">
              We provide living room renovation services that enhance the
              comfort and style of your home. Our expert team ensures
              high-quality craftsmanship and attention to detail in every
              project.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Service Block 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
          <img
            src={mark2}
            alt="Service 2"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:ml-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Outdoor Room Remodeling</h1>
            <p className="text-lg mb-4">
              Upgrade your outdoor living space with our remodeling services,
              perfect for creating the ultimate area for relaxation or
              entertainment.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Service Block 3 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <img
            src={mark3}
            alt="Service 3"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:mr-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Room Additions</h1>
            <p className="text-lg mb-4">
              We specialize in adding new rooms to your home, increasing space
              and functionality while maintaining aesthetic appeal.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Service Block 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
          <img
            src={mark4}
            alt="Service 4"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:ml-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Bathroom Remodeling</h1>
            <p className="text-lg mb-4">
              Transform your bathroom into a modern, functional space with our
              expert remodeling services, tailored to meet your specific needs.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Service Block 5 */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <img
            src={mark5}
            alt="Service 5"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:mr-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Custom Built Homes</h1>
            <p className="text-lg mb-4">
              Create your dream home with our custom-built home services,
              ensuring every detail is crafted to your exact specifications.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Service Block 6 */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
          <img
            src={mark6}
            alt="Service 6"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-md lg:ml-6 mb-6 lg:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Demo Home Image</h1>
            <p className="text-lg mb-4">
              Experience the quality of our services with a demo home that
              showcases our attention to detail and exceptional craftsmanship.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Read More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Additional Block for House Image */}
      <div className="relative text-center">
        <img
          src={house}
          alt="House"
          className="w-full h-[300px] object-cover mx-auto" // Ensures full width and reduces height
        />
        <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50">
          We assist in all small projects and provide exceptional services to
          meet your needs.
        </p>
      </div>
    </div>
  );
}

export default Services;
