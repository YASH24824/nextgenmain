"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, url: "https://www.youtube.com/shorts/m9Quda1uOmo" },
  { id: 2, url: "https://www.youtube.com/shorts/4pAlebkNPVg" },
  { id: 3, url: "https://www.youtube.com/shorts/CH8jBkQk-DI" },
  { id: 4, url: "https://www.youtube.com/shorts/_-bp83Ray0Y" },
  { id: 5, url: "https://www.youtube.com/shorts/xxbhbxKhxqI" },
];

export default function FiveCardCarousel() {
  const [current, setCurrent] = useState(2);
  const [mounted, setMounted] = useState(false); // ✅ hydration fix
  const videoRefs = useRef([]);

  // ✅ Mark component mounted (client-only rendering)
  useEffect(() => {
    setMounted(true);
  }, []);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((iframe) => {
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  };

  const handleNext = () => {
    pauseAllVideos();
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    pauseAllVideos();
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // ▶️ Play center video only
  useEffect(() => {
    if (!mounted) return;

    const centerIframe = videoRefs.current[current];
    if (centerIframe?.contentWindow) {
      centerIframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  }, [current, mounted]);

  const getPositionStyle = (index) => {
    const total = cards.length;
    let offset = index - current;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return {
      transform: `translateX(${offset * 260}px) scale(${
        offset === 0 ? 1 : 0.85
      })`,
      zIndex: 10 - Math.abs(offset),
      opacity: Math.abs(offset) > 2 ? 0 : 1,
      transition: "all 0.6s ease",
      filter: offset === 0 ? "none" : "blur(1.5px)",
    };
  };

  const getVideoId = (url) => {
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#1c4268] relative inline-block group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Inspiring Innovation Through Motion
          <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full" />
        </motion.h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[600px] flex justify-center items-center overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-5 z-20 bg-[#245586] rounded-full p-2 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {cards.map((card, i) => (
          <div
            key={card.id}
            className="absolute w-[260px] h-[500px] bg-black rounded-[40px] shadow-2xl border-[8px] border-gray-900 overflow-hidden"
            style={getPositionStyle(i)}
          >
            <div className="absolute inset-[2px] bg-black rounded-[30px] overflow-hidden flex flex-col">
              <div className="w-20 h-3 bg-black mx-auto rounded-b-3xl mt-2 shadow-inner z-10" />

              <div
                className="flex-1"
                style={{
                  pointerEvents: current === i ? "auto" : "none",
                }}
              >
                {/* ✅ Client-only iframe */}
                {mounted && (
                  <iframe
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={`https://www.youtube-nocookie.com/embed/${getVideoId(
                      card.url
                    )}?enablejsapi=1&mute=1&loop=1&playlist=${getVideoId(
                      card.url
                    )}&playsinline=1&rel=0&modestbranding=1&origin=https://www.nextgenbusiness.co.in`}
                    referrerPolicy="origin"
                    title={`Video ${card.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-[25px]"
                  />
                )}
              </div>

              <div className="h-1 w-16 bg-gray-400 rounded-full mx-auto my-3" />
            </div>
          </div>
        ))}

        <button
          onClick={handleNext}
          className="absolute right-5 z-20 bg-[#245586] rounded-full p-2 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
