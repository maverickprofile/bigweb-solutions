import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaLaptopCode,
    FaPencilRuler,
    FaCloud,
    FaGlobeAmericas,
    FaCogs,
    FaShoppingCart,
    FaThumbsUp,
    FaClock,
    FaShieldAlt,
  } from "react-icons/fa";
  import {
    FiCode,
    FiShoppingCart,
    FiShield,
    FiShare2,
    FiCpu,
    FiLayers,
  } from "react-icons/fi";
  
  const services = [
    { icon: <FiCode />, label: "API Development" },
    { icon: <FiShoppingCart />, label: "Ecommerce Development" },
    { icon: <FiLayers />, label: "CMS Development" },
    { icon: <FiCpu />, label: "BI Systems Integrations" },
    { icon: <FiShield />, label: "Security Audit" },
    { icon: <FiShare2 />, label: "Social Media Integrations" },
    { icon: <FiCode />, label: "API Development" },
    { icon: <FiShoppingCart />, label: "Ecommerce Development" },
    { icon: <FiLayers />, label: "CMS Development" },
    { icon: <FiCpu />, label: "BI Systems Integrations" },
    { icon: <FiShield />, label: "Security Audit" },
    { icon: <FiShare2 />, label: "Social Media Integrations" },
  ];

const features = [
  {
    icon: <FaLaptopCode className="text-4xl text-purple-600" />,
    title: "Custom Web Apps",
    desc: "At BygWeb, we build powerful custom web applications tailored to your business workflows — whether it's inventory tracking, transport management, education, or internal tools.\n\nOur solutions are crafted to simplify operations, increase efficiency, and deliver real results.",
    bg: "bg-purple-100",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-yellow-600" />,
    title: "UI/UX Design",
    desc: "We design intuitive, responsive, and user-friendly interfaces that elevate the look and feel of your digital products.\n\nBygWeb’s UI/UX team focuses on usability, engagement, and brand consistency — helping you stand out in the crowded digital space.",
    bg: "bg-yellow-100",
  },
  {
    icon: <FaCloud className="text-4xl text-teal-600" />,
    title: "REST API Development",
    desc: "We specialize in building secure and scalable RESTful APIs that power your frontend and mobile apps with seamless data exchange.\n\nBygWeb ensures clean architecture and top-tier performance, so your backend is as strong as your user experience.",
    bg: "bg-teal-100",
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-blue-600" />,
    title: "Progressive Web Apps",
    desc: "BygWeb creates fast, reliable Progressive Web Apps (PWAs) that work smoothly across all devices — even offline.\n\nWe blend the reach of the web with the feel of native apps to boost user engagement and accessibility.",
    bg: "bg-blue-100",
  },
  {
    icon: <FaCogs className="text-4xl text-green-600" />,
    title: "Open-Source Frameworks",
    desc: "From CMS platforms to full-stack frameworks, we use the best of open-source tech to build flexible, cost-effective web solutions.\n\nBygWeb helps you leverage tools like WordPress, React, Next.js, and more — tailored to your exact business needs.",
    bg: "bg-green-100",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-pink-600" />,
    title: "E-Commerce Solutions",
    desc: "Whether you're launching a new store or scaling an existing one, BygWeb delivers ecommerce websites that convert.\n\nWe design, develop, and optimize online stores for all business models — from B2C to B2B — with a focus on performance and ROI.",
    bg: "bg-pink-100",
  },
];

