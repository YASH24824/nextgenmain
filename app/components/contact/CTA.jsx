"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTAProfessionalDark() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      setError("⚠️ Please enter your email!");
      return;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError("⚠️ Please enter a valid email address!");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const payload = {
        name: "",
        email: trimmedEmail,
        phone: "",
        message: "Newsletter subscription from Contact Page",
        captchaAnswer: "",
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Origin': typeof window !== 'undefined' ? window.location.origin : '',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error(result.error || 'Server error');
      }
    } catch (error) {
      console.error(error);
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 flex justify-center items-center bg-[#ebf2f8]">
      {/* CTA Card */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full mx-4 lg:mx-8 bg-gradient-to-r from-[#05325f] to-[#5b93ca] rounded-3xl shadow-2xl overflow-hidden border border-[#245586] px-8 lg:px-12 py-10 lg:py-8">

        {/* Left Side: Text Content */}
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-white">
            Unlock <span className="text-[#a8c8e8]">Growth Potential</span> Today
          </h2>
          <p className="text-gray-200 text-base lg:text-sm mt-3 leading-relaxed">
            Enter your email to schedule your free consultancy session. Elevate your business with professional strategies.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 lg:flex-none lg:min-w-[480px]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl border-2 border-white/30 bg-white text-gray-800 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-[#76a5d3]/50 transition-all whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "Sending..." : submitted ? "✅ Booked!" : "Book Now"}
              {!submitted && !loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          {submitted && (
            <p className="text-green-300 text-sm font-medium mt-3 animate-fadeIn">
              Thank you! We&apos;ll contact you shortly.
            </p>
          )}
          {error && (
            <p className="text-red-300 text-sm font-medium mt-3 animate-fadeIn">
              {error}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
}