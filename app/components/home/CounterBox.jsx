"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function CounterBox({
  number,
  suffix = "+",
  title,
  bg,
  icon,
  iconWidth,
  iconHeight,
  iconClass,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="relative border-0 shadow-none rounded-lg overflow-hidden">
      <div
        className="relative flex flex-col justify-between  px-4 py-4"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(46, 111, 182, 0.4) 0%, rgba(123, 174, 224, 0.4) 100%), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Counter Number */}
        <div className="flex flex-col items-start pt-10 md:pt-20">
          {/* Number */}
          <div className="bebas-neue-regular font-normal text-[#264c92]  bottom-12 text-[38.78px] md:text-[54.64px] leading-normal">
            {count}
            {suffix}
          </div>

          {/* Title */}
          <div className="bebas-neue-regular font-normal text-[#264c92]   bottom-3 text-[22.16px] md:text-[31.22px] leading-normal">
            {title}
          </div>
        </div>
        {/* Icon */}
        <Image
          className={`absolute top-3 right-3 ${iconClass}`}
          width={iconWidth || 60}
          height={iconHeight || 60}
          alt={title}
          src={icon}
        />
      </div>
    </div>
  );
}

export default CounterBox;
