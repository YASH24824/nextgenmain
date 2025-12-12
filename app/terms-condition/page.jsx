import { Header } from "../components/Header";
import Footer from '../components/Footer';
import "../privacy-policy/page.css";
import Hero from "../components/tnc/Hero";

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

export default function TermsConditions() {
    return (
        <>
            <style>{animationStyles}</style>
            <Header />
            <Hero />
            <section className="privacy-policy-section py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Purpose Section */}
                    <div className="mb-16 animate-slide-up">
                        <div className="bg-gradient-to-r from-[#1c4268] to-[#245586] rounded-2xl shadow-xl overflow-hidden hover-lift group">
                            <div className="p-12 md:p-16 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-1.5 h-12 bg-white rounded-full"></div>
                                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Purpose</h1>
                                    </div>
                                    <p className="text-blue-100 leading-relaxed text-lg max-w-2xl">
                                        By using our website, you agree to act in accordance with the following terms:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">

                        {/* Terms Sections */}
                        <div className="p-8 md:p-16">
                            <div className="grid gap-12">

                                {/* Section 1 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">1</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Applicability</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                We shall be entitled to use your user information for the following purposes:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 2 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">2</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Scope of Services</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                We provide business consultancy and advisory services, as listed on our website or mutually agreed in writing.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 3 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">3</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Scope of Services</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                Provide accurate and complete information at all times.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                Comply with applicable laws and avoid misuse of our website or services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 4 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">4</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Intellectual Property</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                All website content, including text, graphics, designs, and logos, belongs exclusively to NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                No material may be copied, modified, or reproduced without prior written permission.                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 5 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">5</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Limitation of Liability</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                We are not liable for indirect or consequential damages, technical issues, or actions of third parties beyond our control.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 6 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">6</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-3 group-hover:text-gradient transition-all duration-300">Termination of Services</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                We reserve the right to suspend or terminate services/accounts in case of misuse, policy violations, or unlawful activities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>

                                {/* Section 7 */}
                                <div className="animate-slide-left group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] shadow-md">
                                                <span className="text-white font-bold text-lg">7</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-[#245586] mb-4 group-hover:text-gradient transition-all duration-300">Governing Law & Jurisdiction</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                These Terms shall be governed by the laws of India.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                                                Any disputes shall be subject to the exclusive jurisdiction of the courts of [Ahmedabad, Gujarat, India].
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#245586] ml-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info Section */}
                        <div className="bg-gray-50 text-gray-800 p-8 md:p-16 border-t border-gray-200 animate-fade-in">
                            <div className="max-w-4xl">
                                <p className="text-gray-700 leading-relaxed text-lg mb-6 hover:text-gray-900 transition-colors duration-300">
                                    At NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to maintaining transparency and fairness in all our dealings with clients, visitors, and stakeholders. The following policies explain how we manage Refunds &amp; Cancellations, how we protect your Privacy, the Terms &amp; Conditions of using our website and services, and our Pricing Disclosure practices.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6 hover:text-gray-900 transition-colors duration-300">
                                    By accessing or using our website, you agree to these policies in full. Refund & Cancellation Policy
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
                                    We value the trust you place in us and aim to ensure a smooth and fair process in case of refunds or cancellations.
                                </p>
                            </div>
                        </div>

                        {/* Refund & Cancellation Section */}
                        <div className="p-8 md:p-16 bg-white">
                            <h2 className="text-4xl font-bold text-[#1c4268] mb-12 flex items-center gap-4 animate-slide-up">
                                <div className="w-1.5 h-10 bg-[#1c4268] rounded-full transform animate-pulse"></div>
                                Refund & Cancellation Policy
                            </h2>

                            <div className="grid gap-8">
                                {/* Eligibility for Refunds */}
                                <div className="p-8 rounded-xl border border-[#245586] bg-blue-50 hover-lift border-glow animate-scale-in group" style={{ animationDelay: '0.1s' }}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#245586] group-hover:text-gradient transition-all duration-300">Eligibility for Refunds</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg ml-14 group-hover:text-gray-900 transition-colors duration-300">
                                        Refunds are only processed after a thorough review and assessment of the service in question. Eligibility will depend on the terms stated in signed documents such as Agreements, Undertakings, or any other binding contracts between the Service Provider and the Service Receiver.
                                    </p>
                                </div>

                                {/* Non-Refundable */}
                                <div className="p-8 rounded-xl border border-[#245586] bg-blue-50 hover-lift border-glow animate-scale-in group" style={{ animationDelay: '0.15s' }}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#245586] group-hover:text-gradient transition-all duration-300">Non-Refundable Services</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg ml-14 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                                        Please note that some services cannot be refunded. These include, but are not limited to:
                                    </p>
                                    <ul className="space-y-3 ml-14">
                                        <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Application filing charges</span>
                                        </li>
                                        <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Statutory/government fees</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Cancellation by Customer */}
                                <div className="p-8 rounded-xl border border-[#245586] bg-blue-50 hover-lift border-glow animate-scale-in group" style={{ animationDelay: '0.2s' }}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 10.586V7z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#245586] group-hover:text-gradient transition-all duration-300">Cancellation by Customer</h3>
                                    </div>
                                    <ul className="space-y-3 ml-14">
                                        <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">If you wish to cancel a service, you must submit your request in writing before the service begins.</span>
                                        </li>
                                        <li className="flex items-start gap-3 pl-4 border-l-2 border-[#245586] transform group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">Once a service has started, no refund or cancellation will be possible.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Cancellation by Company */}
                                <div className="p-8 rounded-xl border border-[#245586] bg-blue-50 hover-lift border-glow animate-scale-in group" style={{ animationDelay: '0.25s' }}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#245586] group-hover:text-gradient transition-all duration-300">Cancellation by Company</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg ml-14 group-hover:text-gray-900 transition-colors duration-300">
                                        If we are required to cancel a service due to internal or unavoidable circumstances, you will receive a full refund for the amount paid.
                                    </p>
                                </div>

                                {/* Processing Timelines */}
                                <div className="p-8 rounded-xl border border-[#245586] bg-blue-50 hover-lift border-glow animate-scale-in group" style={{ animationDelay: '0.3s' }}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#245586] flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#245586] group-hover:text-gradient transition-all duration-300">Processing Timelines</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg ml-14 group-hover:text-gray-900 transition-colors duration-300">
                                        Approved refunds will be credited to the original mode of payment within 45 working days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="bg-gray-100 p-8 md:p-16 border-t border-gray-200 animate-fade-in">
                            <div className="max-w-4xl">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#245586] flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-[#245586] mb-1">Pricing Disclosure</h2>
                                        <p className="text-gray-600 text-lg">(in INR)</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                    To maintain complete transparency with our clients:
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#245586] pl-6 border-l-4 border-l-[#245586] hover:shadow-md transition-shadow">
                                        <span className="text-gray-700 text-lg">All prices are displayed in Indian Rupees (INR, ₹).</span>
                                    </div>
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#245586] pl-6 border-l-4 border-l-[#245586] hover:shadow-md transition-shadow">
                                        <span className="text-gray-700 text-lg">Prices will clearly mention whether they are inclusive or exclusive of GST and other applicable taxes.</span>
                                    </div>
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#245586] pl-6 border-l-4 border-l-[#245586] hover:shadow-md transition-shadow">
                                        <span className="text-gray-700 text-lg">
                                            All payments for our services must be made exclusively in the name of one of the following entities: NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED. Payments are to be made only to designated &quot;Current Accounts&quot; via NEFT, IMPS, RTGS, or through authorized digital payment gateways such as Cash Free, Razorpay, or Aggrepay. We do not accept any payments into personal accounts or under any other name.
                                        </span>                                    </div>
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#245586] pl-6 border-l-4 border-l-[#245586] hover:shadow-md transition-shadow">
                                        <span className="text-gray-700 text-lg">Any additional government fees or statutory charges will be communicated separately and transparently.</span>
                                    </div>
                                    <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#245586] pl-6 border-l-4 border-l-[#245586] hover:shadow-md transition-shadow">
                                        <span className="text-gray-700 text-lg">Prices shall be determined on a case-to-case and service-specific basis; therefore, standardized pricing will not be published on the website.</span>
                                    </div>
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
                                <p className="text-blue-100 leading-relaxed text-lg mb-8">
                                    If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us at
                                </p>
                                <a href="mailto:support@nextgenbusiness.co.in" className="inline-block bg-white text-[#245586] hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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