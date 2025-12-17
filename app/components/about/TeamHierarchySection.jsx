"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jasrajsinh Vagela",
    role: "Managing Director",
  },
  {
    name: "Bhavin Bhabhor",
    role: "CEO",
  },
  {
    name: "Vatsal Solanki",
    role: "Head Of IT Department",
  },
  {
    name: "Ajay Parmar",
    role: "Operations Manager",
  },
];

export default function TeamHierarchySection() {
  return (
    <section className="bg-[#f0f6ff] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20 px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Team
            <span className="absolute left-0 -bottom-3 h-[2px] bg-gradient-to-r from-transparent via-[#245586] to-transparent w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            Meet the dedicated professionals driving innovation and excellence
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#245586]/20 to-[#1c4268]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-300/50 rounded-xl p-8 text-center overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Enhanced Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#1c4268] mb-2">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2">
                    <div className="w-3 h-[1px] bg-gradient-to-r from-transparent to-[#245586] group-hover:from-[#245586] group-hover:to-transparent transition-all duration-300" />
                    <p className="text-sm text-gray-600 font-medium bg-gradient-to-r from-[#1c4268] to-[#245586] bg-clip-text text-transparent">
                      {member.role}
                    </p>
                    <div className="w-3 h-[1px] bg-gradient-to-l from-transparent to-[#245586] group-hover:from-[#245586] group-hover:to-transparent transition-all duration-300" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#245586]/20 rounded-tr-xl transition-all duration-300 group-hover:border-[#245586]/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#245586]/20 rounded-bl-xl transition-all duration-300 group-hover:border-[#245586]/40" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-[#1c4268]/5 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gradient-to-l from-[#245586]/5 to-transparent rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
