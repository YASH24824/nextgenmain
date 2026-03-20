"use client";

import { Eye, TrendingUp, Zap, ArrowRight, Megaphone } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Homebg = "/assets/home-bg.webp";

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

  // Refs for every element whose transform depends on scrollY or mousePosition.
  // SSR renders them with no inline transform — client applies motion via DOM
  // directly, so React's hydration pass never sees a mismatch.
  const bgRef = useRef(null);
  const gridRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    let rafId;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const tick = () => {
      // Background parallax
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
      }

      // Grid mouse parallax
      if (gridRef.current) {
        gridRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Left panel: -10% up + scroll parallax + inward 3%
      if (leftPanelRef.current) {
        const y = -10 + ((scrollY * -0.07) / window.innerHeight) * 100;
        leftPanelRef.current.style.transform = `translateY(calc(-10% + ${scrollY * -0.07}px)) translateX(3%)`;
      }

      // Right panel: -10% up + scroll parallax + inward -3%
      if (rightPanelRef.current) {
        rightPanelRef.current.style.transform = `translateY(calc(-10% + ${scrollY * -0.07}px)) translateX(-3%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background — NO scrollY in style, ref drives it after mount */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0"
          style={{ transition: "transform 0.1s ease-out" }}
        >
          <Image
            src={Homebg}
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929]/98 via-[#1a2f4a]/96 to-[#0d1b2a]/98" />
        </div>

        {/* Grid — NO mousePosition in style, ref drives it */}
        <div
          ref={gridRef}
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial lights */}
        <div className="absolute inset-0 z-[2]">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.12),transparent_50%)]" />
        </div>

        {/* Scanline */}
        <div className="absolute inset-0 z-[4] opacity-[0.02] pointer-events-none">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
        </div>

        {/* ── SIDE IMAGE PANELS ──
            Always rendered (no conditional) — SSR and client both output
            the same markup. No transform in style prop here — refs apply
            transforms after hydration via rAF, so there is never a mismatch. */}
        <div className="pointer-events-none absolute inset-0 z-[6] hidden lg:flex items-center justify-between px-4 xl:px-8">
          {/* ── LEFT PANEL ── */}
          <div
            ref={leftPanelRef}
            className="relative flex-shrink-0 flex flex-col gap-3"
            style={{ width: "clamp(280px, 27vw, 440px)" }}
          >
            <div
              className="relative overflow-hidden rounded-xl border border-white/10"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/herobanner3.jpeg"
                alt="Corporate Office"
                fill
                priority
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/80 via-[#0a1929]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/60 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-sm font-semibold leading-tight">
                    Mumbai 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="flex-1 rounded-xl border border-white/8 px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#5b93ca] text-xl font-bold leading-none">
                  10000+
                </p>
                <p className="text-white/50 text-[11px] mt-1 leading-tight">
                  Businesses Helped
                </p>
              </div>
              <div
                className="flex-1 rounded-xl border border-white/8 px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#5b93ca] text-xl font-bold leading-none">
                  25+
                </p>
                <p className="text-white/50 text-[11px] mt-1 leading-tight">
                  Solutions Offered
                </p>
              </div>
            </div>

            <div className="absolute -left-[2px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#5b93ca]/50 to-transparent rounded-full" />
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            ref={rightPanelRef}
            className="relative flex-shrink-0 flex flex-col gap-3"
            style={{ width: "clamp(280px, 27vw, 440px)" }}
          >
            <div
              className="relative overflow-hidden rounded-xl border border-white/10"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/herobanner2.jpeg"
                alt="Business Growth"
                fill
                priority
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/60 via-[#0a1929]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0a1929]/30 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-sm font-semibold leading-tight">
                    Mumbai 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="flex-1 rounded-xl border border-white/8 px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#5b93ca] text-xl font-bold leading-none">
                  10+
                </p>
                <p className="text-white/50 text-[11px] mt-1 leading-tight">
                  Years Experience
                </p>
              </div>
              <div
                className="flex-1 rounded-xl border border-white/8 px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-[#5b93ca] text-xl font-bold leading-none">
                  98%
                </p>
                <p className="text-white/50 text-[11px] mt-1 leading-tight">
                  Client Satisfaction
                </p>
              </div>
            </div>

            <div className="absolute -right-[2px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#5b93ca]/50 to-transparent rounded-full" />
          </div>
        </div>
        {/* ── END SIDE IMAGE PANELS ── */}

        {/* MAIN CONTENT */}
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

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-24 animate-fadeInUp">
            <button className="bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] px-9 py-4 rounded-xl font-semibold">
              <a href="/contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </button>
            <button className="border border-white/20 px-9 py-4 rounded-xl">
              Schedule Consultation
            </button>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-32 animate-fadeInUp animation-delay-400">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                title: "Strategic Vision",
                desc: "Data-driven strategies that deliver measurable ROI and sustainable growth",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Proven Growth",
                desc: "Track record of scaling businesses from startup to market leader",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Rapid Execution",
                desc: "Agile methodology ensuring swift implementation and results",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-2 bg-gradient-to-br from-[#1e4976] to-[#4a7ba7] rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/60 text-xs leading-relaxed group-hover:text-blue-100/80 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs">
          Scroll
        </div>

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
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out;
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
          .animate-scan {
            animation: scan 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Announcement Banner */}
      <div className="relative bg-white text-[#1e4976] py-3 overflow-hidden shadow-lg border-2 border-[#1e4976]">
        <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-br from-[#1e4976] to-[#4a7ba7] px-6 flex items-center gap-3 shadow-xl">
          <Megaphone className="w-5 h-5 animate-bounce text-white" />
          <span className="font-bold text-base whitespace-nowrap text-white">
            Corporate Updates
          </span>
        </div>
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
                  <span className="text-[#1e4976]/30">|</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
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
