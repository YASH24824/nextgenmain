"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captchaAnswer: "",
    service: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const serviceOptions = [
    "Loans",
    "Certifications",
    "Digital Services",
    "General Consultancy",
    "Consulting Services",
  ];

  // Load CAPTCHA on component mount
  useEffect(() => {
    loadCaptcha();
  }, []);

  const loadCaptcha = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CAPTCHA, {
        cache: "no-store",
        credentials: "include",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to load CAPTCHA");
      }

      const data = await response.json();
      setCaptchaQuestion(data.question);
    } catch (error) {
      console.error("Error loading CAPTCHA:", error);
      setStatus({
        loading: false,
        message: "Unable to load CAPTCHA. Please refresh the page.",
        error: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear field-specific error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Validation logic
    if (name === "email") {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      if (value && !emailPattern.test(value)) {
        e.target.setCustomValidity("Please enter a valid email address");
        setErrors((prev) => ({
          ...prev,
          [name]: "Please enter a valid email address",
        }));
      } else {
        e.target.setCustomValidity("");
      }
    } else if (name === "phone") {
      const phonePattern = /^[0-9]{10,15}$/;
      if (value && !phonePattern.test(value)) {
        e.target.setCustomValidity(
          "Phone number should be between 10 and 15 digits"
        );
        setErrors((prev) => ({
          ...prev,
          [name]: "Phone number should be between 10 and 15 digits",
        }));
      } else {
        e.target.setCustomValidity("");
      }
    } else if (name === "name") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, [name]: "Name is required" }));
      }
    } else if (name === "message") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, [name]: "Message is required" }));
      }
    } else if (name === "captchaAnswer") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          [name]: "CAPTCHA answer is required",
        }));
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be between 10 and 15 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.captchaAnswer.trim())
      newErrors.captchaAnswer = "CAPTCHA answer is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({
        loading: false,
        message: "Please fill all required fields correctly",
        error: true,
      });
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        captchaAnswer: formData.captchaAnswer,
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        message: `${formData.message}, Service Type: ${formData.service}`,
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          Origin: typeof window !== "undefined" ? window.location.origin : "",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          captchaAnswer: "",
          service: "",
        });

        setErrors({});
        setStatus({
          loading: false,
          message: "Thank you! Your message has been sent successfully.",
          error: false,
        });

        loadCaptcha();
      } else {
        setStatus({
          loading: false,
          message:
            data.error || "Something went wrong. Please try again later.",
          error: true,
        });

        if (data.error && data.error.toLowerCase().includes("captcha")) {
          loadCaptcha();
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        loading: false,
        message: "An error occurred. Please try again later.",
        error: true,
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#e8f4ff] py-4 px-4 sm:px-6 lg:py-8">
      <div className="w-full max-w-6xl mx-auto relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#76a5d3]/20">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Visual Section - More Compact */}
          <div className="relative min-h-[300px] lg:min-h-[500px]">
            <div className="absolute inset-0 w-full bg-gradient-to-tr from-[#1c4268] to-[#76a5d3] opacity-95 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#245586]/90 via-[#245586]/50 to-transparent flex flex-col items-center justify-center p-4 sm:p-6 text-center">
              {/* Icon - Smaller */}
              <div className="mb-6 sm:mb-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#245586] rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              {/* Title - Smaller */}
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 drop-shadow">
                Let&apos;s Build Something Great Together
              </h2>

              <p
                className={`text-white/90 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm mb-3 sm:mb-4 drop-shadow px-2`}
              >
                Partner with industry experts who deliver innovative solutions
                tailored to your unique business needs.
              </p>

              {/* Badges - Smaller */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-2 px-2">
                {["24/7 Support", "Expert Team", "Fast Response"].map(
                  (text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 shadow-lg hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#05325f] mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`text-[#05325f] font-semibold text-xs`}>
                        {text}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Form Section - More Compact */}
          <div className="p-2 sm:p-6 lg:p-8 bg-white">
            <div className="max-w-md mx-auto">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#245586] to-[#76a5d3] font-bold text-xl sm:text-2xl mb-1">
                  Send us a Message
                </h3>
                <p className={`text-gray-600 text-xs sm:text-sm`}>
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-white text-center font-medium shadow text-sm ${
                    status.error
                      ? "bg-gradient-to-r from-red-500 to-rose-500"
                      : "bg-gradient-to-r from-green-500 to-teal-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Grid for Name and Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className={`w-4 h-4 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-[#245586]"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Full Name *"
                        className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white text-sm
                          ${
                            errors.name
                              ? "border-red-500"
                              : focusedField === "name"
                              ? "border-[#245586]"
                              : "border-gray-200"
                          }
                          hover:border-[#76a5d3] focus:bg-[#e8f4ff]/20`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className={`w-4 h-4 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-[#245586]"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Mobile Number *"
                        className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white text-sm
                          ${
                            errors.phone
                              ? "border-red-500"
                              : focusedField === "phone"
                              ? "border-[#245586]"
                              : "border-gray-200"
                          }
                          hover:border-[#76a5d3] focus:bg-[#e8f4ff]/20`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field - Full width */}
                <div className="relative group">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          focusedField === "email"
                            ? "text-[#245586]"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Email Address *"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white text-sm
                        ${
                          errors.email
                            ? "border-red-500"
                            : focusedField === "email"
                            ? "border-[#245586]"
                            : "border-gray-200"
                        }
                        hover:border-[#76a5d3] focus:bg-[#e8f4ff]/20`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Type Dropdown - Full width */}
                <div className="relative group">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          focusedField === "service"
                            ? "text-[#245586]"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-10 pr-8 py-2.5 rounded-lg border transition-all duration-300 outline-none text-gray-900 bg-white text-sm appearance-none cursor-pointer
                        ${
                          errors.service
                            ? "border-red-500"
                            : focusedField === "service"
                            ? "border-[#245586]"
                            : "border-gray-200"
                        }
                        hover:border-[#76a5d3] focus:bg-[#e8f4ff]/20`}
                    >
                      <option value="">Select Service Type *</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message Field - Full width */}
                <div className="relative group">
                  <div className="relative">
                    <div className="absolute left-3 top-3 pointer-events-none">
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          focusedField === "message"
                            ? "text-[#245586]"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message *"
                      rows="2"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white text-sm resize-none
                        ${
                          errors.message
                            ? "border-red-500"
                            : focusedField === "message"
                            ? "border-[#245586]"
                            : "border-gray-200"
                        }
                        hover:border-[#76a5d3] focus:bg-[#e8f4ff]/20`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* CAPTCHA Section - More Compact */}
                {captchaQuestion && (
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-4 h-4 bg-blue-600 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2.5 w-2.5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                          Security Verification
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={loadCaptcha}
                        className="inline-flex items-center text-xs text-black hover:text-blue-600 transition-colors"
                        title="Refresh verification code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Refresh
                      </button>
                    </div>

                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs text-gray-500">
                          Solve this equation to continue
                        </label>
                        <span className="text-xs text-gray-400">Required</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-white px-3 py-2 rounded border border-gray-300 font-mono text-base font-bold text-gray-800 text-center tracking-wider">
                          {captchaQuestion}
                        </div>
                        <div className="text-xl text-gray-400">=</div>
                        <div className="flex-1">
                          <input
                            type="number"
                            name="captchaAnswer"
                            value={formData.captchaAnswer}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("captchaAnswer")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Result *"
                            className={`w-full px-3 py-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm font-medium
                              ${
                                errors.captchaAnswer
                                  ? "border-red-500 bg-red-50"
                                  : "border-gray-300"
                              }`}
                          />
                        </div>
                      </div>
                    </div>

                    {errors.captchaAnswer && (
                      <div className="flex items-start space-x-2 p-2 bg-red-50 border border-red-200 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-red-600 text-xs font-medium">
                          {errors.captchaAnswer}
                        </p>
                      </div>
                    )}

                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2.5 w-2.5 mr-1 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        This verification helps prevent automated submissions
                      </p>
                    </div>
                  </div>
                )}

                {/* Terms Checkbox */}
                <div className="flex items-start pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-0.5 mr-2"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the{" "}
                    <Link
                      href="/terms-condition"
                      className="text-[#245586] hover:underline font-medium"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[#245586] hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-tr from-[#245586] to-[#76a5d3] text-white font-bold rounded-lg shadow-lg hover:shadow-[#76a5d3]/30 transform hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-sm"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {status.loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#76a5d3] to-[#245586] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>

                <div className="mt-3 flex items-center justify-center space-x-2 text-gray-600 text-xs">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Your information is secure and confidential</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
