"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const STORAGE_KEY = "nextgen_celebration_seen";

export default function CelebrationPopup() {
  const [show, setShow] = useState(false);
  const [stampVisible, setStampVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Already seen this session — never show again
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setShow(true);
      fireConfetti();
      sessionStorage.setItem(STORAGE_KEY, "true"); // mark as seen immediately
      setTimeout(() => setStampVisible(true), 900);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // runs once on mount — no deps needed

  const closePopup = () => setShow(false);

  const fireConfetti = () => {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.4 } });
    }, 400);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
      onClick={closePopup}
    >
      {/* PREMIUM MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] max-w-2xl rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-popup"
      >
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#102b4e] to-[#06142a]" />

        {/* GLOW BORDER */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 p-2 md:p-2">
          {/* IMAGE FRAME */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-white/5 to-transparent z-10" />

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
            >
              <SwiperSlide>
                <img
                  src="/herobanner5.jpeg"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>

            {/* ── REALISTIC STAMP ── */}
            <div
              className={`stamp-outer ${stampVisible ? "stamp-pressed" : ""}`}
            >
              <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                className="stamp-svg"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="3.5"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                />

                {Array.from({ length: 36 }).map((_, i) => {
                  const angle = (i * 360) / 36;
                  const rad = (angle * Math.PI) / 180;
                  const r = 50;
                  const x = 60 + r * Math.cos(rad);
                  const y = 60 + r * Math.sin(rad);
                  return (
                    <circle key={i} cx={x} cy={y} r="1.2" fill="#16a34a" />
                  );
                })}

                <defs>
                  <path id="topCurve" d="M 14,60 A 46,46 0 0,1 106,60" />
                  <path id="botCurve" d="M 106,60 A 46,46 0 0,1 14,60" />
                </defs>
                <text
                  fill="#16a34a"
                  fontSize="9.5"
                  fontWeight="800"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="1.8"
                >
                  <textPath
                    href="#topCurve"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    NEXT-GEN BUISNESS
                  </textPath>
                </text>
                <text
                  fill="#16a34a"
                  fontSize="8.5"
                  fontWeight="700"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="1.4"
                >
                  <textPath
                    href="#botCurve"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    CONSULTING · 2026
                  </textPath>
                </text>

                <text
                  x="60"
                  y="44"
                  textAnchor="middle"
                  fill="#16a34a"
                  fontSize="9"
                  fontFamily="Arial"
                >
                  ★
                </text>
                <text
                  x="60"
                  y="58"
                  textAnchor="middle"
                  fill="#16a34a"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="Arial Black, Arial, sans-serif"
                  letterSpacing="1"
                >
                  MOST
                </text>
                <text
                  x="60"
                  y="71"
                  textAnchor="middle"
                  fill="#16a34a"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="Arial Black, Arial, sans-serif"
                  letterSpacing="1"
                >
                  TRUSTED
                </text>
                <text
                  x="60"
                  y="82"
                  textAnchor="middle"
                  fill="#16a34a"
                  fontSize="9"
                  fontFamily="Arial"
                >
                  ★
                </text>
              </svg>
            </div>
            {/* ── END STAMP ── */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupFade 0.4s ease;
        }
        @keyframes popupFade {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .stamp-outer {
          position: absolute;
          bottom: 28px;
          right: 24px;
          z-index: 30;
          width: 96px;
          height: 96px;
          opacity: 0;
          transform: translateY(-18px) rotate(-8deg) scale(0.6);
          transform-origin: center center;
          filter: drop-shadow(0 1px 0px rgba(0, 0, 0, 0.35))
            drop-shadow(0 0 6px rgba(34, 197, 94, 0));
          transition: none;
        }

        .stamp-svg {
          width: 100%;
          height: 100%;
        }

        .stamp-pressed {
          animation: inkPress 0.6s cubic-bezier(0.23, 1.2, 0.32, 1) forwards;
        }

        @keyframes inkPress {
          0% {
            opacity: 0;
            transform: translateY(-22px) rotate(-8deg) scale(0.55);
            filter: drop-shadow(0 0 0px rgba(34, 197, 94, 0));
          }
          52% {
            opacity: 1;
            transform: translateY(3px) rotate(-4deg) scale(1.06, 0.94);
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4))
              drop-shadow(0 0 10px rgba(34, 197, 94, 0.6));
          }
          70% {
            transform: translateY(-2px) rotate(-5deg) scale(0.98);
            filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.5));
          }
          100% {
            opacity: 1;
            transform: translateY(0px) rotate(-6deg) scale(1);
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))
              drop-shadow(0 0 6px rgba(34, 197, 94, 0.4));
          }
        }
      `}</style>
    </div>
  );
}
