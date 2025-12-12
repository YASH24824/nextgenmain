"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Collateralfree from "../../assets/hotservice1.png";
import Naiff from "../../assets/hotservice2.png";
import SeedFund from "../../assets/hotservice3.png";
import GrantFund from "../../assets/hotservice4.png";
import StartupSeed from "../../assets/hotservice5.png";
import Pmegp from "../../assets/hotservice6.png";
import { motion } from "framer-motion";


export const HotServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const services = [
    {
      amount: "₹5 cr",
      title: "Collateral Free Loans",
      icon: Collateralfree,
      description: "Unlock capital without asset pledges",
      accent: "#bfd5eb"
    },
    {
      amount: "₹2 cr",
      title: "NAIFF Loans",
      icon: Naiff,
      description: "Infrastructure development funding",
      accent: "#a1c1e1"
    },
    {
      amount: "₹50 L",
      title: "Seed Fund",
      icon: SeedFund,
      description: "Early-stage startup acceleration",
      accent: "#76a5d3"
    },
    {
      amount: "₹10 cr",
      title: "Grant Fund",
      icon: GrantFund,
      description: "Non-repayable business grants",
      accent: "#5b93ca"
    },
    {
      amount: "₹1 cr",
      title: "Startup Seed Support",
      icon: StartupSeed,
      description: "Comprehensive startup ecosystem",
      accent: "#3278bd"
    },
    {
      amount: "₹50 L",
      title: "PMEGP",
      icon: Pmegp,
      description: "Micro enterprise generation program",
      accent: "#2e6dac"
    }
  ];


  const handleAvailNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
  };

  return (
    <>
      <style jsx global>{`
        @keyframes gradientBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-gradient-border {
          animation: gradientBorder 4s linear infinite;
        }
      `}</style>

      <section className="w-full min-h-screen py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Premium Header */}
          <div className="text-center mb-20">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 mb-8 hover:shadow-xl transition-all duration-300">
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-gray-900 text-sm font-bold tracking-wide">
                  LIVE NOW
                </span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-gray-600 text-sm font-semibold">
                🏛️ Government Backed Programs
              </span>
            </div>

            {/* Main Title with Gradient */}
            <h2 className="relative inline-block mb-6">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#1c4268] mb-4 relative inline-block cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Premium Funding
                <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
              </motion.h2>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c4268] to-[#3278bd] font-black text-5xl md:text-7xl tracking-tight leading-tight">
                Ecosystem
              </span>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-[#1c4268] to-[#3278bd] rounded-full"></div>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mt-8">
              Access India&apos;s most prestigious funding programs with streamlined approval processes and dedicated expert support
            </p>

            {/* Stats Bar */}
            {/* <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-black text-[#1c4268]">₹50Cr+</div>
                <div className="text-sm text-gray-600 font-semibold mt-1">Disbursed</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#1c4268]">5000+</div>
                <div className="text-sm text-gray-600 font-semibold mt-1">Businesses Funded</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#1c4268]">10 Days</div>
                <div className="text-sm text-gray-600 font-semibold mt-1">Avg. Approval</div>
              </div>
            </div> */}
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Animated gradient border */}
                <div
                  className="absolute inset-0 rounded-2xl p-[2px] bg-[#1c4268] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 50%'
                  }}
                >
                  <div className="absolute inset-[2px] rounded-2xl bg-white animate-gradient-border"></div>
                </div>

                {/* Content wrapper with higher z-index */}
                <div className="relative z-10">
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}08 0%, ${service.accent}03 100%)`
                    }}
                  ></div>

                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Icon without background */}
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <div className="w-16 h-16 relative rounded-xl overflow-hidden">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain"
                          sizes="100%"
                        />
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className={` text-green-700 text-xs font-semibold`}>Active</span>
                    </div>
                  </div>

                  {/* Amount & Title */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span
                        className={` text-4xl font-bold tracking-tight text-[#1c4268]`}
                      >
                        {service.amount}
                      </span>
                      <span className={` text-gray-400 text-sm font-medium`}>
                        funding
                      </span>
                    </div>
                    <h4 className={` text-gray-900 text-lg font-semibold leading-snug`}>
                      {service.title}
                    </h4>
                  </div>

                  {/* Info Tags */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#1c4268]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className={` text-gray-600 text-xs font-medium`}>Fast Track</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={` text-gray-600 text-xs font-medium`}>Verified</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleAvailNow(service.title)}
                    className={` w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group/btn bg-gradient-to-br from-[#1c4268] to-[#5b93ca]`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Apply Now</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className="relative mt-5 max-w-screen-md w-full mx-auto bg-gradient-to-br from-[#1c4268] to-[#5b93ca] text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 space-y-4 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl border border-white/20 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold leading-tight">
                Need Funding Help?
              </h4>
              <p className="text-sm text-white/80">
                Get expert guidance on your funding journey — no obligations.
              </p>

              {/* CTA Button */}
              <a
                href="/solution"
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-white text-[#1c4268] font-semibold rounded-xl transition hover:shadow-md hover:scale-[1.02]"
              >
                Explore Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="relative bg-[#15324f] p-10 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>

              {/* Gradient Orbs */}
              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#1c4268] to-[#3278bd] backdrop-blur-md rounded-2xl mb-4 border border-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
                    Begin Your Journey
                  </h3>
                  <p className="text-white/80 text-base font-semibold mb-2">
                    {selectedService}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-white text-xs font-bold">Average approval: 10 days</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-all p-2 hover:bg-white/10 rounded-xl group"
                >
                  <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Form */}
            <div className="p-10">
              <p className="text-gray-600 text-center mb-8 font-medium">
                Fill in your details and our expert team will contact you within 24 hours to guide you through the application process.
              </p>

              {/* Simple Form Placeholder */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500/30 focus:outline-none transition-colors font-medium"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500/30 focus:outline-none transition-colors font-medium"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500/30 focus:outline-none transition-colors font-medium"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500/30 focus:outline-none transition-colors font-medium"
                />
                <button className="w-full py-4 bg-gradient-to-br from-[#1c4268] to-[#2e6dac] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Submit Application</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </button>
              </div>

              <p className="text-gray-500 text-xs text-center mt-6">
                🔒 Your information is secure and will never be shared with third parties
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
