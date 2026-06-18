"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Ensure the domain we send to the leads API is always in a consistent format
const normalizeDomain = (domain) => {
  const fallback = "nextgenbusiness.co.in";
  if (!domain) return fallback;
  // Remove protocol if present
  let cleanDomain = domain.replace(/^https?:\/\//, "");
  // Remove trailing slash if present
  cleanDomain = cleanDomain.replace(/\/$/, "");
  return cleanDomain;
};

// Safely parse JSON responses, with robust logging for production debugging
const parseJsonSafely = async (response, context = "lead-api") => {
  let data = {};
  try {
    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();

    if (text && contentType.includes("application/json")) {
      data = JSON.parse(text);
    } else if (text) {
      console.error("Non-JSON response from API", {
        context,
        status: response.status,
        statusText: response.statusText,
        contentType,
        bodyPreview: text.substring(0, 500),
      });
    }
  } catch (error) {
    console.error("Error parsing JSON response", { context, error });
  }

  return data || {};
};

const ContactUs = ({ onClose, selectedService }) => {
  const popupRef = useRef(null);
  const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

  // Form data state matching demo structure
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  message: "",
  service: selectedService || "",
});

  // Status state from demo
  const [isStateOpen, setIsStateOpen] = useState(false);
const [stateSearch, setStateSearch] = useState("");
const filteredStates = states.filter((state) =>
  state.toLowerCase().includes(stateSearch.toLowerCase())
);
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const [errors, setErrors] = useState({});

  // Set message when selectedService changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in ${selectedService}`,
      }));
    }
  }, [selectedService]);

  // Handle form input changes from demo
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear field-specific error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Validation logic from demo
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
          "Phone number should be between 10 and 15 digits",
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
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission from demo
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({
        loading: false,
        message: "Please fill all required fields correctly",
        error: true,
      });
      if (!formData.state) {
  newErrors.state = "State is required";
}

if (!formData.city.trim()) {
  newErrors.city = "City is required";
}
      return;
    }

    try {
    const payload = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  state: formData.state,
  city: formData.city,
  domain: normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN),
  message: `${formData.message}, Service Type : ${selectedService}`,
};

      // const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      //     "Origin": `https://${normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN)}`,
      //   },
      //   credentials: "include",
      //   body: JSON.stringify(payload),
      // });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await parseJsonSafely(response, "contactus-submit");

      if (!response.ok) {
        const rawMessage =
          data?.error ||
          data?.message ||
          (response.status
            ? `Server error: ${response.status} ${response.statusText || ""}`
            : "");

        const errorMessage =
          rawMessage || "Something went wrong. Please try again later.";

        console.error("ContactUs submission API error", {
          status: response.status,
          statusText: response.statusText,
          payload,
          error: errorMessage,
        });

        setStatus({
          loading: false,
          message: errorMessage,
          error: true,
        });
        return;
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
      setStatus({
        loading: false,
        message: "Thank you! Your application has been submitted successfully.",
        error: false,
      });
    } catch (error) {
      console.error("Lead submission error:", error);
      setStatus({
        loading: false,
        message: "An error occurred. Please try again later.",
        error: true,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto overflow-hidden animate-scaleIn flex flex-col md:flex-row"
      >
        {/* Left Column - Image/Visual Section */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-[#1c3a6d] to-[#2c5282] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white"></div>
          </div>

          <div className="relative z-10 p-6 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Apply for {selectedService}
              </h2>
              <p className="text-white/90 text-base mb-4">
                Complete the form and our experts will contact you within 24
                hours.
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-md mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Fast Processing</h4>
                    <p className="text-white/80 text-xs">
                      Average approval in 10 days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-md mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Secure & Confidential
                    </h4>
                    <p className="text-white/80 text-xs">
                      Your information is protected
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-md mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Expert Guidance</h4>
                    <p className="text-white/80 text-xs">
                      Professional support throughout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Section */}
        <div className="md:w-3/5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1c3a6d] to-[#4975b8] p-4 text-white md:rounded-tr-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Application Form</h3>
                <p className="text-white/90 text-xs">{selectedService}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-4 md:p-5">
            {/* Status messages */}
            {status.message && (
              <div
                className={`${
                  status.error
                    ? "bg-red-50 border-red-200 text-red-700"
                    : "bg-green-50 border-green-200 text-green-700"
                } border px-4 py-3 rounded-lg mb-4 text-sm`}
              >
                {status.message}
              </div>
            )}

            {/* Form - Compact layout */}
            <form onSubmit={handleSubmit} className="space-y-3 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4975b8] focus:border-transparent outline-none transition-all text-sm ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,15}"
                    title="Phone number should be between 10 and 15 digits"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4975b8] focus:border-transparent outline-none transition-all text-sm ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email Field - Full width */}
          <div>
    <label className="block text-gray-700 font-medium mb-1 text-xs">
      Email Address *
    </label>

    <input
      type="email"
      name="email"
      placeholder="john@example.com"
      value={formData.email}
      onChange={handleChange}
      required
      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4975b8] focus:border-transparent outline-none transition-all text-sm ${
        errors.email ? "border-red-500" : "border-gray-300"
      }`}
    />

    {errors.email && (
      <p className="text-red-500 text-xs mt-1">
        {errors.email}
      </p>
    )}
  </div>

  {/* State Dropdown */}

  <div className="relative">
    <label className="block text-gray-700 font-medium mb-1 text-xs">
      State *
    </label>

    <button
      type="button"
      onClick={() => setIsStateOpen(!isStateOpen)}
      className={`w-full px-3 py-2 border rounded-lg text-left text-sm bg-white ${
        errors.state ? "border-red-500" : "border-gray-300"
      }`}
    >
      {formData.state || "Select State"}
    </button>

    {isStateOpen && (
      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl">

        <input
          type="text"
          placeholder="Search state..."
          value={stateSearch}
          onChange={(e) => setStateSearch(e.target.value)}
          className="w-full p-2 border-b outline-none text-sm"
        />

        <div className="max-h-56 overflow-y-auto">
          {filteredStates.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  state,
                }));
                setIsStateOpen(false);
                setStateSearch("");
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
            >
              {state}
            </button>
          ))}
        </div>
      </div>
    )}

    {errors.state && (
      <p className="text-red-500 text-xs mt-1">
        {errors.state}
      </p>
    )}
  </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-xs">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your funding needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4975b8] focus:border-transparent outline-none transition-all text-sm ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start pt-2">
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
                    className="text-[#1c3a6d] hover:underline font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#1c3a6d] hover:underline font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-[#1c3a6d] to-[#4975b8] hover:from-[#153056] hover:to-[#3a63a0] text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 mt-2"
              >
                {status.loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-4 w-4 mr-2 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Apply Now"
                )}
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-600">
                Need immediate assistance?{" "}
                <Link
                  href="/contact"
                  className="text-[#1c3a6d] hover:underline font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Contact 24/7 Support
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure & Confidential Submission
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
