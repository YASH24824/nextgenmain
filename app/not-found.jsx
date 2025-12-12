// app/not-found.tsx
import Image from 'next/image';
import notfoundInmage from './assets/404.png';
import  './privacy-policy/page.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Hero_Banner from "./assets/Hero _Banner.webp";
export default function NotFound() {
  return (
    <>
    <Header />

     <section className="relative w-full min-h-[100px] overflow-hidden flex items-center justify-center pt-24 sm:pt-28">
      <Image
        src={Hero_Banner}
        alt="Hero Banner"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>

    <section className="relative bg-[#EAF2FF] w-full min-h-[650px] overflow-hidden flex gap-4 items-center justify-center ">
     

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-between px-4  py-10 md:py-0 gap-3  w-full md:max-w-[1000px] mx-auto">
        {/* Text Content */}
        <div className=" basis-1/2 flex flex-col gap-4 flex-1 text-center lg:text-left z-10 w-full lg:w-1/2 md:w-full">
          {/* Heading */}
          <h1 className="text-[#2E6FB6] text-[32px] lg:text-[60.94px] font-semibold leading-snug text-left">
           Oooops....
          </h1>

          {/* Description */}
          <p className="text-[#2E5AA8]   md:text-[18.55px] leading-relaxed tracking-wide text-left whitespace-normal">
           Page Not found
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap justify-start md:justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
            {/* Avail Now Button centered */}
                <a
                  href="/contact"
                  className="py-1 px-2 md:w-[220px]  md:h-[51px] rounded-md bg-[#3A80C1] hover:bg-[#3076b7] flex items-center justify-center transition"
                >
                  <span className="font-normal text-white text-small text-[11.99px] md:text-[22px] flex items-center">
                    Go Back
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      className="w-[14px] md:w-[21px] h-[8px] md:h-[12px] ml-2 md:ml-4"
                    >
                      <path
                        d="M9.57159 7.31981L13.1948 4.15991L9.57159 1"
                        stroke="white"
                        stroke-width="0.679356"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.7754 4.23535L0.999939 4.23535"
                        stroke="white"
                        stroke-width="0.679356"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </a>
          </div>
        </div>

        {/* About Image */}
        <div className="basis-1/2 w-full flex items-center justify-center md:mt-4 md:w-full">
          <Image
            className="object-contain w-full h-80"
            alt="Group"
            src={notfoundInmage}
            width={400}
            height={250}
            priority
          />
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
}
