import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] text-black py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
  <img src="/bigweb.svg" alt="Logo" className="h-12 w-auto" />
  <h1 className="text-2xl font-bold">BigWeb</h1>
</div>


        {/* Pages */}
        <div className="grid grid-cols-2 gap-x-10 text-sm font-medium">
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-4">
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-600">US: +1 234 567 8900</p>
          </div>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-gray-800"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gray-800"><FaLinkedinIn size={18} /></a>
            <a href="#" className="hover:text-gray-800"><FaXTwitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BigWeb Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
