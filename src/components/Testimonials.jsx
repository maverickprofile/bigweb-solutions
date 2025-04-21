import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "BygWeb transformed our online presence — from a stunning website to SEO that actually ranks. We’ve seen a 3x jump in leads in just two months!",
    name: "Aman S.",
    business: "Startup Founder",
  },
  {
    quote: "From branding to social media marketing, BygWeb’s team felt like an extension of ours. Super collaborative and results-driven!",
    name: "Priya D.",
    business: "Creative Director, DazzleCo",
  },
  {
    quote: "We came to BygWeb for a packaging revamp, and they delivered beyond expectations. Clean, modern, and totally on-brand.",
    name: "Rahul M.",
    business: "Founder, PlantBox",
  },
  {
    quote: "SEO, Google Ads, Meta Ads — all under one roof! BygWeb gave us an edge with their data-first approach and killer designs.",
    name: "Sneha T.",
    business: "E-Commerce Manager",
  },
  {
    quote: "BygWeb’s UI/UX redesign for our app increased retention by 40%. The team is creative, smart, and lightning fast.",
    name: "Manish K.",
    business: "Product Head, FitNow",
  },
  {
    quote: "We’ve worked with several agencies before, but BygWeb stands out with their professionalism, speed, and top-tier creative output.",
    name: "Divya L.",
    business: "Marketing Lead, FinPilot",
  },
];


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-black py-16 px-6 sm:px-12 lg:px-24 relative" >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Hear Directly Our Satisfied Partners
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="overflow-hidden relative">
      <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="min-w-full px-4 sm:px-6 lg:px-24 flex-shrink-0"
    >
      <div className="bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] rounded-xl p-4 sm:p-8 shadow-md mx-auto h-[300px] w-[220px] sm:w-full sm:h-auto sm:max-w-2xl lg:max-w-3xl overflow-hidden">

        <FaQuoteLeft className="text-[#3097F2] text-xl sm:text-2xl mb-4" />
        <p className="text-[#2C2C2C] text-sm sm:text-base mb-4">
          {testimonial.quote}
        </p>
        <div className="border-t border-gray-300 pt-4">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.business}</p>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#1f2937] text-white p-2 rounded-full hover:bg-[#2d3748] transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#1f2937] text-white p-2 rounded-full hover:bg-[#2d3748] transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#7A61F8]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
