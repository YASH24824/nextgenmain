"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import contact from "../../assets/contact.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", company: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile.trim())) newErrors.mobile = "Enter a valid 10-digit number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    if (!validate()) return;
    setLoading(true);

    try {
      // Split name into firstName and lastName
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.mobile,
        inquiryType: formData.company ? `Contact Form - ${formData.company}` : "Contact Form",
        site: "NextGen Consultancy - Contact Page"
      };

      const res = await fetch("https://resend-mail-worker.vatsal-9e7.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      if (res.ok) {
        setAlert({ type: "success", message: "✅ Email sent successfully!" });
        setFormData({ name: "", email: "", mobile: "", company: "" });
        setErrors({});
      } else {
        setAlert({ type: "error", message: data.error || "Something went wrong" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({ type: "error", message: "Network error!" });
    }
    setLoading(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#e8f4ff] py-12 px-4">

      <div className="w-full max-w-7xl mx-auto relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#76a5d3]/30">
        <div className="grid lg:grid-cols-2">

          <div className="relative h-full min-h-[500px] lg:min-h-full animate-fadeInLeft">
            {/* Gradient overlay */}
            <div className="absolute inset-0 w-full bg-gradient-to-tr from-[#1c4268] to-[#76a5d3] opacity-95 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#245586]/90 via-[#245586]/50 to-transparent flex flex-col items-center justify-center p-6 sm:p-10 text-center">

              {/* Icon */}
              <div className="mb-20 w-16 h-16 sm:w-20 sm:h-20 bg-[#245586] rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-soft">
                <svg className=" w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="md:text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                Let&apos;s Build Something Great Together
              </h2>

              <p className={`md:text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-md md:max-w-lg mb-4 sm:mb-6 drop-shadow`}>
                Partner with industry experts who deliver innovative solutions tailored to your unique business needs. We transform ideas into reality with expertise and dedication.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
                <div className="flex items-center space-x-2 bg-white backdrop-blur-sm rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-xl hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#05325f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-[#05325f] font-semibold text-xs sm:text-sm`}>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 bg-white backdrop-blur-sm rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-xl hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#05325f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-[#05325f] font-semibold text-xs sm:text-sm`}>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2 bg-white backdrop-blur-sm rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-xl hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#05325f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-[#05325f] font-semibold text-xs sm:text-sm`}>Fast Response</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-12 animate-fadeInRight bg-white">
            <div className="max-w-xl mx-auto">
              <div className="mb-8">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#245586] to-[#76a5d3] font-bold text-3xl mb-2">Send us a Message</h3>
                <p className={`text-gray-600`}>We&apos;ll get back to you within 24 hours</p>
              </div>

              <div className="space-y-6">
                {[
                  { field: "name", label: "Full Name", type: "text", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                  { field: "email", label: "Email Address", type: "email", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { field: "mobile", label: "Mobile Number", type: "tel", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { field: "company", label: "Company Name (Optional)", type: "text", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }
                ].map(({ field, label, type, icon }, idx) => (
                  <div key={idx} className="relative group">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className={`w-5 h-5 transition-colors duration-300 ${focusedField === field ? 'text-[#245586]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                        </svg>
                      </div>
                      <input
                        type={type}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={label}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white
                        ${errors[field] ? 'border-red-500 shadow-red-200' : focusedField === field ? 'border-[#245586] shadow-lg shadow-[#76a5d3]/30' : 'border-gray-200'}
                        hover:border-[#76a5d3] focus:bg-[#e8f4ff]/30`}
                      />
                      {errors[field] && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <svg className="w-5 h-5 text-red-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-2 ml-1 flex items-center animate-slideIn">
                        <span className="mr-1">⚠</span> {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {alert && (
                <div className={`mt-6 p-4 rounded-xl text-white text-center font-medium animate-slideIn shadow-xl ${alert.type === "success"
                  ? "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"
                  : "bg-gradient-to-r from-red-500 via-pink-500 to-rose-500"
                  }`}>
                  {alert.message}
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-8 px-6 py-4 bg-gradient-to-tr from-[#245586] to-[#76a5d3] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#76a5d3]/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#76a5d3] to-[#245586] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>

              <div className="mt-6 flex items-center justify-center space-x-2 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-green-500 animate-pulse-soft" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your information is secure and confidential</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
        .animate-slideIn { animation: slideIn 0.4s ease-out; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactPage;