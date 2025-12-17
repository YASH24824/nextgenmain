"use client";

import React, { useState, useEffect } from "react";

export const ContactForm = ({ serviceTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Clear alert automatically after 3s
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  // ✅ Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    if (!validate()) return;

    setLoading(true);

    // Split name into firstName and lastName
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      firstName,
      lastName,
      email: formData.email,
      phone: formData.mobile,
      inquiryType: serviceTitle || "General Inquiry",
      site: "NextGen Consultancy - Service Inquiry",
    };

    try {
      console.log("📤 Sending form data:", payload);

      const res = await fetch(
        "https://resend-mail-worker.vatsal-9e7.workers.dev/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setAlert({
          type: "success",
          message: "Form submitted successfully ✅",
        });
        setFormData({ name: "", email: "", mobile: "", company: "" });
        setErrors({});
        onClose?.(); // close modal if passed
      } else {
        setAlert({
          type: "error",
          message: data.error || "Something went wrong",
        });
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setAlert({ type: "error", message: "Network error!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Floating alert (toast style) */}
      {alert && (
        <div
          className={`absolute -top-14 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-500 ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={loading}
            className={`w-full px-2.5 py-2.5     border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#245586]"
            } text-[#334155] shadow-sm`}
            placeholder="Full Name *"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <input
            type="tel"
            id="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            disabled={loading}
            className={`w-full px-2.5 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.mobile
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#245586]"
            } text-[#334155] shadow-sm`}
            placeholder="Mobile No. *"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-2.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#245586] text-[#334155] shadow-sm"
            placeholder="Company Name *"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className={`w-full px-2.5 py-2.5 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#245586]"
            } text-[#334155] shadow-sm`}
            placeholder="Email Address *"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-2.5 py-2.5 bg-gradient-to-r from-[#245586] to-[#3a7ac2] text-white font-semibold rounded-lg hover:from-[#1e456f] hover:to-[#245586] transition-all duration-300 text-lg shadow-md disabled:opacity-70`}
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};
