"use client";

import Image from "next/image";
const Privacy = "/assets/privacy-policy.png";
const Homebg = "/assets/home-bg.png";

export default function Hero() {
  return (
    <section
      className={`font-sans relative bg-[#245586] w-full min-h-[650px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28`}
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
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 py-10 md:py-0 gap-10 lg:gap-12 w-full max-w-[1200px] mx-auto">
        {/* Text Section */}
        <div className="flex flex-col gap-6 flex-1 z-10 w-full lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-white leading-[1.08]">
            <span className="block text-[44px] md:text-[50px] lg:text-[52px] font-black">
              Privacy&nbsp;
              <span className="text-transparent bg-clip-text bg-[#5b93ca]">
                Policy
              </span>
            </span>
          </h1>

          {/* Decorative dots */}
          <div className="flex items-center gap-3 mx-auto lg:mx-0 w-fit">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
              <div className="w-2 h-2 rounded-full bg-[#bfd5eb]" />
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-lg leading-[1.75] max-w-[530px] mx-auto lg:mx-0">
            We are committed to safeguarding your personal information and ensuring transparency in how we collect, use, and protect your data. 
          </p>

          {/* Last Updated */}
          <div className="flex items-center justify-center lg:justify-start text-white text-sm gap-2 mt-2">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-white"
              viewBox="0 0 24 24"
            >
              <path d="M17.75 2a.75.75 0 0 1 .75.75V4h1.25a.75.75 0 0 1 0 1.5h-1.25V7a.75.75 0 0 1-1.5 0V5.5H15.5a.75.75 0 0 1 0-1.5h1.25V2.75A.75.75 0 0 1 17.75 2z" />
              <path d="M6.25 2a.75.75 0 0 1 .75.75V4h1.25a.75.75 0 0 1 0 1.5H7V7a.75.75 0 0 1-1.5 0V5.5H4.25a.75.75 0 0 1 0-1.5H5.5V2.75A.75.75 0 0 1 6.25 2zM12 8a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4zm0 6a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3z" />
            </svg>
            <span>Last updated: 2025</span>
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
                alt="Privacy Icon"
                src={Privacy}
                width={300}
                height={260}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
