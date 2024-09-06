import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import footerImage from './Images/footer.jpg'; // Make sure the path is correct

function Footer() {
  return (
    <footer
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="container mx-auto px-4 text-black">
        {/* Call to Action */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready for a home makeover?</h2>
          <p className="mb-4">Reach out to us today!</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-l-lg border-none focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-black rounded-r-lg">
              Search
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" aria-label="Twitter" className="text-black hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Facebook" className="text-black hover:text-blue-600">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-black hover:text-blue-700">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-black hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Bottom Navbar */}
        <div className="border-t border-white pt-4 text-center text-blue">
          <p>&copy; {new Date().getFullYear()} Vaibhav Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
