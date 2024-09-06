import React, { useState } from "react";
import logo from "./Images/valo.jpg"; 
import background from "./Images/Home.webp"; 
import { FiPhone, FiMapPin, FiUser, FiMenu, FiX } from "react-icons/fi";
import {ReactTyped} from 'react-typed';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${background})` }} // Background image
    >
      {/* Navbar */}
      <nav className="mt-5 flex flex-col md:flex-row justify-between items-center p-5 bg-black bg-opacity-60 text-white rounded-[50px] shadow-lg fixed top-0 left-0 right-0 w-full max-w-5xl mx-auto z-50">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10 text-white" />
          <h1 className="text-xl text-white font-bold">My Website</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:space-x-8 md:mt-0 mt-5 flex-col md:flex-row ${isMenuOpen ? "block" : "hidden"}`}
        >
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div>
          <a
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Content below the navbar */}
      <div className="flex flex-col text-white text-5xl h-screen justify-center items-center text-center">
      Welcome to <h2 className="text-amber-600 text-4xl font-bold mb-4">
         <ReactTyped
            strings={[
              "Vaibhav Construction",
              "Best Construction",
              "My Website"
              
            ]}
            typeSpeed={50}
            backSpeed={25}
            backDelay={1000}
            loop
          />
        </h2>
        <p className="text-white text-3xl font-semibold my-5 mx-5 md:mx-20">
          Discover exceptional home renovation services that blend elegance with functionality. Our dedicated team is here to turn your vision into reality, providing top-notch craftsmanship for a living space you’ll love.
        </p>
      </div>

       {/* Footer Content */}
       <div className="absolute bottom-0 left-0 right-0 p-5 bg-black bg-opacity-60 text-white flex justify-between items-center">
       {/* Built By Section */}
       <p className="text-sm flex-1 text-center flex items-center justify-center">
         <FiUser className="mr-2" /> {/* Built by icon */}
         Built by <span className="font-bold ml-1">Vaibhav Tukaram Gitte</span>
       </p>
       |
       <div className="flex-1 flex justify-evenly">
         {/* Call Section */}
         <div className="flex items-center space-x-2">
           <FiPhone />
           <span>Call: 9130706947</span>
         </div>
         |
         {/* Location Section */}
         <div className="flex items-center space-x-2">
           <FiMapPin />
           <span>Location: Pune, Maharashtra</span>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
