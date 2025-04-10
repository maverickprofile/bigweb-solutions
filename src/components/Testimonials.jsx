import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const darkTestimonials = [
  {
    quote:
      "The team effectively met deadlines and gave a lot of importance to processes that made our team's life much easier and allowed us to trust the team with deliverables without too much interference.",
    name: "Bhavana R.",
    business: "Mid market",
  },
  {
    quote:
      "Their tech team is a force to reckon with. Super agile, and collaborative, they bring in tech-enabled processes that will make your processes better and campaigns predictable and measurable.",
    name: "Pragya P.",
    business: "Director Social Commerce",
  },
  {
    quote:
      "Love that you guys follow briefs perfectly and ensure brand messaging goes out there in the best way possible. Very easy to work with and great involvement from the team.",
    name: "Ria M.",
    business: "Small Business",
  },
  {
    quote:
      "Promptness, creativity, a team great to work with and on top of everything, they are at their job what so ever!",
    name: "Radhika R.",
    business: "Enterprise",
  },
  {
    quote:
      "It's been great. From conceptualization, to execution to final report. The team is very efficient.",
    name: "Akhila V.",
    business: "Small Business",
  },
  {
    quote:
      "Great technology with great people. Very approachable people who have the capability to get things done using tech.",
    name: "Sukriti D.",
    business: "Enterprise",
  },
];

const TestimonialGrid = () => {
  return (
    <section className="bg-[#111827] text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
        <p className="text-gray-400 text-sm sm:text-base">Hear Directly Our Satisfied Partners</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {darkTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <FaQuoteLeft className="text-purple-400 text-2xl mb-4" />
            <p className="text-gray-200 text-sm mb-4">{testimonial.quote}</p>
            <div className="border-t border-gray-700 pt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.business}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
