import React from 'react';

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

export default function Blogview() {
  const tocItems = [
    "Introduction",
    "What Are Startup Conclaves & Why They Matter",
    "Startup Conclave 2025 Gandhinagar: Key Highlights",
    "Opportunities Such Conclaves Create for Startups",
    "Focus Sectors Driving Growth in Indian Startup Ecosystem",
    "How Startups Can Prepare for Conclaves",
    "Government's Role in Supporting Startups",
    "How NextGen Business Consultancy Helps Startups Leverage These Platforms",
    "Quick Overview on Startup Conclaves in India",
    "Conclusion"
  ];

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
                      Why Startup Conclaves Matter for Indian Startups
                    </h1>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg max-w-3xl mb-6">
                    Insights from Startup Conclave 2025 Gandhinagar
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold">Aug 28, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 animate-fade-in">
                <div className="bg-gradient-to-b from-[#F7F9FF] to-[#EAF2FF] rounded-2xl shadow-lg border border-gray-200 p-6 hover-lift border-glow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#05325f]">Table of Contents</h3>
                  </div>
                  <ul className="space-y-2">
                    {tocItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group cursor-pointer">
                        <span className="text-[#245586] font-bold mt-1 group-hover:scale-110 transition-transform">{idx + 1}.</span>
                        <a className="text-gray-700 text-sm font-medium leading-relaxed group-hover:text-[#245586] group-hover:translate-x-1 transition-all duration-300">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
                <div className="p-8 md:p-12 lg:p-16">

                  {/* Introduction */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Introduction
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          India is the <strong>world&apos;s third-largest startup ecosystem,</strong> and events like <strong>Startup
                            Conclaves</strong> are powerful catalysts for innovation and growth. They bring together
                          <strong> entrepreneurs, investors, mentors, and policymakers,</strong> creating opportunities that go
                          beyond just networking.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          One of the most recent milestones was the <strong>Startup Conclave 2025 in Gandhinagar,</strong>
                          inaugurated by Union Home Minister <strong>Amit Shah</strong> at Mahatma Mandir. The event
                          showcased how conclaves are not just celebrations, but <strong>strategic growth platforms for startups.</strong>
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          This blog explores why such conclaves matter, what startups can learn from the
                          Gandhinagar event, and how they can prepare to make the most of future
                          opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* What Are Startup Conclaves */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.15s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          What Are Startup Conclaves & Why They Matter
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          Startup Conclaves are large-scale gatherings where:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Startups <strong>showcase ideas & products.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Investors and VCs explore <strong>funding opportunities.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Government shares <strong>policy updates & schemes.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Mentors guide on <strong>scaling, compliance & innovation.</strong>
                            </span>
                          </li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          They matter because they act as <strong>ecosystem bridges</strong>—connecting innovation with
                          capital, guidance, and government support.
                        </p>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* Gandhinagar Highlights */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Startup Conclave 2025 Gandhinagar: Key Highlights
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          The Gandhinagar conclave was a benchmark event that illustrated the potential of such platforms:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Inauguration by Amit Shah,</strong> with Gujarat CM Bhupendra Patel and ministers in attendance.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Participation of <strong>1,000+ startups, 5,000 innovators, 100+ mentors, and 50+ venture funds.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Investor pitch sessions</strong> where shortlisted startups presented directly to VCs.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              Sectoral focus on <strong>deep tech, clean energy, agritech, fintech, drones, healthcare, defence, AR/VR.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>MoUs and funding deals</strong> worth crores signed during the event.
                            </span>
                          </li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          These outcomes reflect the <strong>real power of startup conclaves</strong>&mdash;they don&apos;t just showcase
                          ideas, they <strong>create tangible business and funding opportunities.</strong>
                        </p>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* Opportunities */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.25s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Opportunities Such Conclaves Create for Startups
                        </h2>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Funding Access -</strong> Direct connections with angel investors, VCs, and government-backed funds.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Networking & Mentorship -</strong> Building relationships with industry leaders, incubators, and successful founders.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Policy Awareness -</strong> Updates on schemes like <strong>Startup India, SISFS, RKVY-RAFTAR, NAIFF.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Brand Visibility -</strong> National recognition by being featured in high-profile events.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Partnerships & MoUs -</strong> Potential for collaborations with corporates, universities, and government agencies.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* Focus Sectors */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Focus Sectors Driving Growth in Indian Startup Ecosystem
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          From the Gandhinagar conclave and beyond, these are the <strong>hot sectors shaping India&apos;s startup story:</strong>
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>AgriTech & FoodTech -</strong> Innovations in farming, food supply chains.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Clean Energy & Green Hydrogen -</strong> Sustainability-driven startups.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Healthcare & Biotech -</strong> Accessible and tech-driven healthcare.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Deep Tech, AI & Robotics -</strong> Emerging tech with global relevance.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>FinTech & Digital Payments -</strong> India&apos;s fastest-scaling startup sector.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Defence & Aerospace -</strong> Aligned with India&apos;s Atmanirbhar Bharat mission.
                            </span>
                          </li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          Startups in these areas are well-positioned to attract <strong>funding and policy support.</strong>
                        </p>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* How to Prepare */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.35s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          How Startups Can Prepare for Conclaves
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          To maximize the impact of attending such events, startups should:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Perfect Their Pitch Deck -</strong> Problem, solution, traction, and funding needs.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Stay Compliant -</strong> Ensure <strong>company registration (Pvt Ltd/LLP), GST, and
                                Startup India certificate</strong> are in place.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Leverage Schemes -</strong> Apply for programs like <strong>Startup India Seed Fund (SISFS)
                                or RKVY-RAFTAR.</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Plan Networking -</strong> Identify investors and mentors beforehand.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Follow Up Strategically -</strong> Convert connections into opportunities after the event.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* Government's Role */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Government&apos;s Role in Supporting Startups
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          The Gandhinagar conclave is part of a larger push by the Government of India and
                          states like Gujarat to make India a <strong>global innovation hub.</strong>
                        </p>
                        <h3 className="text-xl font-bold text-[#245586] mb-3">Key initiatives include:</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Startup India Policy -</strong> Tax exemptions, fast-track IP, relaxed norms.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Seed Fund Schemes -</strong> SISFS, RKVY-RAFTAR, NAIFF for funding support.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Incubation Network -</strong> 700+ incubators across India to mentor startups.
                            </span>
                          </li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          Such policies align with conclaves to ensure <strong>startups get not only visibility but also
                            tangible support.</strong>
                        </p>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* NextGen Business Consultancy */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.45s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          How NextGen Business Consultancy Helps Startups Leverage These Platforms
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                          At <strong>NextGen Business Consultancy,</strong> we ensure startups are <strong>investor-ready, compliant,
                            and strategically positioned</strong> to benefit from such conclaves.
                        </p>
                        <h3 className="text-xl font-bold text-[#245586] mb-3">Our services include:</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Registrations -</strong> Pvt Ltd, LLP, Partnership, Startup India Certificate.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Funding Consultancy -</strong> SISFS, RKVY-RAFTAR, NAIFF applications.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Compliance -</strong> GST, ROC, tax filings to build investor trust.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Pitch Deck & Business Plan Preparation -</strong> To stand out during investor sessions.
                            </span>
                          </li>
                          <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                              <strong>Post-Event Support -</strong> Helping startups convert MoUs into real growth.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* FAQ Section */}
                  <div className="animate-slide-left group mb-12" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-6 group-hover:text-gradient transition-all duration-300">
                          Quick Overview on Startup Conclaves in India
                        </h2>

                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-bold text-[#05325f] mb-2">Q1: What is a startup conclave?</h4>
                            <p className="text-gray-700 leading-relaxed">
                              A: It is an event where startups meet investors, mentors, and government to showcase
                              innovation and raise funding.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-bold text-[#05325f] mb-2">Q2: What happened at Startup Conclave 2025 in Gandhinagar?</h4>
                            <p className="text-gray-700 leading-relaxed">
                              A: 1,000+ startups participated, 50+ VCs attended, and MoUs worth crores were signed.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-bold text-[#05325f] mb-2">Q3: Why should startups attend such conclaves?</h4>
                            <p className="text-gray-700 leading-relaxed">
                              A: For funding, networking, government scheme awareness, and brand visibility.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-bold text-[#05325f] mb-2">Q4: How can startups prepare for such events?</h4>
                            <p className="text-gray-700 leading-relaxed">
                              A: Have a strong pitch deck, compliance in place, and clear funding requirements.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-[#F7F9FF] to-[#EAF2FF] p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-bold text-[#05325f] mb-2">Q5: Do conclaves only happen in Gujarat?</h4>
                            <p className="text-gray-700 leading-relaxed">
                              A: No, similar conclaves are organized across India by central and state governments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-divider"></div>
                  </div>

                  {/* Conclusion */}
                  <div className="animate-slide-left group" style={{ animationDelay: '0.55s' }}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#05325f] mb-4 group-hover:text-gradient transition-all duration-300">
                          Conclusion
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          <strong>Startup Conclaves are not one-time events&mdash;they are milestones in India&apos;s startup
                            journey.</strong> The Gandhinagar edition in 2025 proved how powerful these gatherings can
                          be for startups seeking funding, visibility, and growth.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          For entrepreneurs, the lesson is clear: <strong>be prepared, be compliant, and be visible.</strong>
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4 group-hover:text-gray-900 transition-colors duration-300">
                          At <strong>NextGen Business Consultancy,</strong> we help startups seize such opportunities by
                          providing <strong>registrations, funding consultancy, and compliance services—</strong>making sure
                          you are ready not just to attend but to <strong>win at such platforms.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}