"use client";
import React from "react";
import { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";
import slide1 from "../../assets/slide1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsMobile = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1, // desktop
    slidesToScroll: 1,
    centerPadding: "15%", // how much side slides peek in desktop
  };

  // Replace shorts URLs with embed URLs
  // const videos = [
  //   "https://www.youtube.com/embed/CH8jBkQk-DI",
  //   "https://www.youtube.com/embed/m9Quda1uOmo",
  //   "https://www.youtube.com/embed/Ljt18uURvBc",
  //   "https://www.youtube.com/embed/4pAlebkNPVg",
  // ];
  const videos = ["CH8jBkQk-DI", "m9Quda1uOmo", "Ljt18uURvBc", "4pAlebkNPVg"];
  return (
    <div className="slider-container max-w-6xl mx-auto px-4 py-10">
      <div>
        {/* Slider with thumbnails */}
        <Slider {...settings}>
          {videos.map((id, i) => (
            <div
              key={i}
              className="relative cursor-pointer rounded-xl overflow-hidden
              shadow-lg flex items-center justify-center bg-black"
              onClick={() => setSelectedVideo(id)}
            >
              {/* YouTube thumbnail */}
              <Image
                src={slide1}
                alt={`Video ${i + 1}`}
                className="h-full w-full object-cover rounded-xl"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-16 h-16 opacity-90"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}
        </Slider>

        {/* Popup modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-[90%] max-w-3xl bg-black rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Close button */}
              <button
                className="absolute -top-10 right-0 text-white text-3xl"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsMobile;
