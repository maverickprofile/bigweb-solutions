import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "UI/UX Design",
    description: "Crafting seamless user experiences for web and mobile platforms",
  },
  {
    id: "02",
    title: "Brand Identity",
    description:
      "Building strong brand visuals and guidelines for a memorable identity",
  },
  {
    id: "03",
    title: "Development",
    description:
      "We develop app, website, sass product with code , no code both development",
  },
  {
    id: "04",
    title: "Redesign",
    description:
      "Redesign your product make better experience and adjust with business",
  },
];

const blobVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const cardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const Expertise = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fdf2f8] via-white to-[#f0f4ff] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className="relative group bg-[#7B61FF] text-white px-6 py-8 rounded-[2.5rem] shadow-2xl min-h-[280px] flex flex-col justify-between text-center"
            >
              {/* Floating blob button */}
              <motion.div
                variants={blobVariants}
                className="absolute -top-5 -right-5 w-12 h-12 bg-white text-[#7B61FF] rounded-full flex items-center justify-center shadow-md z-10"
              >
                <ArrowUpRight size={20} />
              </motion.div>

              <div>
                <div className="text-sm font-semibold mb-2">{card.id}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Wide Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="md:col-span-3 bg-[#7B61FF] text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 justify-between text-center"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Innovative Digital Agency
              </h3>
              <p className="text-sm md:text-base opacity-90">
                Offering insights and guidance to refine and elevate your digital products
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="flex items-center gap-2 text-[#7B61FF] bg-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition">
                Free Consulting 30 min
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
