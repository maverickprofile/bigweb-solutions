import React from "react";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-purple-50 to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ExpertiseCard
            number="01"
            title="UI/UX Design"
            description="Crafting seamless user experiences for web and mobile platforms"
          />
          <ExpertiseCard
            number="02"
            title="Brand Identity"
            description="Building strong brand visuals and guidelines for a memorable identity"
          />
          <ExpertiseCard
            number="03"
            title="Development"
            description="We develop app, website, SaaS product with code and no-code solutions"
          />
          <ExpertiseCard
            number="04"
            title="Redesign"
            description="Redesign your product to make better experiences and align with business"
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
