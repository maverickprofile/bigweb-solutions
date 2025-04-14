import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HeroSection = () => {
  const services = [
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    // Repeat for looping animation
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
    "Website Design", "Website Development", "SEO", "Google Ads", "Meta Ads",
    "Video Editing", "Video Production", "Social Media Marketing",
    "Content Writing", "UI/UX Designing", "Influencer Marketing",
    "Graphic Designing", "Branding", "Packaging & Mockups", "E-Commerce",
    "Mobile App Development",
  ];
  const [index, setIndex] = useState(0);
  const itemHeight = 110;

  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  const avatarsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    gsap.fromTo(headingRef.current, 
      { opacity: 0, scale: 0.9, y: 30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(servicesRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, delay: 0.4, ease: "power2.out" }
    );

    gsap.fromTo(avatarsRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, delay: 0.6, ease: "back.out(1.7)" }
    );

    gsap.fromTo(buttonRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-0 py-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/Untitled design (15) (1).png')" }}
    >
      <div className="mt-20 relative z-10 w-full max-w-[100vw] flex flex-col items-center px-4">
        
        {/* Partner Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <p className="text-sm sm:text-base font-semibold text-gray-800 flex items-center gap-1">
            Your #1 Growth Partner
          </p>
          <div className="flex items-center justify-center mt-3 -space-x-3">
            {[
              "/ben-sweet-2LowviVHZ-E-unsplash.jpg",
              "/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
              "/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
              "/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
              "/aiony-haust-3TLl_97HNJo-unsplash.jpg",
              "/kimson-doan-HD8KlyWRYYM-unsplash.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="client"
                ref={(el) => (avatarsRef.current[idx] = el)}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Trusted by <strong>300+</strong> Businesses
          </p>
        </div>

        {/* Heading */}
        <h1 ref={headingRef} className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[30px] font-bold text-gray-900 leading-tight text-center">
          Your <span className="bg-gradient-to-r from-[#7A63F5] to-[#159BF0] text-transparent bg-clip-text">One-Stop</span> solution for
        </h1>

        {/* Scrolling Services */}
        <div
          ref={servicesRef}
          className="w-full mt-4 overflow-hidden relative"
          style={{ height: `${itemHeight}px` }}
        >
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${index * itemHeight}px)` }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="h-[60px] flex items-center justify-center whitespace-nowrap text-[28px] sm:text-[30px] lg:text-[70px] font-extrabold bg-gradient-to-r from-[#7A63F5] to-[#159BF0] text-transparent bg-clip-text w-full"
                style={{ height: `${itemHeight}px` }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-md sm:text-lg text-gray-700 text-center w-full max-w-4xl px-4">
          <strong className="text-gray-900">BigWeb</strong> specializes in crafting impactful digital Solutions for your brand.
        </p>

        {/* CTA Button */}
        <div ref={buttonRef} className="mt-6">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#7763F8] to-[#1E9CF2] hover:bg-black text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
