"use client";

const Box = () => {
  return (
    <section className="w-full bg-white py-[30px] md:py-[60px] ">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center ">
          <h2 className="Vietnam-font font-semibold text-[#05325f] text-[28px] md:text-[35.62px]">
            Achieving Business Growth
          </h2>
        </div>
      </div>

      {/* Video with spacing */}
      <div className="max-w-[1200px] mx-auto md:px-8">
        <div className=" overflow-hidden">
          <video
            className="w-full md:w-[90%] h-full object-contain mx-auto"
            src="/videos/Achieving_Business_Growth.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Box;
