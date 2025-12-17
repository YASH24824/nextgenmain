"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import image1 from "../../assets/ganesh/1.jpg";
import image21 from "../../assets/diwali/1.jpg";
import image46 from "../../assets/activites/1.jpg";

/* ---------------------- FEATURES ---------------------- */
const features = [
  {
    title: "YOUR DREAM OUR DRIVE",
    description:
      "Every startup begins with a spark. We turn that spark into fire, ideas into businesses, dreams into unstoppable realities.",
  },
  {
    title: "SIMPLICITY OVER JARGON",
    description:
      "No heavy words, no confusion. We speak your language—business made easy, success made possible.",
  },
  {
    title: "GROWTH WITHOUT LIMITS",
    description:
      "From registrations to funding, strategy to scaling — we don't just open doors, we build highways for your growth.",
  },
  {
    title: "WITH YOU, ALWAYS",
    description:
      "We walk with you every step — from first step to full scale. True partners never quit.",
  },
];

export const celebrationData = [
  {
    id: "1",
    slug: "ganesh-chaturthi-celebrations",
    img: image1,
    title: "Ganesh Chaturthi Celebrations at NextGen",
    category: "Events",
    date: "September 27, 2025",
  },

  {
    id: "2",
    slug: "diwali-celebrations",
    img: image21,
    title: "Diwali Celebrations at NextGen",
    category: "Events",
    date: "October 20, 2025",
  },

  {
    id: "activities",
    slug: "events-activities",
    img: image46,
    title: "Events & Activities at Nextgen",
    category: "Events",
    date: "November 29, 2025",
  },
];

/* ---------------------- MOTION VARIANTS ---------------------- */
const itemUp = {
  hidden: (dir = 1) => ({
    opacity: 0,
    y: 30 * dir,
    scale: 0.98,
  }),
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------------- TILT WRAPPER (REDUCED TILT) ---------------------- */
function TiltCardWrapper({ children, className = "", onMouseFactor = 8 }) {
  const ref = useRef(null);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;

    const nx = (px - cx) / cx;
    const ny = (py - cy) / cy;

    const ry = -nx * onMouseFactor;
    const rx = ny * onMouseFactor;

    setTx(ry);
    setTy(rx);
  };

  const handleLeave = () => {
    setTx(0);
    setTy(0);
  };

  const transformStyle = {
    transform: `perspective(900px) rotateX(${ty.toFixed(
      2
    )}deg) rotateY(${tx.toFixed(2)}deg) translateZ(0)`,
    willChange: "transform",
    transition: "transform 0.1s ease-out",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
      style={{ perspective: 900 }}
    >
      <div style={transformStyle}>{children}</div>
    </div>
  );
}

/* ---------------------- FESTIVAL IMAGE CARD ---------------------- */
function FestivalCard({ item, index }) {
  return (
    <Link href={`/about/festival/${item.slug}`}>
      <motion.div
        variants={itemUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex justify-center cursor-pointer"
      >
        <TiltCardWrapper>
          <div
            className="rounded-md overflow-hidden border border-[#d7e6f3] shadow-lg"
            style={{
              width: "302px",
              height: "302px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(245,250,255,0.45))",
            }}
          >
            <div className="relative w-full h-[60%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="p-4 text-center h-[40%] flex flex-col items-center justify-center">
              <h3 className="font-semibold text-[15px] text-[#1c4268] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs flex items-center gap-2">
                • <span>{item.date}</span>
              </p>
            </div>
          </div>
        </TiltCardWrapper>
      </motion.div>
    </Link>
  );
}

/* ---------------------- FEATURE CARD (SMALLER FOR MOBILE) ---------------------- */
function FeatureCard({ title, description, number }) {
  return (
    <div
      className="group relative px-5 py-6 rounded-lg text-left transition-all duration-500 overflow-hidden
        bg-[#1c4268] text-white shadow-xl
        before:absolute before:left-0 before:top-0 before:h-full before:w-[120%] before:bg-white before:transition-all before:duration-500
        before:-translate-x-full before:skew-x-12
        hover:before:translate-x-0 hover:text-black
        w-full sm:w-[250px] md:w-[280px] lg:w-[300px] flex-shrink-0 font-inter"
    >
      <div className="relative z-10 flex flex-col items-center gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-full bg-[#3574b8] text-[#e6edf8] font-bold flex items-center justify-center text-base
            hover:!bg-transparent hover:!text-[#3574b8] transition-colors duration-500"
        >
          {number}
        </div>
        <h3 className="text-base font-semibold transition-colors duration-500 relative z-10 text-center">
          {title}
        </h3>
      </div>
      <p className="text-[14px] font-normal leading-snug transition-colors duration-500 relative z-10 text-center">
        {description}
      </p>
    </div>
  );
}
/* ---------------------- MAIN SECTION ---------------------- */
export default function FestivalCelebrationSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 text-center font-inter px-4 sm:px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-2"
      >
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group">
          Fest Celebration — NextGen
          <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6 md:mt-8 px-2">
          At NextGen, celebrations are more than events — they are moments that
          bring our people together, spark joy, and strengthen the culture that
          drives our journey forward.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16 place-items-center">
        {celebrationData.map((item, index) => (
          <FestivalCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* FEATURES - RESPONSIVE GRID */}
      <div className="mt-16 flex flex-wrap md:flex-nowrap justify-center gap-6">
        {features.map((f, idx) => (
          <FeatureCard
            key={idx}
            number={idx + 1}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
}
