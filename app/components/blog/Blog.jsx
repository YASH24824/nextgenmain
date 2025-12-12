"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "From Idea to Impact: How Startups Can Scale Smartly in India",
    date: "October 2025",
    category: "Industry Insights",
    readingTime: "5 Minutes",
    tags: ["Startups", "Innovation", "India"],
    description:
      "With Amit Shah inaugurating Startup Conclave 2025 in Gandhinagar, the spotlight is on India's booming startup ecosystem. Learn how conclaves create opportunities and visibility for entrepreneurs.",
    color: "#245586"
  },
  {
    title: "Funding Decoded: Navigating India's Startup Investment Landscape",
    date: "September 2025",
    category: "Funding Strategy",
    readingTime: "6 Minutes",
    tags: ["Funding", "Venture Capital", "Growth"],
    description:
      "Discover the latest trends in Indian startup funding, from seed capital to Series A rounds — and how founders can attract the right investors with clear vision and strategy.",
    color: "#245586"
  },
  {
    title: "Innovation Meets Impact: Tech Trends Defining 2025",
    date: "August 2025",
    category: "Technology",
    readingTime: "4 Minutes",
    tags: ["AI", "Innovation", "Future"],
    description:
      "Explore how technology is reshaping industries — from AI-driven solutions to sustainable innovations leading the global transformation.",
    color: "#245586"
  },
];

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full min-h-screen py-20 px-6 relative" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#245586 1px, transparent 1px),
            linear-gradient(90deg, #245586 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block mb-3">
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Insights
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
          <motion.p
            className="text-xl mt-8"
            style={{ color: '#5b93ca' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore thought leadership and industry perspectives
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={{
                pathname: "/blogview",
                query: { title: blog.title },
              }}
              className="block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group cursor-pointer"
              >
              </motion.div>
              <motion.div
                className="overflow-hidden transition-all duration-500 rounded-xl relative h-full"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: hoveredIndex === index
                    ? '0 20px 60px rgba(28, 66, 104, 0.2)'
                    : '0 5px 20px rgba(28, 66, 104, 0.1)',
                  borderTop: `4px solid ${blog.color}`,
                }}
                whileHover={{ y: -8 }}
              >
                {/* Colored Header Bar */}
                <div
                  className="h-1 w-full transition-all duration-500"
                  style={{
                    backgroundColor: blog.color,
                    boxShadow: hoveredIndex === index ? `0 4px 20px ${blog.color}60` : 'none',
                  }}
                />

                <div className="p-8">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-5">
                    <motion.span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: blog.color }}
                      animate={{
                        letterSpacing: hoveredIndex === index ? '0.2em' : '0.15em',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {blog.category}
                    </motion.span>

                    <motion.div
                      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: hoveredIndex === index ? blog.color : '#f8f9fa',
                      }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{
                          stroke: hoveredIndex === index ? '#ffffff' : blog.color
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl font-bold mb-4 leading-tight"
                    style={{ color: '#1c4268' }}
                    animate={{
                      color: hoveredIndex === index ? blog.color : '#1c4268',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {blog.title}
                  </motion.h2>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: '#000000' }}
                  >
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border-2 transition-all duration-300"
                        style={{
                          borderColor: blog.color,
                          color: hoveredIndex === index ? '#ffffff' : blog.color,
                          backgroundColor: hoveredIndex === index ? blog.color : 'transparent',
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div
                    className="flex items-center gap-4 text-sm pt-5 border-t"
                    style={{
                      color: '#5b93ca',
                      borderColor: '#ebf2f8'
                    }}
                  >
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {blog.readingTime}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="h-1"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    transformOrigin: 'left',
                    backgroundColor: blog.color,
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className="px-10 py-4 font-semibold text-lg transition-all duration-300 rounded-lg relative overflow-hidden group"
            style={{
              backgroundColor: '#245586',
              color: '#ffffff'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0"
              style={{
                backgroundColor: '#3278bd',
              }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />

            <span className="relative z-10 flex items-center justify-center gap-3">
              View All Articles
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}