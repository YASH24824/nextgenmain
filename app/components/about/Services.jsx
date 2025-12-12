"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/s1.jpg";
import Image4 from "../../assets/s2.jpg";
import Image5 from "../../assets/c1.jpg";
import Image6 from "../../assets/c2.jpg";

// Features data
const features = [
  {
    title: "YOUR DREAM OUR DRIVE",
    description:
      "Every startup begins with a spark. We turn that spark into fire, ideas into businesses, dreams into unstoppable realities.",
  },
  {
    title: "SIMPLICITY OVER JARGON",
    description:
      "No heavy words, no confusion. We speak your language, business made easy, success made possible.",
  },
  {
    title: "GROWTH WITHOUT LIMITS",
    description:
      "From registrations to funding, from strategy to scaling. We don't just open doors, we build entire highways for your growth.",
  },
  {
    title: "WITH YOU, ALWAYS",
    description:
      "We don't leave after advice. We walk with you every step, from first step to full scale. True partners never quit.",
  },
];

// Motion variants
const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const itemUp = {
  hidden: (dir = 1) => ({
    opacity: 0,
    y: 30 * dir,
    scale: 0.98,
  }),
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// Tilt helper
function TiltCardWrapper({ children, className = "", onMouseFactor = 12 }) {
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
    transform: `perspective(900px) rotateX(${ty.toFixed(2)}deg) rotateY(${tx.toFixed(2)}deg) translateZ(0)`,
    willChange: "transform",
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

// Glass image card
function GlassImageCard({ src, alt, i }) {
  return (
    <motion.div
      custom={1}
      variants={itemUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      <TiltCardWrapper className="rounded-[16px]">
        <div
          className="relative rounded-[16px] overflow-hidden border-[1px] shadow-lg"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(245,250,255,0.45) 100%)",
            boxShadow: "0 6px 18px rgba(18, 38, 80, 0.06)",
            height: "180px",
            width: "100%",
          }}
        >
          <div className="relative w-full h-full">
            <Image src={src} alt={alt} fill className="object-cover" />
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "-30%",
                top: "-20%",
                width: "140%",
                height: "60%",
                transform: "rotate(-20deg)",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 60%, transparent 75%)",
                filter: "blur(28px)",
                opacity: 0.9,
                pointerEvents: "none",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </TiltCardWrapper>
    </motion.div>
  );
}

// Glass text card
function GlassTextCard({ title, text, i, dir = 1 }) {
  return (
    <motion.div
      custom={dir}
      variants={itemUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <TiltCardWrapper className="rounded-[16px]">
        <div
          className="relative rounded-[16px] p-5 flex flex-col items-center justify-center text-center font-inter"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(245,250,255,0.5))",
            boxShadow: "0 6px 18px rgba(18,38,80,0.06)",
            border: "1px solid rgba(91,147,202,0.12)",
            minHeight: 180,
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <h3 className="text-lg font-semibold text-center text-[#12345a] mb-2">{title}</h3>
            <p className="text-sm text-[#445569] max-w-xs text-center">{text}</p>
          </div>
        </div>
      </TiltCardWrapper>
    </motion.div>
  );
}

// FeatureCard (unchanged)
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

// Main Services component
export default function Services() {
  const textCards = [
    {
      title: "Our Ahmedabad Story",
      text: "Where heritage meets innovation — capturing our vibrant journey in the heart of Gujarat.",
    },
    {
      title: "Our Surat Story",
      text: "Thriving with creativity and commerce — moments from our growing story in the Diamond City.",
    },
    {
      title: "Our Chennai Story",
      text: "A vibrant blend of tradition and tech innovation — capturing the essence of our journey in the Gateway of South India.",
    },
  ];

  const imageCards = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <section className="w-full px-6 py-16 md:py-20 bg-gradient-to-b from-[#f6fbff] to-[#ffffff] font-inter">
      <div className="max-w-6xl mx-auto text-center">
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovation Starts with People — NextGen
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed mt-8">
            At NextGen, we don&apos;t just work &mdash; we innovate, evolve, and shape a culture where every moment drives purpose and progress.
          </p>
        </motion.div>

        {/* 9-card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {/* row 1 */}
          <GlassTextCard title={textCards[0].title} text={textCards[0].text} i={0} dir={1} />
          <GlassImageCard src={imageCards[0]} alt="img-1" i={1} />
          <GlassImageCard src={imageCards[1]} alt="img-2" i={2} />

          {/* row 2 */}
          <GlassImageCard src={imageCards[2]} alt="img-3" i={3} />
          <GlassImageCard src={imageCards[3]} alt="img-4" i={4} />
          <GlassTextCard title={textCards[1].title} text={textCards[1].text} i={5} dir={-1} />

          {/* row 3 */}
          <GlassTextCard title={textCards[2].title} text={textCards[2].text} i={6} dir={1} />
          <GlassImageCard src={imageCards[4]} alt="img-5" i={7} />
          <GlassImageCard src={imageCards[5]} alt="img-6" i={8} />
        </motion.div>

        {/* features (last 4 cards in one row) */}
        <div className="mt-16 flex flex-wrap md:flex-nowrap justify-center gap-6">
          {features.map((f, idx) => (
            <FeatureCard key={idx} number={idx + 1} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
