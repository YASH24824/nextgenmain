"use client";

import { useState } from "react";

// Ensure the domain we send to the leads API is always in a consistent format
const normalizeDomain = (domain) => {
  const fallback = "https://nextgenbusiness.co.in";
  if (!domain) return fallback;
  if (domain.startsWith("http://") || domain.startsWith("https://")) {
    return domain;
  }
  return `https://${domain}`;
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

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    
    // Clear status message
    if (status.message) {
      setStatus({ message: "", error: false });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-15 digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", error: false });

    if (!validate()) {
      setStatus({
        message: "Please fill all required fields correctly",
        error: true,
      });
      return;
    }

    setLoading(true);

    // Build message including company
    const messageParts = [];
    if (formData.company.trim()) {
      messageParts.push(`Company: ${formData.company}`);
    }
    messageParts.push("Solution Page Inquiry");
    const message = messageParts.join(", ");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.mobile.trim(),
      message: message,
      captchaAnswer: "", // No CAPTCHA for this form
      domain: normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN),
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await parseJsonSafely(response, "solution-form-submit");

      if (!response.ok) {
        const rawMessage =
          data?.error ||
          data?.message ||
          (response.status
            ? `Server error: ${response.status} ${response.statusText || ""}`
            : "");

        const errorMessage =
          rawMessage || "Something went wrong. Please try again later.";

        console.error("Solution form submission API error", {
          status: response.status,
          statusText: response.statusText,
          payload,
          error: errorMessage,
        });

        setStatus({
          message: errorMessage,
          error: true,
        });
        return;
      }

      setFormData({ name: "", mobile: "", company: "", email: "" });
      setErrors({});
      setStatus({
        message: "Thank you! Your message has been sent successfully.",
        error: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        message: "An error occurred. Please try again later.",
        error: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-[#05325f] text-3xl md:text-[46.6px] mb-4">
            Get started with today
          </h2>
          <p className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto">
            We help you shape your vision into bold, practical action.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] p-8 md:p-12">
          {/* Status Message */}
          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium shadow ${
                status.error
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-green-50 border border-green-200 text-green-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - Name and Mobile No. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg ${
                    errors.name ? "border-red-500" : "border-[#e2e8f0]"
                  }`}
                  placeholder="Name *"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg ${
                    errors.mobile ? "border-red-500" : "border-[#e2e8f0]"
                  }`}
                  placeholder="Mobile No. *"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Second Row - Company and E-Mail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg"
                  placeholder="Company"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg ${
                    errors.email ? "border-red-500" : "border-[#e2e8f0]"
                  }`}
                  placeholder="E-Mail *"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Send Message Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white font-semibold rounded-lg hover:from-[#1e456f] hover:to-[#3a7ac2] transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
