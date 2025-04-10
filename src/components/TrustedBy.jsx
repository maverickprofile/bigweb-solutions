import React from "react";
import "../styles/TrustedBy.css"; // custom CSS for marquee

const brands = [
  { name: "Ajio", logo: "/image-removebg-preview (2) (1).png" },
  { name: "Amazon", logo: "/image-removebg-preview (2) (1).png" },
  { name: "Myntra", logo: "/image-removebg-preview (2) (1).png" },
  { name: "Nykaa", logo: "/image-removebg-preview (2) (1).png" },
  { name: "H&M", logo: "/image-removebg-preview (2) (1).png" },
  { name: "Meta", logo: "/image-removebg-preview (2) (1).png" },
  { name: "Mango", logo: "/image-removebg-preview (2) (1).png" },
];

const TrustedBy = () => {
  return (
    <section className="trusted-section bg-gradient-to-r from-[#f5edff] via-[#fdf6ff] to-[#fff8e7] py-10 overflow-hidden">
      <h3 className="text-center text-gray-400 mb-6 text-sm tracking-widest">
        Trusted by brands
      </h3>

      <div className="marquee">
        <div className="marquee-content">
          {brands.map((brand, index) => (
            <div className="logo-container" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
          {/* Repeat for infinite effect */}
          {brands.map((brand, index) => (
            <div className="logo-container" key={`copy-${index}`}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
