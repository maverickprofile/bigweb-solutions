import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, PenTool } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Branding design",
    description:
      "Elevating brands through tailored and impactful design solutions.",
  },
  {
    icon: Globe,
    title: "Web & Mobile Development",
    description:
      "Empowering digital innovation through expert Web & Mobile Development services.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually compelling digital experiences for users.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const WhatWeDo = () => {
  return (
    <section className="bg-[#7A61F8] text-white py-20 px-6 sm:px-10 lg:px-32">
      {/* Header */}
      <div className="flex justify-between items-start mb-12 flex-wrap gap-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs tracking-widest font-medium mb-2">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug max-w-3xl">
            Our promise is to deliver a service <br /> that surpasses all expectations.
          </h2>
        </motion.div>

        <motion.a
          href="#"
          className="text-sm font-medium flex items-center gap-1 hover:underline"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          View all Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>

      {/* Service List */}
      <div className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="group flex items-start gap-6 border-t border-black pt-6 transition-all duration-300 ease-in-out hover:bg-[#45378A] hover:text-white cursor-pointer px-4 py-4 rounded-xl"
            >
              <Icon className="w-10 h-10 text-black group-hover:text-white transition-colors duration-300" />
              <div>
                <h4 className="text-lg text-black font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-black/70 group-hover:text-white/90 transition-colors duration-300 max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
        <div className="border-t border-black pt-6" />
      </div>
    </section>
  );
};

export default WhatWeDo;
