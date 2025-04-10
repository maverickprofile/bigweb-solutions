import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverStyle({ top: y, left: x });
  };

  return (
    <header className="bg-[#101010] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/fav icon.svg" alt="Logo" className="h-15 w-auto" />
          <span className="text-xl font-bold text-[20px] text-white">BigWeb</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Portfolio'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-white text-[20px] group transition ${
                item === 'Home' ? 'text-[#7A61F8] font-medium' : ''
              }`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7A61F8] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setServiceDropdown(!serviceDropdown)}
              className="flex items-center text-white text-[20px] hover:text-[#7A61F8] transition"
            >
              Service
              <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            {serviceDropdown && (
              <div className="absolute top-8 left-0 w-48 bg-white border rounded-md p-2 z-20 shadow-lg animate-fade-in-up">
                {['Website Design', 'SEO', 'Google Ads', 'Branding', 'Packaging', 'Mockups'].map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block px-3 py-1 text-sm text-gray-700 hover:bg-purple-100 rounded transition"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <button
            className="relative px-5 py-2 border border-black bg-white text-black font-medium rounded-lg overflow-hidden group z-10"
            onMouseMove={handleMouseMove}
          >
            <span
              className="absolute w-60 h-60 bg-[#7B61FF] rounded-full z-0 transition-transform duration-500 scale-0 group-hover:scale-100"
              style={{
                top: hoverStyle.top - 80,
                left: hoverStyle.left - 80,
                transformOrigin: 'center',
                position: 'absolute',
              }}
            ></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 " />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 animate-fade-in-down">
          {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-[#7A61F8] transition duration-300"
            >
              {item}
            </a>
          ))}

          {/* Services Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setServiceDropdown(!serviceDropdown)}
              className="flex items-center text-gray-700 hover:text-purple-600"
            >
              Service
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {serviceDropdown && (
              <div className="pl-4 mt-2 space-y-1">
                {['Website Design', 'SEO', 'Google Ads', 'Branding', 'Packaging', 'Mockups'].map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block text-sm text-gray-700 hover:text-purple-600 transition"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact Us Button (Mobile) */}
          <button
            className="relative px-5 py-2 border border-black bg-white text-black font-medium rounded-lg overflow-hidden group z-10"
            onMouseMove={handleMouseMove}
          >
            <span
              className="absolute w-40 h-40 bg-[#7B61FF] rounded-full z-0 transition-transform duration-500 scale-0 group-hover:scale-100"
              style={{
                top: hoverStyle.top - 80,
                left: hoverStyle.left - 80,
                transformOrigin: 'center',
                position: 'absolute',
              }}
            ></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
