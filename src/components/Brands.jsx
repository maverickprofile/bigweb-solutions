import React from "react";
import { FaFacebookF, FaPlay, FaRegComments } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const Partners = () => {
  return (
    <section className="bg-black py-16 overflow-hidden relative">
      {/* Centered Heading */}
      <div className="flex justify-center items-center mb-8">
        <p className="text-white text-base sm:text-lg font-semibold text-center">
          Trusted by 40+ worldwide clients
        </p>
      </div>

      {/* Marquee Logo Strip */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {Array(2).fill(
            <>
              <div className="flex items-center gap-5 text-white text-sm font-medium">
                <LuSun className="text-xl" />
                <span>Logolpsum</span>
              </div>
              <div className="flex items-center gap-5 text-white text-sm font-medium">
                <FaFacebookF className="text-xl" />
                <span>Logolpsum</span>
              </div>
              <div className="flex items-center gap-5 text-white text-sm font-medium">
                <FaPlay className="text-xl" />
                <span>Logolpsum</span>
              </div>
              <div className="flex items-center gap-5 text-white text-sm font-medium">
                <FaRegComments className="text-xl" />
                <span>Logolpsum</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;
