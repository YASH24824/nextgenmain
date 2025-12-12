import { Header } from "../components/Header";
import Footer from '../components/Footer';
import "./page.css";
import Hero from "../components/privacy/Hero";

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
    box-shadow: 0 0 20px rgba(28, 66, 104, 0.3);
  }

  .text-gradient {
    background: linear-gradient(135deg, #1c4268 0%, #3278bd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export default function PrivacyPolicy() {
    return (
        <>
            <style>{animationStyles}</style>
            <Header />
            <Hero />
            <section className="privacy-policy-section py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Privacy Policy Header Section */}
                    <div className="mb-16 animate-slide-up">
                        <div className="bg-gradient-to-r from-[#1c4268] to-[#245586] rounded-2xl shadow-xl overflow-hidden hover-lift group">
                            <div className="p-12 md:p-16 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-1.5 h-12 bg-white rounded-full"></div>
                                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Privacy Policy</h1>
                                    </div>
                                    <p className="text-blue-100 leading-relaxed text-lg max-w-2xl">
                                        We take your privacy seriously and handle your personal data responsibly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">

                        {/* Privacy Sections */}
                        <div className="p-8 md:p-16">
                            <div className="grid gap-12">

                                {/* Information We Collect */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Information We Collect</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                We may collect your name, contact details, and browsing data when you interact with our website or services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* How We Use Your Information */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.15s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">How We Use Your Information</h2>
                                            <h3 className="text-xl font-bold text-[#245586] mb-4 group-hover:text-gray-900 transition-colors duration-300">Your information is used to:</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Provide and improve our services</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Process payments securely</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Send important service updates</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Fulfill legal and regulatory requirements</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* How We Protect Your Data */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.2s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">How We Protect Your Data</h2>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">We store personal information securely and adopt industry-standard security measures.</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Unauthorized access, disclosure, or misuse of data is actively prevented through technical and administrative safeguards.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Sharing of Information */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.25s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Sharing of Information</h2>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">We do not sell or trade your personal information.</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Limited sharing may occur with trusted third parties (such as payment gateways, government portals, or service execution partners) only when necessary to complete your requested service.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Cookies & Tracking */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.3s' }}>
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
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Cookies & Tracking</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                Our website may use cookies and tracking technologies to enhance user experience and analyze traffic. You may choose to disable cookies in your browser settings.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Your Rights */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.35s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Your Rights</h2>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Request access to the personal information we hold about you</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Correct inaccurate details</span>
                                                </li>
                                                <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Request deletion of your data, subject to applicable laws</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Legal Jurisdiction */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.4s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Legal Jurisdiction</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                All privacy-related matters are governed by the Information Technology Act, 2000 (as amended) and relevant Indian laws.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="bg-gradient-to-r from-[#1c4268] to-[#245586] text-white p-12 md:p-20 rounded-b-2xl">
                            <div className="text-center max-w-2xl mx-auto">
                                <div className="mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 border border-white/20 mb-6">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
                                <p className="text-blue-100 leading-relaxed text-lg mb-2">
                                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
                                </p>
                                <a href="mailto:support@nextgenbusiness.co.in" className="inline-block bg-white text-[#245586] hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-6">
                                    support@nextgenbusiness.co.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}