"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Compass, Trophy, Sparkles, BadgeCheck, Users, Star } from "lucide-react";

function Counter({ number, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(number / (2000 / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [number]);

  return (
    <span className="text-5xl font-bold bg-gradient-to-br from-[#1c4268] to-[#5b93ca] bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

function StatCard({ number, suffix, label, subtext, icon: Icon, index }) {
  return (
    <motion.div
      className="group relative bg-white p-8 flex flex-col items-center justify-center text-center w-[260px] h-[280px] mx-4 rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
      whileHover={{ y: -8 }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative corner accent - Top Left */}
      <div className="absolute top-4 left-4 w-12 h-12">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L48 0 L48 12 C48 12 36 12 24 12 C12 12 12 12 12 12 L12 48 L0 48 Z" fill="#245586" opacity="0.9" />
        </svg>
      </div>

      {/* Decorative corner accent - Top Right */}
      <div className="absolute top-4 right-4 w-12 h-12">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 0 L0 0 L0 12 C0 12 12 12 24 12 C36 12 36 12 36 12 L36 48 L48 48 Z" fill="#245586" opacity="0.9" />
        </svg>
      </div>

      {/* Icon with animated glow effect */}
      <div className="relative mb-6 p-4 rounded-full bg-gradient-to-br from-blue-900/10 to-blue-600/10 group-hover:from-blue-900/20 group-hover:to-blue-600/20 transition-all duration-500">
        <Icon className="w-10 h-10 text-[#245586] group-hover:text-[#5b93ca] transition-colors duration-500" />
        <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Counter */}
      <div className="relative z-10 mb-3">
        <Counter number={number} suffix={suffix} />
      </div>

      {/* Label */}
      <p className="text-xl font-bold text-gray-900 mb-2 relative z-10 uppercase tracking-wide">
        {label}
      </p>

      {/* Subtext */}
      {subtext && (
        <p className="text-sm text-gray-600 leading-relaxed max-w-[240px] relative z-10">
          {subtext}
        </p>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#245586] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}

// Continuous scrolling container
export default function StatsCards() {
  const stats = [
    // {
    //   number: 150,
    //   suffix: "+",
    //   label: "Gamechangers",
    //   subtext: "Innovators shaping the future",
    //   icon: Compass
    // },
    // {
    //   number: 1200,
    //   suffix: "+",
    //   label: "Success Stories",
    //   subtext: "Empowering enterprises globally",
    //   icon: Trophy
    // },
    // {
    //   number: 1500,
    //   suffix: "+",
    //   label: "Breakthroughs",
    //   subtext: "Driving cutting-edge innovation",
    //   icon: Sparkles
    // },
    {
      number: 800,
      suffix: "+",
      label: "Solutions",
      // subtext: "Trusted by government initiatives",
      icon: BadgeCheck
    },
    // {
    //   number: 200,
    //   suffix: "+",
    //   label: "Employees",
    //   subtext: "Trusted by government & industry leaders",
    //   icon: Users
    // },
    {
      number: 4.9,
      suffix: "+",
      label: "Google Rating",
      subtext: "Rated highly by clients & verified authorities",
      icon: Star
    },
  ];

  const scrollingStats = [...stats, ...stats, ...stats, ...stats];

  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { ease: "linear", duration: 20, repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#1c4268] mb-4 relative inline-block cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Impact in Numbers
          <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Driving innovation and excellence across industries worldwide
        </motion.p>
      </div>

      {/* Scrolling cards */}
      <motion.div
        className="flex w-max"
        animate={controls}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {scrollingStats.map((stat, i) => (
          <StatCard key={i} {...stat} index={i} />
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
