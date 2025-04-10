import React from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const BookSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#f5edff] py-20 px-6 sm:px-10 lg:px-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#6171F6] via-[#0F7FB8] to-[#6171F6] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg hover:scale-[1.02] transition-transform duration-500"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Book your free <br /> consultation now
          </h2>
          <p className="text-gray-800 text-sm sm:text-base mb-6">
            This is a placeholder text for the consultation call to action that can be a few lines in length.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 text-sm font-medium rounded-md flex items-center gap-2 transition"
          >
            Book Now <CalendarDays className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 max-w-lg"
        >
          <img
            src="/undraw_calendar_8r6s.svg" // update this to your actual image path
            alt="Calendar Booking"
            className="w-full h-[300px] rounded-lg object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookSection;
