"use client";

import { useState, useEffect, useRef } from "react";
import ContactUs from "./ContactUs"; // Adjust the import path as needed

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "Free Consultation Booking"
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={toggleModal}
          className="relative w-16 h-48 flex flex-col items-center justify-center bg-gradient-to-b from-[#1c3a6d] to-[#4975b8] text-white font-semibold text-sm sm:text-base tracking-wide rounded-r-3xl overflow-hidden shadow-lg shadow-[#245586]/50 hover:scale-105 hover:shadow-xl hover:shadow-[#76a5d3]/70 transition-all duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Book a Consultation"
        >
          {/* Button text */}
          <span className="relative z-10 text-center rotate-180">
            Free Consultation
          </span>

          {/* Subtle moving glow overlay */}
          <span className="absolute inset-0 bg-white opacity-10 animate-[glow_3s_linear_infinite]"></span>
        </button>
      </div>

      {/* ContactUs Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <ContactUs onClose={closeModal} selectedService={selectedService} />
        </div>
      )}

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes glow {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default FloatingButton;
