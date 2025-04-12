import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const services = [
    "Website Design",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Video Editing",
    "Video Production",
    "Social Media Marketing",
    "Content Writing",
    "UI/UX Designing",
    "Influencer Marketing",
    "Graphic Designing",
    "Branding",
    "Packaging & Mockups",
    "E-Commerce",
    "Mobile App Development",
    "Website Design",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Video Editing",
    "Video Production",
    "Social Media Marketing",
    "Content Writing",
    "UI/UX Designing",
    "Influencer Marketing",
    "Graphic Designing",
    "Branding",
    "Packaging & Mockups",
    "E-Commerce",
    "Mobile App Development",
    "Website Design",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Video Editing",
    "Video Production",
    "Social Media Marketing",
    "Content Writing",
    "UI/UX Designing",
    "Influencer Marketing",
    "Graphic Designing",
    "Branding",
    "Packaging & Mockups",
    "E-Commerce",
    "Mobile App Development",
    "Website Design",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Video Editing",
    "Video Production",
    "Social Media Marketing",
    "Content Writing",
    "UI/UX Designing",
    "Influencer Marketing",
    "Graphic Designing",
    "Branding",
    "Packaging & Mockups",
    "E-Commerce",
    "Mobile App Development",
    "Website Design",
    "Website Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Video Editing",
    "Video Production",
    "Social Media Marketing",
    "Content Writing",
    "UI/UX Designing",
    "Influencer Marketing",
    "Graphic Designing",
    "Branding",
    "Packaging & Mockups",
    "E-Commerce",
    "Mobile App Development",
  ];

  const [index, setIndex] = useState(0);
  const itemHeight = 60; // adjust based on font size and padding

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] px-4 sm:px-8 md:px-12 lg:px-40 pt-24 lg:pt-40 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.78) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.79) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* White Fade Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, white, transparent)" }}
      />

      {/* Split Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-bold text-gray-900 leading-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-[#7A63F5] to-[#159BF0] inline-block text-transparent bg-clip-text">
              One-Stop
            </span>{" "}
            solution for
          </h1>

          {/* Dynamic Scrolling Text */}
          <div
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
        className="h-[60px] flex items-center justify-center lg:justify-start whitespace-nowrap text-[22px] sm:text-[28px] lg:text-[40px] font-extrabold leading-none px-2 bg-gradient-to-r from-[#7A63F5] to-[#159BF0] text-transparent bg-clip-text"
        style={{ height: `${itemHeight}px` }}
      >
        {service}
      </div>
    ))}
  </div>
</div>


          <p className="mt-6 text-md sm:text-lg text-gray-700 max-w-xl">
            <strong className="text-gray-900">BigWeb</strong> specializes in
            crafting impactful digital Solutions for your brand.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#7763F8] to-[#1E9CF2] hover:bg-black text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center order-first lg:order-none">
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-[#7A63F5] to-[#159BF0] blur-3xl opacity-40 z-0" />
          <img
            src="/ChatGPT_Image_Apr_12__2025__04_53_56_PM-removebg-preview (1).png"
            alt="Hero Visual"
            className="relative z-10 w-[260px] sm:w-[320px] md:w-[400px] lg:w-[500px] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
