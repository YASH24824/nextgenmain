"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import blog1 from "../../assets/blog.png";
import Homebg from "../../assets/home-bg.png";

export default function Hero() {
  return (
    <section className="relative bg-[#245586] w-full min-h-[650px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
      {/* Background Image */}
      <Image
        src={Homebg}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-10 lg:py-0 gap-10 lg:gap-12 xl:gap-16 w-full max-w-7xl mx-auto">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 flex-1 text-center lg:text-left z-10 w-full lg:w-1/2"
        >
          <h1 className="text-white text-[32px] sm:text-[38px] lg:text-[44px] font-semibold leading-snug">
            Our Business <br /> Blog Spot
          </h1>

          <p className="text-white text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed tracking-wide">
            Resourceful insights, news, and guidance that help you <br className="hidden sm:block" />
            transform your business into a successful brand!
          </p>
        </motion.div>

        {/* Image Card (No Animation, Same Design as About/Solution/Contact) */}
        <div className="relative group w-full max-w-[500px] lg:flex-1 md:mt-4">
          <div className="relative backdrop-blur-lg bg-[#ebf2f8] border border-white/20 rounded-3xl p-6 shadow-xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
            
            {/* Optional soft gradient glow behind image */}
            <div className="absolute -inset-6 bg-gradient-to-br from-yellow-300/20 via-orange-400/20 to-pink-500/20 rounded-[3rem] blur-2xl opacity-40 z-0 group-hover:opacity-60 transition-all duration-700" />

            {/* Image */}
            <div className="relative z-10 w-full h-[250px] flex items-center justify-center">
              <Image
                className="object-contain max-w-full max-h-full transition-transform duration-700 group-hover:scale-105"
                alt="Blog Illustration"
                src={blog1}
                width={420}
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
