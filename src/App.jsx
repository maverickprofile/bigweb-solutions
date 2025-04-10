import React from 'react';
import CustomeCursor from './components/CustomCursor';
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
import { Book } from 'lucide-react';



function App() {
  return (
    <>
      <CustomeCursor />
      <Navbar />
      <HeroSection />
      <Brands />
      <AboutUs />
      <Portfolio />
      <WhatWeDo />
      <Testimonials />
      <BookSection />
      <Footer />
      {/* Add more sections here */}
    </>
  );
}

export default App;
