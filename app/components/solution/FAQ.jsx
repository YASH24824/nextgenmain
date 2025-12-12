"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Who is eligible for government grants?",
      answer:
        "Eligibility varies. Typically, small businesses, startups, homeowners, non-profits, and research entities can apply.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application process typically takes 4-6 weeks, depending on the complexity of your request and the current volume of applications.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Generally, you'll need identification documents, proof of address, business plans, financial statements, and any industry-specific licenses or permits.",
    },
    {
      question: "Can I apply for multiple grants at once?",
      answer:
        "Yes, you can apply for multiple grants as long as you meet the eligibility criteria for each program. However, you may need to disclose other applications during the process.",
    },
    {
      question: "What are the common reasons for grant rejection?",
      answer:
        "Common reasons include incomplete applications, not meeting eligibility criteria, insufficient documentation, or proposals that don't align with grant objectives.",
    },
    {
      question: "Is there a fee to apply for government grants?",
      answer:
        "Legitimate government grants never require upfront fees. Be cautious of any program asking for payment to apply or guarantee approval.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#f8fafc] relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#245586]/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#76a5d3]/10 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-[#245586]/5 rounded-full blur-2xl animate-float-fast"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#245586_1px,transparent_1px),linear-gradient(90deg,#245586_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mt-8">
            Clear answers to help you move forward with confidence
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="border border-[#C9E5FF] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm relative">
                {/* Enhanced gradient accent */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="faq-accent"
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#245586] via-[#76a5d3] to-[#245586]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Enhanced Question Button */}
                <button
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-white/50 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.span
                      className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-br from-[#245586] to-[#76a5d3] font-semibold text-sm shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {index + 1}
                    </motion.span>
                    <span className={` font-semibold text-[#05325F] text-base md:text-lg lg:text-xl flex-1 leading-tight`}>
                      {item.question}
                    </span>
                  </div>

                  <motion.div
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md ${activeIndex === index
                      ? "bg-gradient-to-br from-[#245586] to-[#76a5d3] rotate-180"
                      : "bg-gradient-to-br from-[#245586] to-[#76a5d3] group-hover:scale-110"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {activeIndex === index ? (
                      <Minus className="text-white w-5 h-5" />
                    ) : (
                      <Plus className="text-white w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                {/* Enhanced Answer Section */}
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -10
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-[#245586] to-[#76a5d3] border-t border-white/20">
                        <div className="flex items-start gap-3">
                          <ChevronRight className="text-white/80 w-5 h-5 mt-1 flex-shrink-0" />
                          <p className={` text-white/95 leading-relaxed text-base md:text-lg lg:text-medium font-medium`}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQ;