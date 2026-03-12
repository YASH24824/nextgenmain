"use client";
import { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lamp, Palette, Sparkles, Target, Trophy, Wheat } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// ASSETS — edit arrays to match your actual files
// ─────────────────────────────────────────────────────────────────
const ganeshSrcs = [
  "/assets/ganesh/1.webp",
  "/assets/ganesh/2.webp",
  "/assets/ganesh/6.webp",
  "/assets/ganesh/7.webp",
  "/assets/ganesh/8.webp",
  "/assets/ganesh/9.webp",
  "/assets/ganesh/10.webp",
  "/assets/ganesh/12.webp",
  "/assets/ganesh/13.webp",
  "/assets/ganesh/14.webp",
  "/assets/ganesh/15.webp",
  "/assets/ganesh/16.webp",
  "/assets/ganesh/17.webp",
  "/assets/ganesh/18.webp",
];
const diwaliSrcs = [
  "/assets/diwali/1.webp",
  "/assets/diwali/2.webp",
  "/assets/diwali/3.webp",
  "/assets/diwali/4.webp",
  "/assets/diwali/5.webp",
  "/assets/diwali/6.webp",
  "/assets/diwali/7.webp",
  "/assets/diwali/8.webp",
  "/assets/diwali/9.webp",
  "/assets/diwali/10.webp",
  "/assets/diwali/11.webp",
  "/assets/diwali/12.webp",
  "/assets/diwali/13.webp",
  "/assets/diwali/14.webp",
  "/assets/diwali/15.webp",
  "/assets/diwali/16.webp",
  "/assets/diwali/17.webp",
  "/assets/diwali/18.webp",
  "/assets/diwali/19.webp",
  "/assets/diwali/20.webp",
  "/assets/diwali/21.webp",
  "/assets/diwali/22.webp",
  "/assets/diwali/23.webp",
  "/assets/diwali/24.webp",
  "/assets/diwali/25.webp",
];
const activitiesSrcs = [
  "/assets/activites/1.webp",
  "/assets/activites/2.webp",
  "/assets/activites/3.webp",
  "/assets/activites/4.webp",
  "/assets/activites/5.webp",
  "/assets/activites/6.webp",
  "/assets/activites/7.webp",
  "/assets/activites/8.webp",
  "/assets/activites/9.webp",
  "/assets/activites/10.webp",
  "/assets/activites/11.webp",
  "/assets/activites/12.webp",
  "/assets/activites/13.webp",
  "/assets/activites/17.webp",
  "/assets/activites/14.webp",
  "/assets/activites/15.webp",
  "/assets/activites/16.webp",
  "/assets/activites/18.webp",
  "/assets/activites/19.webp",
  "/assets/activites/20.webp",
  "/assets/activites/21.webp",
  "/assets/activites/22.webp",
  "/assets/activites/23.webp",
  "/assets/activites/24.webp",
  "/assets/activites/25.webp",
  "/assets/activites/26.webp",
];
const pongalSrcs = [
  "/assets/pongal/1.webp",
  "/assets/pongal/2.webp",
  "/assets/pongal/3.webp",
  "/assets/pongal/4.webp",
  "/assets/pongal/5.webp",
  "/assets/pongal/6.webp",
];
const cricketSrcs = [
  "/assets/cricket/1.webp",
  "/assets/cricket/2.webp",
  "/assets/cricket/3.webp",
  "/assets/cricket/4.webp",
  "/assets/cricket/5.webp",
];
const holiSrcs = [
  "/assets/holi/1.webp",
  "/assets/holi/2.webp",
  "/assets/holi/3.webp",
  "/assets/holi/4.webp",
  "/assets/holi/5.webp",
  "/assets/holi/6.webp",
];

// ─────────────────────────────────────────────────────────────────
// THEMES
// ─────────────────────────────────────────────────────────────────
const THEMES = {
  ganesh: {
    primary: "#c2701f",
    soft: "#fef5e7",
    icon: Lamp,
    label: "Festival",
  },
  diwali: {
    primary: "#7c3aed",
    soft: "#f5f3ff",
    icon: Sparkles,
    label: "Festival",
  },
  activities: {
    primary: "#0369a1",
    soft: "#e0f2fe",
    icon: Target,
    label: "Events",
  },
  pongal: {
    primary: "#15803d",
    soft: "#dcfce7",
    icon: Wheat,
    label: "Festival",
  },
  cricket: {
    primary: "#1e40af",
    soft: "#dbeafe",
    icon: Trophy,
    label: "Sports",
  },
  holi: {
    primary: "#be185d",
    soft: "#fce7f3",
    icon: Palette,
    label: "Festival",
  },
};

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────
const celebrationData = [
  {
    id: "ganesh",
    slug: "ganesh-chaturthi-celebrations",
    title: "Ganesh Chaturthi",
    subtitle: "Celebrations at NextGen",
    date: "September 27, 2025",
    gallery: ganeshSrcs,
  },
  {
    id: "diwali",
    slug: "diwali-celebrations",
    title: "Diwali",
    subtitle: "Celebrations at NextGen",
    date: "October 20, 2025",
    gallery: diwaliSrcs,
  },
  {
    id: "activities",
    slug: "events-activities",
    title: "Events & Activities",
    subtitle: "Fun at NextGen",
    date: "November 29, 2025",
    gallery: activitiesSrcs,
  },
  {
    id: "pongal",
    slug: "pongal-celebrations",
    title: "Pongal",
    subtitle: "Harvest Festival at NextGen",
    date: "January 14, 2026",
    gallery: pongalSrcs,
  },
  {
    id: "cricket",
    slug: "cricket-tournament",
    title: "Cricket Tournament",
    subtitle: "Team Spirit at NextGen",
    date: "January 2026",
    gallery: cricketSrcs,
  },
  {
    id: "holi",
    slug: "holi-celebrations",
    title: "Holi",
    subtitle: "Festival of Colours at NextGen",
    date: "March 14, 2026",
    gallery: holiSrcs,
  },
];

