"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, use } from "react";
const Homebg = "/assets/home-bg.png";
import { notFound } from "next/navigation";
import { businessTypes } from "../data/businessData";
import { Header } from "@/app/components/Header";
import { FileText, Handshake } from "lucide-react";

export default function InheritancePage({ params }) {
  const [loading, setLoading] = useState(true);

  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const business = businessTypes.find((b) => b.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!business) return notFound();

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#1c4268] rounded-full animate-spin" />

          {/* Text */}
          <p className="text-sm font-medium text-[#1c4268]">Loading...</p>
        </div>
      </div>
    );
  }
  // Smooth scroll function with offset
  const handleNavigationClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 120;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}

        {/* Hero Section */}
        <section className="relative  pt-40 py-16">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[#245586]">
            <Image
              src={Homebg}
              alt="Hero Banner"
              fill
              priority
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 "></div>
          </div>

          <div className="absolute inset-0"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {business.bigtitlle}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {business.description}
            </p>

            {/* CTA Buttons */}
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-32 space-y-6">
                {/* Quick Navigation */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-[#1C4268] text-lg mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#1C4268]" />
                    Quick Navigation
                  </h3>
                  <nav className="space-y-2">
                    {business.sideindex?.map((item, index) => {
                      const targetId = item.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <button
                          key={index}
                          onClick={(e) => handleNavigationClick(e, targetId)}
                          className="block w-full text-left py-1 px-4 font-medium text-[#1C4268] rounded-lg hover:bg-blue-50 transition-colors text-sm"
                        >
                          {item}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Similar Services */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-[#1C4268] text-lg mb-4 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-[#1C4268]" />
                    Similar Services
                  </h3>
                  <div className="space-y-2">
                    {business.sidesimilarites?.map((service, index) => (
                      <Link
                        key={index}
                        href={`/service/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block py-3 px-4 text-[#1C4268] rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-[#1C4268]">
                          {service}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <section
                id="introduction"
                className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                  Introduction
                </h2>
                <p className="text-lg font-medium text-[#1C4268] leading-relaxed mb-4">
                  {business.content?.introduction}
                </p>
                <p className="text-base font-medium text-[#1C4268] leading-relaxed">
                  {business.details}
                </p>
              </section>

              {/* What is it? */}
              {business.content?.whatIs && (
                <section
                  id="what-is"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    What is {business.title}?
                  </h2>
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-base font-medium leading-relaxed text-[#4B5563]">
                      {business.content.whatIs}
                    </p>
                  </div>
                </section>
              )}

              {/* Key Features/Advantages */}
              {(business.content?.keybenefits ||
                business.content?.keyAdvantages) && (
                <section
                  id="key-features"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    {business.content.keybenefits
                      ? "Key Benefits"
                      : "Key Advantages"}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-0">
                    {(
                      business.content.keybenefits ||
                      business.content.keyAdvantages
                    )?.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-2.5 w-2 h-2 rounded-full bg-[#1C4268]"></div>
                        <span className="text-base font-medium leading-relaxed text-[#4B5563]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Benefits */}
              {business.content?.eligibilityRequirements && (
                <section
                  id="eligibilityRequirements"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    Eligibility Requirements
                  </h2>
                  <div className="grid gap-0">
                    {business.content.eligibilityRequirements.map(
                      (point, i) => (
                        <div key={i} className="flex items-start gap-4 p-2">
                          <div className="flex-shrink-0 mt-2.5 w-2 h-2 rounded-full bg-[#1C4268]"></div>
                          <span className="text-base font-medium leading-relaxed text-[#4B5563]">
                            {point}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

              {/* Documents Required */}
              {(business.documentsRequired ||
                business.content?.documentsRequiredDetailed) && (
                <section
                  id="documents-required"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    Documents Required
                  </h2>
                  <div className="grid gap-4">
                    {(
                      business.content?.documentsRequiredDetailed ||
                      business.documentsRequired
                    )?.map((doc, i) => (
                      <div key={i} className="flex items-center gap-4 p-1">
                        <div className="w-6 h-6 bg-[#1C4268] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-base font-medium text-[#4B5563]">
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Registration Process */}
              {(business.content?.registrationProcess ||
                business.content?.process) && (
                <section
                  id="registration-process"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    {business.content.registrationProcess
                      ? "Registration Process"
                      : "Process"}
                  </h2>
                  <div className="space-y-4">
                    {(
                      business.content.registrationProcess ||
                      business.content.process
                    )?.map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start p-1 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-[#1C4268] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-medium leading-relaxed text-[#4B5563]">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Frequently Asked Questions */}
              {business.content?.faq && business.content.faq.length > 0 && (
                <section
                  id="faq"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="grid gap-4">
                    {business.content.faq.map((faq, i) => (
                      <div
                        key={i}
                        className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-[#1C4268] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#1C4268] mb-1">
                              {faq.question}
                            </h3>
                            <p className="text-base text-[#4B5563] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* LLP vs Private Comparison */}
              {business.content?.llpVsPrivate && (
                <section
                  id="llp-vs-private"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    LLP vs Private Limited Company
                  </h2>
                  <div className="grid gap-4">
                    {business.content.llpVsPrivate.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 border-l-4 border-[#1C4268] bg-blue-50 rounded-r-lg"
                      >
                        <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#1C4268]"></div>
                        <span className="text-base font-medium leading-relaxed text-[#4B5563]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Funding Terms */}
              {business.content?.fundingTerms && (
                <section
                  id="funding-terms"
                  className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-[#1C4268] mb-6">
                    Funding Terms Explained
                  </h2>
                  <div className="grid gap-4">
                    {business.content.fundingTerms.map((term, i) => (
                      <div
                        key={i}
                        className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                      >
                        <h4 className="font-bold text-[#1C4268] mb-2 text-base">
                          {term.split(" - ")[0]}
                        </h4>
                        <p className="text-base font-medium text-[#4B5563]">
                          {term.split(" - ")[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
