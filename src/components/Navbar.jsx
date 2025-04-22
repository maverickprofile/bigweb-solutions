import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverStyle({ top: y, left: x });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100); // Delay to wait for page load
    } else {
      scrollToSection(sectionId);
    }
    setMobileMenuOpen(false); // close mobile menu
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[#101010]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-1.5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={scrolled
              ? '/bygweb_black_text-removebg-preview (1) (1).png'
              : '/bygweb_white_text-removebg-preview (1) (1).png'}
            alt="Logo"
            className="h-16 w-auto transition-all duration-300 lg:pl-6"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Portfolio', 'Services'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`relative text-[17px] font-medium group transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#7A63F5] to-[#159BF0] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="relative px-5 py-2 border border-black bg-white text-black font-medium rounded-lg overflow-hidden group z-10"
              onMouseMove={handleMouseMove}
            >
              <span
                className="absolute w-60 h-60 bg-gradient-to-r from-[#7763F8] via-[#1E9CF2] to-[#7763F8] rounded-full z-0 transition-transform duration-500 scale-0 group-hover:scale-100"
                style={{
                  top: hoverStyle.top - 80,
                  left: hoverStyle.left - 80,
                  transformOrigin: 'center',
                  position: 'absolute',
                }}
              ></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 animate-fade-in-down">
          {['Home', 'About', 'Portfolio', 'Services'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="block text-gray-700 text-lg transition duration-300"
            >
              {item}
            </button>
          ))}
          <Link to="/contact">
            <button
              className="relative px-5 py-2 border border-black bg-white text-black font-medium rounded-lg overflow-hidden group z-10"
              onMouseMove={handleMouseMove}
            >
              <span
                className="absolute w-40 h-40 bg-gradient-to-r from-[#7763F8] via-[#1E9CF2] to-[#7763F8] rounded-full z-0 transition-transform duration-500 scale-0 group-hover:scale-100"
                style={{
                  top: hoverStyle.top - 80,
                  left: hoverStyle.left - 80,
                  transformOrigin: 'center',
                  position: 'absolute',
                }}
              ></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
