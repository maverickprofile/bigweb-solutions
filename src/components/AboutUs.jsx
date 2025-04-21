import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '915+', label: 'Projects Completed' },
  { value: '10', label: 'Years of Experience' },
  { value: '300+', label: 'World Wide Happy Customers' },
];

const AboutUs = () => {
  return (
    <section
  className="bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#f5edff] text-gray-800 py-20 px-6 md:px-20"
  id="about"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
    {/* Left Section */}
    <div className="space-y-4">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-wide text-gray-600 uppercase"
      >
        About Us
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
      >
        Empowering businesses <br /> to grow smarter <br /> through digital innovation.
      </motion.h2>
    </div>

    {/* Right Section */}
    <div className="space-y-6">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-gray-700 text-[17px] leading-relaxed"
      >
        At <strong className="text-gray-900">BygWeb</strong>, we craft next-level website design, SEO, branding, and digital advertising solutions that drive real results. With over a decade of digital expertise, we've empowered 100+ businesses worldwide to build bold, unforgettable online identities. Our passionate in-house team blends creativity with strategy to deliver custom-tailored digital experiences that elevate your brand and boost your bottom line.
      </motion.p>

      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="w-full overflow-hidden rounded-lg"
>
  <video
    src="/4145d4a82be8307b48a3e18a8884fefd.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
  />
</motion.div>

    </div>
  </div>

  {/* Stats Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
  >
    {stats.map((stat, index) => (
      <div key={index}>
        <h3 className="text-[40px] lg:text-[70px] font-semibold text-gray-900">{stat.value}</h3>
        <p className="text-[20px] text-gray-600 mt-1">{stat.label}</p>
      </div>
    ))}
  </motion.div>
</section>

  );
};

export default AboutUs;
