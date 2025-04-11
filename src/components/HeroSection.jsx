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
      const itemHeight = 100;
      const totalHeight = listRef.current.scrollHeight;
      const currentTop = parseInt(getComputedStyle(listRef.current).transform.split(',')[5]) || 0;

      const newTop = currentTop - itemHeight;

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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] px-4 sm:px-8 md:px-12 lg:px-40 flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden"
      style={{
        backgroundImage: `url('/Colored Shapes.svg'), linear-gradient(to right, #f5edff, #fdf6ff, #fff8e7)`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Floating Images */}
      {/* <img
        src="/3d-team-work-concept-background_23-2151527886-removebg-preview (1).png"
        alt="Decor Left"
        className="absolute left-0 top-1/4 w-20 sm:w-28 z-[2] animate-float"
      />
      <img
        src="/3d-team-work-concept-background_23-2151527886-removebg-preview (1).png"
        alt="Decor Right"
        className="absolute right-0 top-1/3 w-20 sm:w-28 z-[2] animate-float-delay"
      /> */}

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

      {/* White Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, white, transparent)" }}
      />

      {/* Content */}
      <div className="max-w-4xl w-full text-center pt-15 z-[10] relative">
        <h1 className="text-[20px] lg:text-[30px] font-bold text-gray-900 leading-tight">
          Your <span className="bg-gradient-to-r from-[#7A63F5] to-[#159BF0] inline-block text-transparent bg-clip-text">One-Stop</span> solution for
        </h1>

        {/* Smooth Sliding Services */}
        <div
          ref={containerRef}
          className="h-[100px] w-full overflow-hidden mt-4 relative text-[30px] lg:text-[50px] font-bold"
        >
          <div ref={listRef} className="flex flex-col items-center">
            {[...services, ...services].map((service, index) => (
              <span
                key={index}
                className="h-[100px] flex items-center justify-center w-full bg-gradient-to-r from-[#7A63F5] to-[#159BF0] inline-block text-transparent bg-clip-text "
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
            <button className="bg-gradient-to-r from-[#7763F8] to-[#1E9CF2] hover:bg-black text-white flex items-center px-6 py-3 rounded-xl text-lg transition font-medium shadow-md">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Gradient SVG Wave */}
      {/* SVG Section */}
      <div className="contact-svg-wrapper absolute left-0 bottom-0 w-full z-2">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#F78DA7" />
              <stop offset="95%" stopColor="#8ED1FC" />
            </linearGradient>
          </defs>
          <style>
            {`
            .path-0 {
              animation: pathAnim-0 4s linear infinite;
            }

            @keyframes pathAnim-0 {
              0% {
                d: path("M 0,600 L 0,150 C 86.38,133.06 172.76,116.12 239,133 C 305.23,149.87 351.31,200.57 410,217 C 468.68,233.42 539.98,215.56 611,175 C 682.01,134.43 752.74,71.16 828,82 C 903.25,92.83 983.02,177.76 1044,192 C 1104.97,206.23 1147.13,149.78 1210,131 C 1272.86,112.21 1356.43,131.10 1440,150 L 1440,600 L 0,600 Z");
              }
              25% {
                d: path("M 0,600 L 0,150 C 64.27,194.87 128.55,239.75 205,217 C 281.44,194.24 370.06,103.86 436,108 C 501.93,112.13 545.18,210.77 599,210 C 652.81,209.22 717.20,109.02 795,102 C 872.79,94.97 963.98,181.10 1043,201 C 1122.01,220.89 1188.86,174.54 1253,155 C 1317.13,135.45 1378.56,142.72 1440,150 L 1440,600 L 0,600 Z");
              }
              50% {
                d: path("M 0,600 L 0,150 C 75.86,154.45 151.73,158.91 227,144 C 302.26,129.08 376.94,94.78 440,90 C 503.05,85.21 554.49,109.95 625,142 C 695.50,174.04 785.06,213.41 854,214 C 922.93,214.58 971.25,176.38 1032,159 C 1092.74,141.61 1165.92,145.03 1236,147 C 1306.07,148.96 1373.03,149.48 1440,150 L 1440,600 L 0,600 Z");
              }
              75% {
                d: path("M 0,600 L 0,150 C 50.82,152.81 101.65,155.63 182,157 C 262.34,158.36 372.19,158.27 434,171 C 495.80,183.72 509.57,209.25 578,216 C 646.42,222.74 769.49,210.69 852,186 C 934.50,161.30 976.44,123.96 1031,123 C 1085.55,122.03 1152.73,157.43 1223,168 C 1293.26,178.56 1366.63,164.28 1440,150 L 1440,600 L 0,600 Z");
              }
              100% {
                d: path("M 0,600 L 0,150 C 86.38,133.06 172.76,116.12 239,133 C 305.23,149.87 351.31,200.57 410,217 C 468.68,233.42 539.98,215.56 611,175 C 682.01,134.43 752.74,71.16 828,82 C 903.25,92.83 983.02,177.76 1044,192 C 1104.97,206.23 1147.13,149.78 1210,131 C 1272.86,112.21 1356.43,131.10 1440,150 L 1440,600 L 0,600 Z");
              }
            }
            `}
          </style>
          <path
            d="M 0,600 L 0,150 C 86.38,133.06 172.76,116.12 239,133 C 305.23,149.87 351.31,200.57 410,217 C 468.68,233.42 539.98,215.56 611,175 C 682.01,134.43 752.74,71.16 828,82 C 903.25,92.83 983.02,177.76 1044,192 C 1104.97,206.23 1147.13,149.78 1210,131 C 1272.86,112.21 1356.43,131.10 1440,150 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="path-0"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
