import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import WhatWeDo from './components/WhatWeDo';
import Brands from './components/Brands';
import BookSection from './components/BookSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Expertise from './components/Expertise';
import Contact from './pages/Contact'; // Contact page

// Removed CustomCursor import and component
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Brands />
      <AboutUs />
      <Portfolio />
      <WhatWeDo />
      <Testimonials />
      <BookSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
