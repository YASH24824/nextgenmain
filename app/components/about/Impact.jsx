"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Impact1 from "../../assets/Impact1.png";
import Impact2 from "../../assets/Impact2.png";
import Impact3 from "../../assets/Impact3.png";
import Impact4 from "../../assets/Impact4.png";

const Impact = () => {
  const impacts = [
    {
      image: Impact1,
      title: "Impact That Lasts",
      description:
        "We don't just build profits; we build brands that inspire trust, loyalty, and lasting market influence.",
    },
    {
      image: Impact2,
      title: "Partnership for Life",
      description:
        "Every client is a co-traveler. Hum saath hai aapke har mod pe, not just projects but long-term journeys.",
    },
    {
      image: Impact3,
      title: "Growth Without Limits",
      description:
        "Your vision doesn't stop; neither do we. From scaling up to breaking barriers, we keep fueling your momentum.",
    },
    {
      image: Impact4,
      title: "Innovation at Core",
      description:
        "We challenge norms, rethink models, and deliver fresh ideas so your business stays relevant in an evolving world.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beyond Business, Toward Legacy
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-stretch bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 shadow-lg"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Section - Reduced width and padding */}
              <div className="sm:w-24 md:w-28 flex justify-center items-center p-4 md:p-5 bg-[#bfd5eb] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Image
                  src={impact.image}
                  alt={impact.title}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Text Section - Reduced padding */}
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                <h3 className="text-base md:text-lg font-bold text-[#05325f] mb-2 transition-colors duration-300">
                  {impact.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {impact.description}
                </p>

                {/* Accent line */}
                <div className="mt-3 w-12 h-0.5 bg-[#05325f] rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;