import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const services = [
    "Web Design",
    "Digital Marketing",
    "SEO Marketing",
    "Content Creation",
    "Branding",
    "Packaging",
    "Mockups",
    "Shopify",
    "App development",
    "Video Editing",
    "Graphic Designing",
    "Social Media Handling",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2500); // Adjust delay (in milliseconds) between transitions
    return () => clearInterval(interval);
  }, [services.length]);

  const scrollStyle = {
    transform: `translateY(-${currentIndex * 100}px)`,
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] px-4 sm:px-8 md:px-12 lg:px-40 flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">
      {/* Background Grid Squares */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.71) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.71) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* White Gradient from Bottom to Top */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to top, white, transparent)",
        }}
      />

      {/* Content Section */}
      <div className="max-w-4xl w-full text-center pt-15 z-[10] relative">
        {/* Headline */}
        <h1 className="text-[20px] lg:text-[30px] font-bold text-gray-900 leading-tight">
          Your <span className="text-[#7A61F8]">One-Stop</span> Hub for
        </h1>

        {/* Scrolling Services */}
        <div className="h-[100px] w-full overflow-hidden mt-4 relative text-[#7A61F8] text-[30px] lg:text-[80px] font-bold">
          <div
            className="flex flex-col items-center transition-all duration-700 ease-in-out"
            style={scrollStyle}
          >
            {services.map((service, index) => (
              <span
                key={index}
                className="h-[100px] flex items-center justify-center"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Paragraph */}
        <p className="mt-6 text-md text-gray-700 max-w-2xl mx-auto">
          <strong className="text-gray-900">BigWeb Solutions</strong>{" "}
          specializes in crafting impactful UI/UX designs, branding, and
          digital experiences tailored to connect with your audience.
        </p>

        {/* Buttons + Clients */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-[#7A61F8] hover:bg-[#45378a] text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md">
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </button>
{/* 
          <div className="bg-white rounded-[10px] px-4 py-2 flex items-center space-x-3 w-fit shadow-sm">
            <span className="text-gray-900 font-semibold text-sm">
              10k+ Client
            </span>
            <div className="flex items-center -space-x-2">
              {[1, 2, 3].map((id) => (
                <img
                  key={id}
                  src="/clientimg.jpg"
                  alt={`Client ${id}`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