const projects = [
    {
      image: "https://i.pinimg.com/736x/67/d4/4a/67d44a0ab45d4dd239f076d40d201711.jpg",
      title: "Real Estate Booking Platform",
      category: "Full Stack Development",
      description: "A seamless property booking app with real-time listings, user dashboards, and map integration.",
    },
    {
      image: "https://i.pinimg.com/736x/c6/0c/0c/c60c0c960a41d79213ba0460726b90a5.jpg",
      title: "Fashion E-commerce Store",
      category: "Frontend + CMS",
      description: "A visually stunning e-commerce experience for fashion lovers, built with headless CMS and blazing speed.",
    },
    {
      image: "https://i.pinimg.com/736x/95/42/dd/9542ddcc8d14fb92148084b5dcbfe894.jpg",
      title: "AI Analytics Dashboard",
      category: "Dashboard UI/UX",
      description: "An interactive admin dashboard for monitoring AI-driven analytics in real-time with dynamic charts.",
    },
    // Add more projects here...
    {
        image: "https://i.pinimg.com/736x/21/47/a7/2147a763a3b423571214ef2fcefb5e22.jpg",
        title: "Real Estate Booking Platform",
        category: "Full Stack Development",
        description: "A seamless property booking app with real-time listings, user dashboards, and map integration.",
      },
      {
        image: "https://i.pinimg.com/736x/96/cb/6e/96cb6e1790f5ad6d147f4da15dfe76f1.jpg",
        title: "Fashion E-commerce Store",
        category: "Frontend + CMS",
        description: "A visually stunning e-commerce experience for fashion lovers, built with headless CMS and blazing speed.",
      },
      {
        image: "https://i.pinimg.com/736x/0f/53/82/0f5382391da8029e9dd407e932d32531.jpg",
        title: "AI Analytics Dashboard",
        category: "Dashboard UI/UX",
        description: "An interactive admin dashboard for monitoring AI-driven analytics in real-time with dynamic charts.",
      },
  ];
  

// Why Choose Us Array
const whyChooseUs = [
    {
      icon: <FaThumbsUp className="text-4xl text-indigo-600" />,
      title: "Proven Track Record",
      desc: "Hundreds of successful launches and satisfied clients across industries.",
    },
    {
      icon: <FaClock className="text-4xl text-rose-500" />,
      title: "On-Time Delivery",
      desc: "We meet deadlines without compromising quality or functionality.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Secure & Scalable",
      desc: "Our solutions are built with security and scalability in mind.",
    },
  ];

const WebDesignAndDevelopment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 1 : 3; // Responsive items

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev < totalPages - 1 ? prev + 1 : totalPages - 1
    );
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
  className="relative w-full h-screen text-white text-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/18707.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pb-32 sm:pb-40">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
    >
      Website Design & Development
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90"
    >
      We create beautiful, functional, and blazing-fast websites to grow
      your business.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <Link to="/contact" className="relative z-10">
        <button className="mt-8 bg-white px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          <span className="bg-gradient-to-r from-[#7A63F5] to-[#159BF0] text-transparent bg-clip-text">
            Get in Touch
          </span>
        </button>
      </Link>
    </motion.div>
  </div>

  {/* Marquee Container */}
  <div className="absolute bottom-20 lg:bottom-6 w-full overflow-hidden z-10 px-4 sm:px-10">
    {/* Gradient Fades on Both Sides */}
    {/* <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
    <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-black via-black/60 to-transparent z-20" /> */}

    {/* Top Marquee Row (Left to Right) */}
    <div className="whitespace-nowrap animate-marqueeLeft flex gap-4 py-2">
      {Array(2)
        .fill(services)
        .flat()
        .map((service, index) => (
          <div
            key={`top-${index}`}
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-2xl shadow text-sm font-semibold gap-2"
          >
            <span className="text-white">{service.icon}</span>
            <span>{service.label}</span>
          </div>
        ))}
    </div>

    {/* Bottom Marquee Row (Right to Left) */}
    <div className="whitespace-nowrap animate-marqueeRight flex gap-4 py-2 mt-2">
      {Array(2)
        .fill(services)
        .flat()
        .map((service, index) => (
          <div
            key={`bottom-${index}`}
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-2xl shadow text-sm font-semibold gap-2 text-black px-6 py-2 rounded-2xl shadow text-sm font-semibold gap-2"
          >
            <span className="text-white">{service.icon}</span>
            <span>{service.label}</span>
          </div>
        ))}
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What We Deliver
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Our full-stack capabilities ensure every aspect of your web product
            is high-performing and future-ready.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl transition-all duration-300 whitespace-pre-line ${item.bg}`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Projects Section */}
{/* Projects Section */}
<section className="w-full px-4 py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
        Our Web Application Development Showcase
      </h2>
      <div className="flex gap-4">
        <button
          onClick={goToPrev}
          className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 transition"
        >
          Prev
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>
    </div>

    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {getVisibleProjects().map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg  transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-1">
                {project.category}
              </p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose BygWeb?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover the key reasons our clients love working with us.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDesignAndDevelopment;


