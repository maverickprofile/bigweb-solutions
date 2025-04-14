import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <footer className="bg-[#f8f8f8] text-black py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src="/bigweb_updated_logo__1_-removebg-preview (1).png"
              alt="Logo"
              className="h-25 w-auto"
            />
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

        {/* Expandable Section Below Footer */}
      <div className="bg-[#f8f8f8] text-black px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Best Marketing Agency for global digital needs: Your One-Stop Solution for Digital Excellence
        </h2>

        <p className="text-sm text-gray-800">
        In today’s hyper-connected world, building a powerful digital presence isn’t just important—it’s essential. Whether you're launching a new startup or scaling an established brand, your online identity speaks volumes. At BigWeb, we craft tailor-made digital experiences—from stunning websites and high-performing mobile apps to targeted Google & Meta ads, strategic SEO, and social media marketing. As one of India’s leading full-service digital partners, we turn your vision into measurable results.
          {showMore && (
            <>
              {" "}From Shopify website development to mobile app creation, social media marketing, and graphic design, our services are designed to elevate your brand and deliver measurable results.
              <br /><br />
              <span className="font-semibold">Your All-in-One Digital Growth Partner</span><br />
From captivating website design and development to content creation, branding, video production, and ad campaign management, our team offers end-to-end solutions that drive growth. We’re trusted by 10,000+ businesses to help them stand out and scale fast in a competitive marketplace. Let’s take your brand to the next level.
            </>
          )}
        </p>


        



        <button
          className="mt-4 text-sm font-semibold text-blue-600 hover:underline focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BigWeb Solutions. All rights reserved.
        </div>
      </footer>

      
    </>
  );
};

export default Footer;
