import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const services = [
    "Website Design & Development", "SEO", "Google Ads", "Meta Ads", "Video Editing",
    "Video Production", "Social Media Marketing", "Content Writing", "UI/UX Designing",
    "Influencer Marketing", "Graphic Designing", "Branding", "Packaging & Mockups",
    "E-Commerce", "Mobile App Development"
  ];

  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current || !listRef.current) return;

      const containerHeight = containerRef.current.offsetHeight;
      const itemHeight = 100; // same as defined below
      const totalHeight = listRef.current.scrollHeight;
      const currentTop = parseInt(getComputedStyle(listRef.current).transform.split(',')[5]) || 0;

      const newTop = currentTop - itemHeight;

      // Reset when it reaches the end
      if (Math.abs(newTop) >= totalHeight / 2) {
        listRef.current.style.transition = 'none';
        listRef.current.style.transform = `translateY(0px)`;
        setTimeout(() => {
          listRef.current.style.transition = 'transform 0.5s ease-in-out';
          listRef.current.style.transform = `translateY(-${itemHeight}px)`;
        }, 50);
      } else {
        listRef.current.style.transition = 'transform 0.5s ease-in-out';
        listRef.current.style.transform = `translateY(${newTop}px)`;
      }
    }, 1000); // Delay between scrolls

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] px-4 sm:px-8 md:px-12 lg:px-40 flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden" style={{
      backgroundImage: `url('/Colored Shapes.svg'), linear-gradient(to right, #f5edff, #fdf6ff, #fff8e7)`,
      backgroundBlendMode: "overlay",
    }}>
      {/* Background Grid */}
      {/* Background Grid */}
<div
  className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.78) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.79) 1px, transparent 1px)`,
    backgroundSize: "60px 60px",
  }}
/>

{/* Animated Dots */}
{/* <div className="absolute inset-0 z-[1] pointer-events-none">
  {[...Array(10)].map((_, i) => (
    <span
      key={i}
      className="absolute w-2 h-2 bg-[#7A61F8] rounded-full animate-pulseDot"
      style={{
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        animationDelay: `${i * 0.5}s`,
      }}
    />
  ))}
</div> */}


      {/* White Gradient from Bottom to Top */}
      <div className="absolute bottom-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to top, white, transparent)",
        }}
      />

      {/* Content */}
      <div className="max-w-4xl w-full text-center pt-15 z-[10] relative">
        <h1 className="text-[20px] lg:text-[30px] font-bold text-gray-900 leading-tight">
          Your <span className="text-[#7A61F8]">One-Stop</span> solution for
        </h1>

        {/* Smooth Sliding Services */}
        <div
          ref={containerRef}
          className="h-[100px] w-full overflow-hidden mt-4 relative text-[#7A61F8] text-[30px] lg:text-[50px] font-bold"
        >
          <div ref={listRef} className="flex flex-col items-center">
            {[...services, ...services].map((service, index) => (
              <span
                key={index}
                className="h-[100px] flex items-center justify-center w-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-md text-gray-700 max-w-2xl mx-auto">
          <strong className="text-gray-900">BigWeb</strong> specializes in crafting impactful digital Solutions for your brand.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#7763F8] to-[#1E9CF2] hover:bg-[#45378a] text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
