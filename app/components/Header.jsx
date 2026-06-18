"use client";

import { ChevronDownIcon, Menu, X, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Solution", href: "/solution" },
    { label: "Contact", href: "/contact" },
     { label: "Blog", href: "/blog" },

  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListenenpm("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#1c4268] transition-all duration-300 ${
        scrolled ? "shadow-md rounded-full mt-2" : ""
      }`}
    >
      <div className="flex items-center justify-between h-20 px-6 sm:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
          <Image
            src="/images/whiteLogo.webp"
            alt="Logo"
            width={160}
            height={60}
            priority
            className="w-32 sm:w-36 lg:w-52 object-contain pt-2 sm:pt-3 lg:pt-4"
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 208px"
          />
        </div>
        {/* <a href="/" className="flex-shrink-0">
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            
          </motion.div>
        </a> */}

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={` relative text-white font-medium text-[15px] transition-all duration-300 group hover:text-[#d1e8ff]`}
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}

           
          </nav>

          {/* Call Button */}
          <style>{`
            @keyframes ring {
              0%, 50%, 100% { transform: rotate(0deg); }
              10%, 30% { transform: rotate(15deg); }
              20%, 40% { transform: rotate(-15deg); }
            }
            .animate-ring {
              animation: ring 2s ease-in-out infinite;
              transform-origin: center bottom;
            }
          `}</style>

          <a
            href="tel:9737388388"
            className="hidden md:flex items-center gap-2 bg-white text-[#264c92] px-4 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#264c92] animate-ring" />
            9737388388
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 relative">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="mt-14 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-base font-medium hover:text-white/80 transition"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4">
             
            </div>
          </nav>

          <a
            href="/contact"
            className="mt-6 w-full block text-center bg-white text-[#264c92] px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg text-sm transition"
          >
            Let’s Transform
          </a>
        </div>
      </div>
    </header>
  );
};
