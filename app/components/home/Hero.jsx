"use client";
import { Eye, TrendingUp, Zap, ArrowRight, Megaphone } from "lucide-react";
import { useState, useEffect } from "react";
import Homebg from "../../assets/home-bg.png";
import Image from "next/image";

export default function Hero() {
  const announcements = [
    "Private Limited",
    "Limited Liability Partnership",
    "Partnership Firm (ROF)",
    "Udyam Registration",
    "One Person Company",
    "Sole Proprietorship",
    "GST Compliance",
    "Tax Filing",
    "Annual Compliance",
    "Seed Funding",
    "VC Funding",
    "Business Loans",
    "Website Development",
    "Digital Marketing",
    "E-commerce Setup",
  ];

  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src={Homebg}
            alt="Hero Banner"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Professional dark overlay with subtle blue tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929]/98 via-[#1a2f4a]/96 to-[#0d1b2a]/98"></div>
        </div>

        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />

        {/* Radial gradient spotlight effect */}
        <div className="absolute inset-0 z-[2]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.12),transparent_50%)]"></div>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 z-[4] pointer-events-none opacity-[0.02]">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-20">
          <div className="text-center mb-6 animate-fadeInUp mt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] mb-5 tracking-tight">
              <span className="block text-white mb-2">Your Vision,</span>
              <span className="block bg-[#5b93ca] bg-clip-text text-transparent mb-2">
                Our Execution.
              </span>
              <span className="block text-white/85 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                Zero Obstacles.
              </span>
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-center text-blue-100/80 text-lg sm:text-xl leading-relaxed mb-12 animate-fadeInUp animation-delay-200 font-light">
            Business is not a journey &mdash; it&apos;s an{" "}
            <span className="text-white font-semibold">expedition</span>. Every
            challenge is a mountain; every success opens a{" "}
            <span className="text-white font-semibold">new world</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16 animate-fadeInUp animation-delay-300">
            <button className="group relative bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] text-white px-9 py-4 rounded-xl font-semibold text-base shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
              <a
                href="/contact"
                className="relative z-10 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>

            <button className="group relative bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-9 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 animate-fadeInUp animation-delay-400">
            {[
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Strategic Vision",
                desc: "Data-driven strategies that deliver measurable ROI and sustainable growth",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Proven Growth",
                desc: "Track record of scaling businesses from startup to market leader",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Rapid Execution",
                desc: "Agile methodology ensuring swift implementation and results",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1e4976] to-[#4a7ba7] rounded-xl mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed group-hover:text-blue-100/80 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fadeInUp animation-delay-600">
          <span className="text-blue-200/40 text-xs font-semibold tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-blue-400/50 to-transparent relative overflow-hidden">
            <div className="absolute w-full h-8 bg-gradient-to-b from-blue-400 to-transparent animate-scroll-line"></div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -30px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          @keyframes scan {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
          @keyframes scroll-line {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(300%);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out;
          }
          .animate-float {
            animation: float 20s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 25s ease-in-out infinite 5s;
          }
          .animate-scan {
            animation: scan 8s linear infinite;
          }
          .animate-scroll-line {
            animation: scroll-line 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* ✅ Announcement Banner at Bottom */}
      <div className="relative bg-white text-[#1e4976] py-3 overflow-hidden shadow-lg border-2 border-[#1e4976]">
        {/* Static "Announcements" label */}
        <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-br from-[#1e4976] to-[#4a7ba7] px-6 flex items-center gap-3 shadow-xl">
          <Megaphone className="w-5 h-5 animate-bounce text-white" />
          <span className="font-bold text-base whitespace-nowrap text-white">
            Corporate Updates
          </span>
        </div>

        {/* Scrolling content */}
        <div className="flex ml-48">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 animate-scroll-left whitespace-nowrap"
            >
              {announcements.map((announcement, index) => (
                <div key={`${i}-${index}`} className="flex items-center gap-8">
                  <span className="text-base font-semibold">
                    {announcement}
                  </span>
                  <span className="text-white/40">|</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1e4976] to-transparent pointer-events-none"></div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </>
  );
}
