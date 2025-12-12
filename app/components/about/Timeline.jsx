"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Handshake, Star } from "lucide-react";

const timelineData = [
  {
    year: "2022",
    title: "Rapid Growth and Expansion",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-[#245586] to-[#245586]",
    accentColor: "bg-[#245586]",
  },
  {
    year: "2023",
    title: "Building Trust Across India",
    icon: <Handshake className="w-8 h-8" />,
    gradient: "from-[#245586] to-[#245586]",
    accentColor: "bg-[#245586]",
  },
  {
    year: "2024",
    title: "Towards Nationwide Leadership",
    icon: <Star className="w-8 h-8" />,
    gradient: "from-[#245586] to-[#245586]",
    accentColor: "bg-[#245586]",
  },
  {
    year: "2025",
    title: "Foundation in Ahmedabad",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-[#245586] to-[#245586]",
    accentColor: "bg-[#245586]",
  },
];

const Timeline = () => {
  return (
    <section className="relative w-full bg-[#f0f6ff] py-20 px-6 overflow-hidden">
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Next-gen Business Consultancy&apos;s Journey to Leadership
              <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.h2>
            <p className="text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed mt-8">
              Every milestone tells a story of innovation, growth, and dedication
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index < timelineData.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}

              <div className="relative h-full">
                <div
                  className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 ${item.accentColor} px-8 py-3 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-black text-xl tracking-tight">
                    {item.year}
                  </span>
                </div>

                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden pt-12 pb-8 px-6 h-full group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                  ></div>
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 text-center leading-snug mb-4 
                      group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r group-hover:from-[#2e6dac] group-hover:to-[#1c4268]
                      transition-all duration-300">
                    {item.title}
                  </h3>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#05325f] to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Timeline;
