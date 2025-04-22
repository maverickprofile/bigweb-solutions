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
import Contact from './pages/Contact';

// ✅ New Import: Web Design & Development page
import WebDesignAndDevelopment from './pages/services/WebDesign-and-Development.jsx';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Brands /> */}
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

        {/* ✅ New Route for Web Design & Development Page */}
        <Route
          path="/services/web-design-and-development"
          element={
            <>
              <Navbar />
              <WebDesignAndDevelopment />
              <BookSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
