"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// React Icons
import { FaRegLightbulb, FaHammer, FaRocket, FaGem, FaMountain } from "react-icons/fa";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const steps = [
    {
      icon: <FaRegLightbulb className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "The Spark",
      description: "It all begins with a small thought that can change the world.",
    },
    {
      icon: <FaMountain className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "The Stone",
      description: "Your raw idea takes shape – we carve and polish it.",
    },
    {
      icon: <FaHammer className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "The Forge",
      description: "We give your vision strength through structure and strategy.",
    },
    {
      icon: <FaRocket className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "The Lift",
      description: "Funding and resources fuel your ambition to rise higher.",
    },
    {
      icon: <FaGem className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "The Shine",
      description: "Your brand glows like a diamond – trusted and impactful.",
    },
  ];

  const solidColor = "#245586";

  return (
    <section className="w-full py-24 bg-[#f0f6ff]">
      {/* Heading */}
      <div className="text-center mb-24 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Next-Gen Business Consultancy Growth
          <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center gap-2 max-w-7xl mx-auto px-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative w-64 flex-shrink-0 group transition-all duration-500 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Icon Container */}
            <div
              className="absolute -top-8 rotate-45 w-16 h-16 rounded-xl shadow-lg flex items-center justify-center ring-4 ring-white/50 z-10 
  transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: solidColor, left: "45%", transform: "translateX(-50%) rotate(45deg)" }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110" style={{ transform: "rotate(-45deg)" }}>
                {step.icon}
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-xl pt-16 pb-6 px-4 text-center relative h-[230px] w-[230px] flex flex-col justify-between 
    transition-transform duration-300 group-hover:scale-105">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{step.description}</p>
              </div>
              <div className="h-2 w-full rounded-b-xl" style={{ backgroundColor: solidColor }} />
            </div>

          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-12 max-w-xl mx-auto px-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative w-full"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Icon Container */}
            <div
              className="absolute -top-7 left-1/2 -translate-x-1/2 rotate-45 w-14 h-14 rounded-xl shadow-lg flex items-center justify-center ring-4 ring-white/50 z-10"
              style={{ backgroundColor: solidColor }}
            >
              <div className="-rotate-45">{step.icon}</div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl pt-12 pb-5 px-4 text-center relative">
              <h3 className="text-base font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
              <div className="mt-6 h-2 w-full rounded-b-xl" style={{ backgroundColor: solidColor }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
