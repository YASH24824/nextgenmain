"use client";

import { useEffect, useState } from "react";
import { ArrowRight, RefreshCcw } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  captchaAnswer: "",
};

const initialStatus = {
  loading: false,
  message: "",
  error: false,
};

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

export default function CTA() {
  const [formData, setFormData] = useState(initialForm);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(initialStatus);

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
        message: "Unable to load verification. Please refresh.",
        error: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10,15}$/;
      if (value && !phonePattern.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Phone number should be between 10 and 15 digits",
        }));
      }
    } else if (name === "name" && !value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "Name is required" }));
    } else if (name === "captchaAnswer" && !value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: "CAPTCHA answer is required",
      }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedCaptcha = formData.captchaAnswer.trim();
    const domainValue = normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN);
    const fallbackEmail = "subscriber@nextgenbusiness.cp.in";

    const newErrors = {};
    if (!trimmedName) newErrors.name = "Name is required";
    if (!trimmedPhone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10,15}$/.test(trimmedPhone)) {
      newErrors.phone = "Phone number should be between 10 and 15 digits";
    }
    if (!trimmedCaptcha) newErrors.captchaAnswer = "CAPTCHA answer is required";

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
        name: trimmedName,
        email: fallbackEmail,
        phone: trimmedPhone,
        captchaAnswer: trimmedCaptcha,
        domain: domainValue,
        message: "subscriber",
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await parseJsonSafely(response, "cta-submit");

      if (!response.ok) {
        const rawMessage =
          data?.error ||
          data?.message ||
          (response.status
            ? `Server error: ${response.status} ${response.statusText || ""}`
            : "");

        const errorMessage =
          rawMessage || "Something went wrong. Please try again later.";

        console.error("CTA submission API error", {
          status: response.status,
          statusText: response.statusText,
          payload,
          error: errorMessage,
        });

        // If CAPTCHA failed or expired, clear the answer and load a new one
        if (errorMessage.toLowerCase().includes("captcha")) {
          setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
          loadCaptcha();
        }

        setStatus({
          loading: false,
          message: errorMessage,
          error: true,
        });
        return;
      }

      // Success
      setFormData(initialForm);
      setErrors({});
      setStatus({
        loading: false,
        message: "Thank you! We will contact you shortly.",
        error: false,
      });
      loadCaptcha();
    } catch (error) {
      console.error("CTA submission error:", error);
      setStatus({
        loading: false,
        message: "An error occurred. Please try again later.",
        error: true,
      });
    }
  };

  return (
    <section className="w-full py-16 flex justify-center items-center bg-[#ebf2f8]">
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full mx-4 lg:mx-8 bg-gradient-to-r from-[#05325f] to-[#5b93ca] rounded-3xl shadow-2xl overflow-hidden border border-[#245586] px-8 lg:px-12 py-10 lg:py-8">
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-white">
            Unlock <span className="text-[#a8c8e8]">Growth Potential</span> Today
          </h2>
          <p className="text-gray-200 text-base lg:text-sm mt-3 leading-relaxed">
            Enter your details to schedule your free consultancy session.
            Elevate your business with professional strategies.
          </p>
        </div>

        <div className="flex-1 lg:flex-none lg:min-w-[520px]">
          {status.message && (
            <div
              className={`mb-3 px-4 py-3 rounded-lg text-sm font-medium shadow ${
                status.error
                  ? "bg-red-500/90 text-white"
                  : "bg-green-500/90 text-white"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl border-2 border-white/30 bg-white text-gray-800 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition text-sm
                    ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-200 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl border-2 border-white/30 bg-white text-gray-800 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition text-sm
                    ${errors.phone ? "border-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-200 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {captchaQuestion && (
              <div className="bg-white/90 rounded-xl border border-white/40 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#05325f]">
                    Security Verification
                  </span>
                  <button
                    type="button"
                    onClick={loadCaptcha}
                    className="flex items-center text-xs text-[#05325f] hover:text-[#245586]"
                  >
                    <RefreshCcw className="w-3.5 h-3.5 mr-1" />
                    Refresh
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[#f5f7fb] px-3 py-2 rounded border border-gray-200 font-mono text-sm font-bold text-gray-800 text-center">
                    {captchaQuestion}
                  </div>
                  <span className="text-gray-500 font-semibold">=</span>
                  <input
                    type="number"
                    name="captchaAnswer"
                    value={formData.captchaAnswer}
                    onChange={handleChange}
                    placeholder="Result *"
                    className={`w-24 sm:w-28 px-3 py-2 rounded border text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#245586] focus:border-[#245586] outline-none
                      ${errors.captchaAnswer ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  />
                </div>
                {errors.captchaAnswer && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.captchaAnswer}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e4976] to-[#4a7ba7] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-[#76a5d3]/50 transition-all whitespace-nowrap disabled:opacity-60"
            >
              {status.loading ? "Submitting..." : "Book Now"}
              {!status.loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

