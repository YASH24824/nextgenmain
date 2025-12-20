"use client";

import Image from "next/image";
const contact1 = "/assets/contact1.png";
const Homebg = "/assets/home-bg.png";

export default function Hero() {
  return (
    <section
      className={` relative bg-[#245586] w-full min-h-[650px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28`}
    >
      {/* Background Image */}
      <Image
        src={Homebg}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 py-10 md:py-0 gap-10 lg:gap-12 w-full max-w-[1200px] mx-auto z-10">
        {/* Text Section */}
        <div className="flex flex-col gap-6 flex-1 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white leading-[1.08]">
            <span className="block text-[44px] md:text-[50px] lg:text-[52px] font-black">
              Get Free
            </span>
            <span className="block text-[44px] md:text-[50px] lg:text-[52px] font-black mt-1">
              <span className="text-transparent bg-clip-text bg-[#5b93ca]">
                Consultation
              </span>{" "}
              Today.
            </span>
            <span className="block text-[44px] md:text-[50px] lg:text-[52px] font-black mt-1">
              Give us a Call!
            </span>
          </h1>

          {/* Decorative Dots */}
          <div className="flex items-center gap-3 mx-auto lg:mx-0 w-fit">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          <p className="text-white text-base md:text-lg leading-[1.75] max-w-[530px] mx-auto lg:mx-0">
            Let’s connect and explore how we can help your business grow.
            Reach out to us for a free consultation and expert guidance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2">
            <a
              href="/contact"
              className="group relative flex items-center justify-center bg-gradient-to-b from-[#05325f] to-[#5b93ca] text-white transition-all duration-500 rounded-2xl h-14 px-8 shadow-[0_10px_40px_rgba(91,147,202,0.3)] hover:shadow-[0_15px_50px_rgba(91,147,202,0.5)] transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 text-white font-bold flex items-center gap-2.5 drop-shadow-lg">
                Contact Us
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 9l3 3m0 0l-3 3m3-3H8"
                  />
                </svg>
              </span>
            </a>

            <a
              href="tel:+911234567890"
              className="group relative flex items-center justify-center backdrop-blur-xl bg-white hover:bg-white transition-all duration-300 rounded-2xl h-14 px-8 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-white/50"
            >
              <span className="text-[#245586] font-bold flex items-center gap-2.5">
                Call Now
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#245586] text-white transform group-hover:rotate-90 transition-transform duration-500">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </span>
            </a>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative group w-full max-w-[500px] lg:flex-1 md:mt-4">
          <div className="relative backdrop-blur-lg bg-[#ebf2f8] border border-white/20 rounded-3xl p-6 shadow-xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
            {/* Gradient Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-yellow-300/20 via-orange-400/20 to-pink-500/20 rounded-[3rem] blur-2xl opacity-40 z-0 group-hover:opacity-60 transition-all duration-700" />

            {/* Image */}
            <div className="relative z-10 w-full h-[250px] flex items-center justify-center">
              <Image
                className="object-contain max-w-full max-h-full transition-transform duration-700 group-hover:scale-105"
                alt="Contact Illustration"
                src={contact1}
                width={200}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
