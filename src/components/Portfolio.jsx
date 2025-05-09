import React from "react";
import { ArrowUpRight } from "lucide-react";
import { video } from "framer-motion/client";

const portfolioItems = [
  {
    title: "Future Landing Page",
    category: "WEB DESIGN",
    video: "/portfoliio1.mp4",
  },
  {
    title: "AI Automation Dashboard",
    category: "UI UX",
    video: "/portfolio2.mp4",
  },
  {
    title: "Minimal Portfolio Showcase Application",
    category: "MOBILE APP",
    video: "/portfolio3.mp4",
  },
  {
    title: "Clean Show Business Card Mockup",
    category: "BRANDING",
    video: "/portfolio4.mp4",
  },
];

const Portfolio = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-28 py-16 bg-white" id="portfolio">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-6 mb-12">
        <div>
          <h5 className="uppercase text-xs tracking-widest text-gray-500 mb-2">
            Portfolio
          </h5>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
            The experiences are super <br />
            innovative and creative.
          </h2>
        </div>
        <a
          href="#"
          className="text-sm text-black font-medium flex items-center hover:underline"
        >
          View all Works <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
            {/* Media */}
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white 
              opacity-0 transition-all duration-500 z-10 group-hover:opacity-100">
              <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-200 mt-1">{item.category}</p>
            </div>

            {/* Bottom Text Info (Hide on Hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transition-all duration-500 group-hover:translate-y-full">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-base font-semibold text-black">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
