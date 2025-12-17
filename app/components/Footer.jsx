"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#05325f] to-[#000000] text-white">
      {/* ===== 3-COLUMN MAIN FOOTER ===== */}
      <div className="container mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-10">
        {/* --- Column 1: Logo + Tagline --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <Image
            src="/images/whiteLogo.png"
            alt="Next-Gen Logo"
            width={220}
            height={60}
            className="object-contain"
          />
          <p className="text-sm opacity-80 leading-relaxed">
            Aapke paas vision hai, hum handle karenge chaos. Let&apos;s get to
            work together.
          </p>
          <h4 className="text-white font-semibold text-lg mt-1 mb-1">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/company/nextgen-business-consultancy"
              target="_blank"
              className="w-10 h-10 bg-[#1c4268] hover:bg-[#76a5d3] rounded-full flex items-center justify-center transition border border-[#245589]"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/"
              target="_blank"
              className="w-10 h-10 bg-[#1c4268] hover:bg-[#76a5d3] rounded-full flex items-center justify-center transition border border-[#245589]"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/next_gen_business_consultancy/"
              target="_blank"
              className="w-10 h-10 bg-[#1c4268] hover:bg-[#76a5d3] rounded-full flex items-center justify-center transition border border-[#245589]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@NextGen-Business-Consultancy"
              target="_blank"
              className="w-10 h-10 bg-[#1c4268] hover:bg-[#76a5d3] rounded-full flex items-center justify-center transition border border-[#245589]"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* --- Column 2: Navigation + Social --- */}
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left md:ml-20">
          <h4 className="text-white font-semibold mb-0 text-lg relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            <li>
              <a href="/about" className="hover:text-[#76a5d3] transition">
                Who we are
              </a>
            </li>
            <li>
              <a href="/solution" className="hover:text-[#76a5d3] transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#76a5d3] transition">
                Connect
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#76a5d3] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-condition"
                className="hover:text-[#76a5d3] transition"
              >
                Terms of Service
              </a>
            </li>
            {/* <li><a href="#" className="hover:text-[#76a5d3] transition">Sitemap</a></li> */}
          </ul>
        </div>

        {/* --- Column 3: Contact + Features --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h4
            className="text-white font-semibold text-lg mb-0 relative cursor-pointer
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </h4>

          <div className="flex flex-col gap-3 text-sm opacity-90">
            {/* Address */}
            <div className="flex items-start justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-white mt-0.5" />
              <p>
                Silver Redience-2, Science City Road,
                <br />
                Opp. Empire Business House, Sola,
                <br />
                Ahmedabad, Gujarat, India, 380060
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5 text-white" />
              <p>support@nextgenbusiness.co.in</p>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-white" />
              <p>+91-9737388388</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Important Notice & Disclaimer (Full Width Row) ===== */}
      <div className="container mx-auto max-w-7xl px-6 py-8 text-[14px] sm:text-[11px] opacity-80 leading-relaxed border-t border-[#3278bd]">
        <p className={` mb-2`}>
          Important Notice: All payments for our services must be made
          exclusively to Next-Gen Business Consultancy Pvt. Ltd. through a
          Current Account on NEFT, IMPS, RTGS, or approved digital payment
          platforms (Cashfree, Razorpay, Paytm/Axis). We do not accept payments
          through personal accounts or third-party intermediaries.
        </p>
        <p className="mb-4">
          Disclaimer: Next-Gen Business Consultancy Pvt. Ltd. is a private
          consultancy firm specializing in start-up advisory services across
          India. We provide professional guidance tailored to the needs of
          emerging enterprises. We operate independently and are not affiliated
          with any government, non-government agency, institution, or
          department.
        </p>

        {/* ===== Features Row (Single Row, Full Width) ===== */}
        <div className="bg-white w-full py-4 px-4 text-[#1c4268] font-semibold">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1c4268] rounded-full"></span>
              <span>Founder-First Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1c4268] rounded-full"></span>
              <span>Speed + Simplicity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1c4268] rounded-full"></span>
              <span>Expert-Led Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="bg-[#1c4268] border-t border-[#3278bd] py-6">
        <div className="container mx-auto max-w-7xl px-6 flex justify-center items-center text-sm opacity-90">
          <p>© 2025 Next-Gen Business Consultancy PVT. LTD</p>
        </div>
      </div>
    </footer>
  );
}
