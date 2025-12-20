"use client";

import React from "react";

const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-slide-up {
    animation: slideInUp 0.6s ease-out forwards;
  }

  .animate-slide-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-scale-in {
    animation: scaleIn 0.5s ease-out forwards;
  }

  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .border-glow {
    position: relative;
    transition: all 0.3s ease;
  }

  .border-glow:hover {
    box-shadow: 0 0 20px rgba(5, 50, 95, 0.3);
  }

  .text-gradient {
    background: linear-gradient(135deg, #05325f 0%, #245586 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-divider {
    height: 1px;
    background: #245586;
    margin-left: 0;
    transform: scale-x-0;
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  .group:hover .section-divider {
    transform: scale-x-1;
  }
`;

// Helper function to convert text to ID
const textToId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Helper component to render a section
const Section = ({ id, title, paragraphs, listItems, subTitle, closingParagraph, delay = "0.1s", icon }) => {
  const IconSVG = icon || (
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  );

  return (
    <div
      id={id}
      className="animate-slide-left group mb-12 scroll-mt-32"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start gap-6 mb-6">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {IconSVG}
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
            {title}
          </h2>
          {paragraphs && paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300"
            >
              {para}
            </p>
          ))}
          {subTitle && (
            <h3 className="text-xl font-bold text-[#245586] mb-3">{subTitle}</h3>
          )}
          {listItems && (
            <ul className="space-y-3">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {closingParagraph && (
            <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
              {closingParagraph}
            </p>
          )}
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
};

export default function Blogview({ blog }) {
  if (!blog) {
    return null;
  }

  const tocItems = blog.tocItems || [];
  const content = blog.content || {};

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

  // Helper to render content sections dynamically
  const renderContentSections = () => {
    const sections = [];
    let delay = 0.1;

    // Introduction
    if (content.introduction) {
      const sectionId = textToId(content.introduction.title || "Introduction");
      sections.push(
        <Section
          key="introduction"
          id={sectionId}
          title={content.introduction.title || "Introduction"}
          paragraphs={content.introduction.paragraphs}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    // What Are Conclaves
    if (content.whatAreConclaves) {
      const sectionId = textToId(content.whatAreConclaves.title);
      sections.push(
        <Section
          key="whatAreConclaves"
          id={sectionId}
          title={content.whatAreConclaves.title}
          paragraphs={content.whatAreConclaves.paragraphs}
          listItems={content.whatAreConclaves.listItems}
          closingParagraph={content.whatAreConclaves.closingParagraph}
          delay={`${delay}s`}
          icon={<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />}
        />
      );
      delay += 0.05;
    }

    // Gandhinagar Highlights
    if (content.gandhinagarHighlights) {
      const sectionId = textToId(content.gandhinagarHighlights.title);
      sections.push(
        <Section
          key="gandhinagarHighlights"
          id={sectionId}
          title={content.gandhinagarHighlights.title}
          paragraphs={content.gandhinagarHighlights.paragraphs}
          listItems={content.gandhinagarHighlights.listItems}
          closingParagraph={content.gandhinagarHighlights.closingParagraph}
          delay={`${delay}s`}
          icon={
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          }
        />
      );
      delay += 0.05;
    }

    // Opportunities
    if (content.opportunities) {
      const sectionId = textToId(content.opportunities.title);
      sections.push(
        <Section
          key="opportunities"
          id={sectionId}
          title={content.opportunities.title}
          listItems={content.opportunities.listItems}
          delay={`${delay}s`}
          icon={<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />}
        />
      );
      delay += 0.05;
    }

    // Focus Sectors
    if (content.focusSectors) {
      const sectionId = textToId(content.focusSectors.title);
      sections.push(
        <Section
          key="focusSectors"
          id={sectionId}
          title={content.focusSectors.title}
          paragraphs={content.focusSectors.paragraphs}
          listItems={content.focusSectors.listItems}
          closingParagraph={content.focusSectors.closingParagraph}
          delay={`${delay}s`}
          icon={
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          }
        />
      );
      delay += 0.05;
    }

    // How to Prepare
    if (content.howToPrepare) {
      const sectionId = textToId(content.howToPrepare.title);
      sections.push(
        <Section
          key="howToPrepare"
          id={sectionId}
          title={content.howToPrepare.title}
          paragraphs={content.howToPrepare.paragraphs}
          listItems={content.howToPrepare.listItems}
          delay={`${delay}s`}
          icon={
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          }
        />
      );
      delay += 0.05;
    }

    // Government Role
    if (content.governmentRole) {
      const sectionId = textToId(content.governmentRole.title);
      sections.push(
        <Section
          key="governmentRole"
          id={sectionId}
          title={content.governmentRole.title}
          paragraphs={content.governmentRole.paragraphs}
          subTitle={content.governmentRole.subTitle}
          listItems={content.governmentRole.listItems}
          closingParagraph={content.governmentRole.closingParagraph}
          delay={`${delay}s`}
          icon={
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
              clipRule="evenodd"
            />
          }
        />
      );
      delay += 0.05;
    }

    // NextGen Services
    if (content.nextgenServices) {
      const sectionId = textToId(content.nextgenServices.title);
      sections.push(
        <Section
          key="nextgenServices"
          id={sectionId}
          title={content.nextgenServices.title}
          paragraphs={content.nextgenServices.paragraphs}
          subTitle={content.nextgenServices.subTitle}
          listItems={content.nextgenServices.listItems}
          delay={`${delay}s`}
          icon={
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          }
        />
      );
      delay += 0.05;
    }

    // FAQ Section
    if (content.faq && content.faq.items) {
      const sectionId = textToId(content.faq.title);
      sections.push(
        <div
          key="faq"
          id={sectionId}
          className="animate-slide-left group mb-12 scroll-mt-32"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#05325f] mb-6 group-hover:text-gradient transition-all duration-300">
                {content.faq.title}
              </h2>
              <div className="space-y-6">
                {content.faq.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200"
                  >
                    <h4 className="text-lg font-bold text-[#05325f] mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
      );
      delay += 0.05;
    }

    // Generic sections for other blog structures
    if (content.fundingStages) {
      const sectionId = textToId(content.fundingStages.title);
      sections.push(
        <Section
          key="fundingStages"
          id={sectionId}
          title={content.fundingStages.title}
          paragraphs={content.fundingStages.paragraphs}
          listItems={content.fundingStages.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    if (content.trends) {
      const sectionId = textToId(content.trends.title);
      sections.push(
        <Section
          key="trends"
          id={sectionId}
          title={content.trends.title}
          paragraphs={content.trends.paragraphs}
          listItems={content.trends.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    if (content.attractInvestors) {
      const sectionId = textToId(content.attractInvestors.title);
      sections.push(
        <Section
          key="attractInvestors"
          id={sectionId}
          title={content.attractInvestors.title}
          paragraphs={content.attractInvestors.paragraphs}
          listItems={content.attractInvestors.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    if (content.ai) {
      const sectionId = textToId(content.ai.title);
      sections.push(
        <Section
          key="ai"
          id={sectionId}
          title={content.ai.title}
          paragraphs={content.ai.paragraphs}
          listItems={content.ai.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    if (content.sustainable) {
      const sectionId = textToId(content.sustainable.title);
      sections.push(
        <Section
          key="sustainable"
          id={sectionId}
          title={content.sustainable.title}
          paragraphs={content.sustainable.paragraphs}
          listItems={content.sustainable.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    if (content.digitalTransformation) {
      const sectionId = textToId(content.digitalTransformation.title);
      sections.push(
        <Section
          key="digitalTransformation"
          id={sectionId}
          title={content.digitalTransformation.title}
          paragraphs={content.digitalTransformation.paragraphs}
          listItems={content.digitalTransformation.listItems}
          delay={`${delay}s`}
        />
      );
      delay += 0.05;
    }

    // Conclusion
    if (content.conclusion) {
      const sectionId = textToId(content.conclusion.title);
      sections.push(
        <div
          key="conclusion"
          id={sectionId}
          className="animate-slide-left group scroll-mt-32"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                {content.conclusion.title}
              </h2>
              {content.conclusion.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return sections;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    // If it's already formatted like "October 2025", return as is
    if (dateString.includes(" ")) return dateString;
    // Otherwise try to format it
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
      <style>{animationStyles}</style>

      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header Section */}
          <div className="mb-16 animate-slide-up">
            <div className="bg-gradient-to-r from-[#05325f] to-[#245586] rounded-2xl shadow-xl overflow-hidden hover-lift group">
              <div className="p-12 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-white rounded-full"></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                      {blog.title}
                    </h1>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg max-w-3xl mb-6">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white font-semibold">
                      {formatDate(blog.date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            {tocItems.length > 0 && (
              <aside className="lg:col-span-1">
                <div className="sticky top-20 animate-fade-in">
                  <div className="bg-gradient-to-b from-[#F7F9FF] to-[#EAF2FF] rounded-2xl shadow-lg border border-gray-200 p-6 hover-lift border-glow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] shadow-md">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#05325f]">
                        Table of Contents
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {tocItems.map((item, idx) => {
                        const targetId = textToId(item);
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-2 group cursor-pointer"
                          >
                            <span className="text-[#245586] font-bold mt-1 group-hover:scale-110 transition-transform">
                              {idx + 1}.
                            </span>
                            <button
                              onClick={(e) => handleNavigationClick(e, targetId)}
                              className="text-left text-gray-700 text-sm font-medium leading-relaxed group-hover:text-[#245586] group-hover:translate-x-1 transition-all duration-300"
                            >
                              {item}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className={tocItems.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
                <div className="p-8 md:p-12 lg:p-16">
                  {renderContentSections()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
