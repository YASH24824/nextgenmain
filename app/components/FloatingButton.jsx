'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    company: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: '',
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.company ? `Free Consultation - ${formData.company}` : "Free Consultation Booking",
        site: "NextGen Consultancy - Floating Button"
      };

      const response = await fetch('https://resend-mail-worker.vatsal-9e7.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', phone: '', company: '' });
      } else {
        throw new Error(result.error || 'Server error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={togglePopup}
            className="relative w-16 h-48 flex flex-col items-center justify-center
               bg-gradient-to-b from-[#1c3a6d] to-[#4975b8]
               text-white font-semibold text-sm sm:text-base tracking-wide
               rounded-r-3xl overflow-hidden
               shadow-lg shadow-[#245586]/50
               hover:scale-105 hover:shadow-xl hover:shadow-[#76a5d3]/70
               transition-all duration-300"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            aria-label="Book a Consultation"
          >
            {/* Button text */}
            <span className="relative z-10 text-center rotate-180">Free Consultation</span>

            {/* Subtle moving glow overlay */}
            <span className="absolute inset-0 bg-white opacity-10 animate-[glow_3s_linear_infinite]"></span>
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-40">
          <div
            ref={popupRef}
            className={`bg-white w-50 max-w-sm shadow-lg p-6 rounded-lg transition-all duration-500
              ${isOpen ? "animate-flipLeft" : "opacity-0"}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#05325f] text-xl font-bold">
                Book a Free Consultation
              </h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close">
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded mb-4 text-sm">
                ✅ Your message has been sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John Doe"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-60 px-3 py-2 border rounded-lg text-sm text-black ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-60 px-3 py-2 border rounded-lg text-sm text-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+911234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-60 px-3 py-2 border border-gray-300 rounded-lg text-sm text-black"
                />
              </div>

              <p className="text-xs text-gray-600">
                By submitting, you acknowledge that you have <br /> read and agreed to the{" "}
                <Link href="/terms-condition" className="text-[#05325f] hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[#05325f] hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-60 bg-gradient-to-b from-[#245586] to-[#76a5d3] hover:bg-[#1d456d] text-white py-2.5 rounded-lg font-medium transition disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Book Consultation'}
              </button>
            </form>

            <div className="mt-4 text-sm text-gray-500 text-center">
              Already a client?{" "}
              <Link href="/contact" className="text-[#245586] hover:underline">
                Reach our 24/7 Support
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes glow {
          0% { transform: translateY(-100%) }
          50% { transform: translateY(100%) }
          100% { transform: translateY(-100%) }
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingButton;
