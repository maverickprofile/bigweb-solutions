import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const services = [
    "Website Design & Development", "SEO", "Google Ads", "Meta Ads", "Video Editing",
    "Video Production", "Social Media Marketing", "Content Writing", "UI/UX Designing",
    "Influencer Marketing", "Graphic Designing", "Branding", "Packaging & Mockups",
    "E-Commerce", "Mobile App Development"
  ];

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const itemRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.offsetHeight);
    }

    const interval = setInterval(() => {
      if (!listRef.current || !itemHeight) return;

      const currentTop = parseInt(listRef.current.style.transform?.split('(')[1]) || 0;
      const newTop = currentTop - itemHeight;
      const totalHeight = itemHeight * services.length;

      if (Math.abs(newTop) >= totalHeight) {
        listRef.current.style.transition = "none";
        listRef.current.style.transform = `translateY(0px)`;
        setTimeout(() => {
          listRef.current.style.transition = "transform 0.5s ease-in-out";
          listRef.current.style.transform = `translateY(-${itemHeight}px)`;
        }, 50);
      } else {
        listRef.current.style.transition = "transform 0.5s ease-in-out";
        listRef.current.style.transform = `translateY(${newTop}px)`;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [itemHeight]);

  return (
    <section
      className="relative min-h-screen px-4 sm:px-8 md:px-12 lg:px-40 flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/bg (1).png')`,
      }}
    >
      {/* 🌀 Animated Gradient Background Layer */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-[#7A63F5] via-[#159BF0] to-[#7763F8] opacity-20 blur-2xl" />

      {/* 🖤 Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-8 z-10"></div>

      {/* 🌟 Content */}
      <div className="max-w-4xl w-full text-center z-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[20px] lg:text-[30px] font-bold text-white leading-tight"
        >
          Your <span className="bg-gradient-to-r from-[#7A63F5] to-[#159BF0] inline-block text-transparent bg-clip-text">One-Stop</span> solution for
        </motion.h1>

        {/* 📜 Dynamic Scrolling Service List */}
        <div
  ref={containerRef}
  className="w-full overflow-hidden mt-4 relative text-[26px] sm:text-[28px] lg:text-[60px] font-bold leading-tight"
  style={{ height: itemHeight ? `${itemHeight}px` : 'auto' }}
>
  <div ref={listRef} className="flex flex-col items-center transition-transform duration-500 ease-in-out">
    {[...services, ...services].map((service, index) => (
      <span
        key={index}
        ref={index === 0 ? itemRef : null}
        className="flex items-center justify-center w-full bg-gradient-to-r from-[#7A63F5] to-[#159BF0] text-transparent bg-clip-text whitespace-nowrap py-2"
        style={{
          WebkitTextStroke: "0.3px rgba(255, 255, 255, 0.86)",
        }}
      >
        {service}
      </span>
    ))}
  </div>
</div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-md text-white max-w-2xl mx-auto"
        >
          <strong className="text-white">BigWeb</strong> specializes in crafting impactful digital Solutions for your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#7763F8] to-[#1E9CF2] hover:bg-black text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
       Scroll Down ↓ 
      </motion.div>

      {/* 🔥 Extra Gradient Animation Styles */}
      <style>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