// ─────────────────────────────────────────────────────────────────
// ASPECT RATIOS — a varied but controlled rhythm
// Every image gets a deterministic ratio so columns pack perfectly
// and there is zero dead space at any count.
// ─────────────────────────────────────────────────────────────────
const RATIO_CYCLE = [
  "4/3", // landscape
  "3/4", // portrait
  "1/1", // square
  "3/4", // portrait
  "4/3", // landscape
  "1/1", // square
  "16/9", // wide
  "3/4", // portrait
];

function getRatio(index, total) {
  // For very small galleries keep things uniform
  if (total <= 3) return "4/3";
  if (total === 4) return index === 0 ? "4/3" : "1/1";
  return RATIO_CYCLE[index % RATIO_CYCLE.length];
}

// How many columns to use
function getColumns(total) {
  if (total <= 2) return 2;
  if (total <= 4) return 2;
  if (total <= 6) return 3;
  return 4; // 7+
}

// ─────────────────────────────────────────────────────────────────
// MASONRY COLUMN BUILDER
// Splits image list into N balanced columns
// ─────────────────────────────────────────────────────────────────
function buildColumns(srcs, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  srcs.forEach((src, i) => cols[i % numCols].push({ src, originalIndex: i }));
  return cols;
}

// ─────────────────────────────────────────────────────────────────
// SINGLE MASONRY CARD — uses padding-bottom trick for zero gap
// ─────────────────────────────────────────────────────────────────
function MasonryCard({ src, originalIndex, total, title, theme, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const ratio = getRatio(originalIndex, total);
  const isHero = originalIndex === 0 && total >= 5;

  // padding-bottom % = (h/w) * 100
  const [h, w] = ratio.split("/").map(Number);
  const pb = ((h / w) * 100).toFixed(2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: Math.min(originalIndex * 0.04, 0.35),
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="relative group overflow-hidden cursor-zoom-in mb-3 rounded-xl"
      style={{
        boxShadow: isHero
          ? `0 6px 30px ${theme.primary}30`
          : "0 2px 12px rgba(0,0,0,0.08)",
      }}
      onClick={() => onOpen(originalIndex)}
    >
      {/* Intrinsic-ratio box — no white gaps ever */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: `${pb}%` }}
      >
        <Image
          src={src}
          alt={`${title} — photo ${originalIndex + 1}`}
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={originalIndex < 6}
          loading={originalIndex < 6 ? undefined : "lazy"}
        />

        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hero pill */}
        {isHero && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-bold tracking-wide"
            style={{
              background: `${theme.primary}dd`,
              backdropFilter: "blur(4px)",
            }}
          >
            {theme.emoji} Featured
          </div>
        )}

        {/* Bottom bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-white/75 text-[10px] font-bold tracking-widest uppercase">
            {originalIndex + 1} / {total}
          </span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: theme.primary }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────
function Lightbox({
  gallery,
  title,
  date,
  index,
  onClose,
  onPrev,
  onNext,
  theme,
}) {
  const len = gallery.length;
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          key="lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: "rgba(6,6,10,0.95)",
            backdropFilter: "blur(10px)",
          }}
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors text-lg"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm select-none">
            <span className="font-bold" style={{ color: theme.primary }}>
              {index + 1}
            </span>
            <span className="text-white/25 mx-1">/</span>
            <span className="text-white/40">{len}</span>
          </div>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-5 w-11 h-11 rounded-full flex items-center justify-center text-white/60 hover:text-white text-3xl transition-all select-none"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            ‹
          </button>

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative mx-16 md:mx-20 max-w-5xl w-full rounded-2xl overflow-hidden"
            style={{
              maxHeight: "84vh",
              boxShadow: `0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px ${theme.primary}44`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[index]}
              alt={`${title} — photo ${index + 1}`}
              width={1400}
              height={900}
              className="w-full object-contain bg-black/20"
              style={{ maxHeight: "84vh" }}
              priority
            />
            {/* Bottom strip */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.82), transparent)",
              }}
            >
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-white/40 text-xs mt-0.5">{date}</p>
              </div>
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full text-white"
                style={{ background: theme.primary }}
              >
                {theme.emoji} {index + 1} of {len}
              </span>
            </div>
          </motion.div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-5 w-11 h-11 rounded-full flex items-center justify-center text-white/60 hover:text-white text-3xl transition-all select-none"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            ›
          </button>

          {/* Thumbnail strip — small galleries only */}
          {len <= 12 && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-2 rounded-xl"
              style={{
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="relative flex-shrink-0 rounded-md overflow-hidden transition-all duration-200"
                  style={{
                    width: 36,
                    height: 36,
                    outline:
                      i === index ? `2px solid ${theme.primary}` : "none",
                    outlineOffset: 2,
                    opacity: i === index ? 1 : 0.4,
                    transform: i === index ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────
export default function EventsGallery({ params }) {
  const [festival, setFestival] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const resolvedParams = use(params);

  useEffect(() => {
    const found = celebrationData.find((f) => f.slug === resolvedParams.slug);
    setFestival(found || null);
  }, [resolvedParams.slug]);

  useEffect(() => {
    if (lightboxIndex === null || !festival) return;
    const len = festival.gallery.length;
    const handler = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % len);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + len) % len);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, festival]);

  if (!festival) {
    return (
      <div className="w-full min-h-screen bg-[#f8f7f4] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-5xl">📷</p>
          <h2 className="text-2xl font-bold text-gray-800">
            Gallery Not Found
          </h2>
          <p className="text-gray-400 text-sm">
            This event gallery doesn't exist yet.
          </p>
        </div>
      </div>
    );
  }

  const theme = THEMES[festival.id] || THEMES.activities;
  const total = festival.gallery.length;
  const numCols = getColumns(total);
  const columns = buildColumns(festival.gallery, numCols);
  const len = total;

  // Column wrapper width classes
  const colWidthClass =
    {
      2: "w-1/2",
      3: "w-1/3",
      4: "w-1/4",
    }[numCols] || "w-1/4";

  return (
    <>
      <main
        className="w-full min-h-screen pt-24 pb-24"
        style={{ background: "#f8f7f4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* ── HEADER ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-10 mb-10"
          >
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                style={{ background: theme.soft, color: theme.primary }}
              >
                {theme.emoji} {theme.label}
              </span>
              <span className="text-gray-300 select-none text-sm">·</span>
              <span className="text-gray-400 text-sm">{festival.date}</span>
              <span className="text-gray-300 select-none text-sm">·</span>
              <span
                className="text-sm font-semibold"
                style={{ color: theme.primary }}
              >
                {total} photo{total !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1
                  className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Georgia', 'Cambria', serif" }}
                >
                  {festival.title}
                </h1>
                <p className="text-base text-gray-400 font-medium mt-1.5">
                  {festival.subtitle}
                </p>
              </div>

              {/* Camera chip */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl self-start sm:self-auto shrink-0 border"
                style={{
                  background: theme.soft,
                  borderColor: `${theme.primary}25`,
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span
                  className="text-sm font-bold"
                  style={{ color: theme.primary }}
                >
                  {total} Photo{total !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Animated accent rule */}
            <div className="mt-7 h-px w-full bg-gray-100 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.primary}30)`,
                }}
                initial={{ width: 0 }}
                animate={{ width: "9rem" }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              />
            </div>
          </motion.div>

          {/* ── MASONRY COLUMNS ──────────────────────────────────
              Uses CSS columns via flex so images always fill their
              container with zero whitespace gaps.
          ─────────────────────────────────────────────────────── */}
          <div className="flex gap-3 items-start w-full">
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`${colWidthClass} flex flex-col gap-3`}
              >
                {col.map(({ src, originalIndex }) => (
                  <MasonryCard
                    key={originalIndex}
                    src={src}
                    originalIndex={originalIndex}
                    total={total}
                    title={festival.title}
                    theme={theme}
                    onOpen={setLightboxIndex}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* ── FOOTER ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-7 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="text-gray-400 text-sm">
              All{" "}
              <span className="font-semibold text-gray-600">
                {total} photos
              </span>{" "}
              from{" "}
              <span className="font-semibold" style={{ color: theme.primary }}>
                {festival.title}
              </span>
            </p>
            <button
              onClick={() => setLightboxIndex(0)}
              className="text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-250 hover:scale-105 active:scale-95"
              style={{
                background: theme.soft,
                color: theme.primary,
                borderColor: `${theme.primary}28`,
              }}
            >
              {theme.emoji} View slideshow
            </button>
          </motion.div>
        </div>
      </main>

      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      <Lightbox
        gallery={festival.gallery}
        title={festival.title}
        date={festival.date}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + len) % len)}
        onNext={() => setLightboxIndex((i) => (i + 1) % len)}
        theme={theme}
      />
    </>
  );
}
