"use client";

import { ShieldCheckIcon, GlobeAltIcon, BoltIcon, ChartBarIcon, } from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import worldMapImage from "../../assets/bg-img.jpg";

export default function GrowthSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      number: "01",
      title: "Secure & Reliable",
      description:
        "Our infrastructure is designed with top-tier security and guaranteed uptime.",
    },
    {
      icon: GlobeAltIcon,
      number: "02",
      title: "Global Access",
      description:
        "Reach users around the world with our optimized, globally distributed network.",
    },
    {
      icon: BoltIcon,
      number: "03",
      title: "Fast Performance",
      description:
        "Experience lightning-fast load times and seamless user experiences.",
    },
    {
      icon: ChartBarIcon,
      number: "04",
      title: "Analytics Insights",
      description:
        "Gain valuable insights from real-time analytics and custom reports.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-200">
      {/* Background Image */}
      <Image
        src={worldMapImage}
        alt="World Map Background"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover brightness-90 scale-105 z-0 transition-transform duration-[6000ms] animate-slowZoom"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-white/70 backdrop-blur-[1px] z-0" />
      {/* Subtle vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 z-0" />

      <div className="w-full max-w-6xl h-full relative z-10">
        {/* Title Section */}

        <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#1c4268] mb-4 relative inline-block cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Business Success
          <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.h2>
      </div>

        {/* Animated Arrow Lines */}
        <div className="relative h-28 mb-10">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 220"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#1c4268", stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: "#245586", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#1c4268", stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {[125, 360, 640, 895].map((endX, i) => (
              <g key={i}>
                <path
                  d={`M 500 10 
                      L 500 50 
                      Q 500 70, ${endX < 500 ? 480 : 520} 70 
                      L ${endX} 70 
                      Q ${endX} 70, ${endX} 120 
                      L ${endX} 215`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="path-draw"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <polygon
                  points={`${endX - 5},215 ${endX},205 ${endX + 5},215`}
                  fill="#2e6dac"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 group shadow-lg transform hover:-translate-y-2 hover:scale-[1.05] transition-all duration-500 animate-fadeIn hover:bg-[#1b2b3d] hover:text-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1a2a3d]/80 to-[#223b55]/80 blur-lg" />

                {/* Icon and Number */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="bg-gradient-to-br from-[#1c4268] to-[#5b93ca] p-3 rounded-lg shadow-md group-hover:bg-white transition-all duration-300">
                    <Icon className="text-white h-6 w-6 group-hover:text-white" />
                  </div>
                  <span className="text-5xl font-bold bg-gradient-to-br from-[#1c4268] to-[#5b93ca] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#15324f] mb-3 group-hover:text-white relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1c4268] leading-relaxed group-hover:text-gray-200 relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        /* Background slow zoom */
        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 14s ease-in-out infinite;
        }

        /* Title slide-up + shimmer */
        @keyframes titleSlide {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-titleSlide {
          animation: titleSlide 1.2s ease-out forwards;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }

        /* SVG line draw animation */
        .path-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawLine 2s ease-in-out forwards;
        }
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Card fade-in */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
