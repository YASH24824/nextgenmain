"use client";
import { useState, useEffect } from "react";
import ContactUs from "./ContactUs";
import FloatingButtonSVG from "../../public/button/button.svg";


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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Floating Button with Wave + Buzz Effect */}
      <div className="fixed right-4 bottom-20 z-40 sm:bottom-24  xl:bottom-50">
        {/* Wave rings */}
        <div className="absolute inset-0 rounded-full animate-wave-ring1"></div>
        <div className="absolute inset-0 rounded-full animate-wave-ring2"></div>
        <div className="absolute inset-0 rounded-full animate-wave-ring3"></div>
        
        {/* Button with buzz */}
        <button
          onClick={toggleModal}
          className="relative block hover:scale-105 transition-all duration-300 animate-buzz"
        >
          <img 
            src={FloatingButtonSVG.src || FloatingButtonSVG}
            alt="Free Consultation"
            className="w-16 h-auto"
          />
        </button>
      </div>

      {/* ContactUs Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <ContactUs onClose={closeModal} selectedService={selectedService} />
        </div>
      )}

      <style jsx global>{`
        @keyframes wave-ring1 {
          0% {
            transform: scale(1);
            opacity: 0.6;
            box-shadow: 0 0 0 0 rgba(73, 117, 184, 0.7);
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
            box-shadow: 0 0 0 25px rgba(73, 117, 184, 0);
          }
        }

        @keyframes wave-ring2 {
          0% {
            transform: scale(1);
            opacity: 0.4;
            box-shadow: 0 0 0 0 rgba(73, 117, 184, 0.5);
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
            box-shadow: 0 0 0 40px rgba(73, 117, 184, 0);
          }
        }

        @keyframes wave-ring3 {
          0% {
            transform: scale(1);
            opacity: 0.2;
            box-shadow: 0 0 0 0 rgba(73, 117, 184, 0.3);
          }
          100% {
            transform: scale(2.0);
            opacity: 0;
            box-shadow: 0 0 0 55px rgba(73, 117, 184, 0);
          }
        }

        @keyframes buzz {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(1px, -1px);
          }
          50% {
            transform: translate(-1px, 1px);
          }
          75% {
            transform: translate(1px, -1px);
          }
        }

        .animate-wave-ring1 {
          animation: wave-ring1 2s ease-out infinite;
        }

        .animate-wave-ring2 {
          animation: wave-ring2 2.5s ease-out infinite;
        }

        .animate-wave-ring3 {
          animation: wave-ring3 3s ease-out infinite;
        }

        .animate-buzz {
          animation: buzz 0.3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingButton;