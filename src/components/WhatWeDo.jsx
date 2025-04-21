import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added
import {
  BookOpen, Globe, PenTool, Monitor, TrendingUp, Megaphone, User,
  Package, ShoppingCart, Smartphone, Film, Brush, Share2,
  UserPlus, Mail, Users, PhoneCall, DollarSign, MessageSquare,
  Linkedin, Contact2,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Modern and responsive web designs tailored to your brand identity.",
    path: "/services/web-design-and-development", // ✅ Link path
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Boost your search rankings and drive organic traffic with proven SEO strategies.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Targeted Google Ads campaigns to increase visibility and conversions.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Engaging Meta Ads to reach your audience effectively.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Engaging video edits crafted to tell your story and boost engagement.",
  },
  {
    icon: Film,
    title: "Video Production",
    description: "High-quality video production services for all your marketing needs.",
  },
  {
    icon: PenTool,
    title: "Social Media Marketing",
    description: "Comprehensive social media strategies to enhance your online presence.",
  },
  {
    icon: Brush,
    title: "Graphic Design",
    description: "Creative graphic designs for marketing, branding, and digital content.",
  },
  {
    icon: Share2,
    title: "Branding",
    description: "Comprehensive branding solutions to establish a strong market presence.",
  },
  {
    icon: Package,
    title: "Packaging & Mockups",
    description: "Custom packaging designs and mockups to elevate your product presentation.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Launch and scale your online store with powerful Shopify and WooCommerce setups.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom mobile app development for iOS and Android platforms.",
  },
  {
    icon: UserPlus,
    title: "Pre Sales",
    description: "Strategy and support to convert potential leads into loyal customers.",
  },
  {
    icon: Mail,
    title: "Cold Email",
    description: "Automated and targeted cold email campaigns to boost outreach.",
  },
  {
    icon: Users,
    title: "Personal Assistant",
    description: "Virtual assistance for tasks, scheduling, and efficient workflows.",
  },
  {
    icon: PhoneCall,
    title: "Call Analysis",
    description: "Detailed call reviews and performance insights for your sales team.",
  },
  {
    icon: TrendingUp,
    title: "Consulting",
    description: "Expert business and marketing consulting tailored to your growth goals.",
  },
  {
    icon: DollarSign,
    title: "Sales",
    description: "End-to-end sales support to drive revenue and client acquisition.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "WhatsApp automation and communication tools for customer engagement.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "LinkedIn lead generation and profile optimization for professionals.",
  },
  {
    icon: Contact2,
    title: "Leads",
    description: "Targeted lead generation strategies to fill your sales pipeline.",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-[#7763F8] via-[#7A61F8] to-[#1E9CF2] text-white py-20 px-6 sm:px-10 lg:px-32" id="services">
      {/* Header */}
      <div className="flex justify-between items-start mb-16 flex-wrap gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs tracking-widest font-semibold text-[#2C2C2C] mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug max-w-3xl">
            We deliver a service <br /> that surpasses all expectations.
          </h2>
        </motion.div>

        <motion.a
          href="#"
          className="text-sm font-medium flex items-center gap-2 text-white hover:text-[#1E9CF2] transition-colors"
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

      {/* Service Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const cardContent = (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl hover:shadow-[#1E9CF2]/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm text-white/80">{service.description}</p>
            </motion.div>
          );

          // If service has a path, wrap with Link
          return service.path ? (
            <Link to={service.path} key={index}>
              {cardContent}
            </Link>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
