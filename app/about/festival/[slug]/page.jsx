"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../../../assets/ganesh/1.JPG";
import image2 from "../../../assets/ganesh/2.JPG";
// import image3 from "../../../assets/ganesh/3.jpg";
// import image4 from "../../../assets/ganesh/4.jpg";
// import image5 from "../../../assets/ganesh/5.jpg";
import image6 from "../../../assets/ganesh/6.JPG";
import image7 from "../../../assets/ganesh/7.JPG";
import image8 from "../../../assets/ganesh/8.JPG";
import image9 from "../../../assets/ganesh/9.JPG";
import image10 from "../../../assets/ganesh/10.JPG";
import image12 from "../../../assets/ganesh/12.JPG";
import image13 from "../../../assets/ganesh/13.JPG";
import image14 from "../../../assets/ganesh/14.JPG";
import image15 from "../../../assets/ganesh/15.JPG";
import image16 from "../../../assets/ganesh/16.JPG";
import image17 from "../../../assets/ganesh/17.JPG";
import image18 from "../../../assets/ganesh/18.JPG";

import image21 from "../../../assets/diwali/1.jpg";
import image22 from "../../../assets/diwali/2.jpg";
import image23 from "../../../assets/diwali/3.jpg";
import image24 from "../../../assets/diwali/4.jpg";
import image25 from "../../../assets/diwali/5.jpg";
import image26 from "../../../assets/diwali/6.jpg";
import image27 from "../../../assets/diwali/7.jpg";
import image28 from "../../../assets/diwali/8.jpg";
import image29 from "../../../assets/diwali/9.jpg";
import image30 from "../../../assets/diwali/10.jpg";

import image31 from "../../../assets/diwali/11.jpg";
import image32 from "../../../assets/diwali/12.jpg";
import image33 from "../../../assets/diwali/13.jpg";
import image34 from "../../../assets/diwali/14.jpg";
import image35 from "../../../assets/diwali/15.jpg";
import image36 from "../../../assets/diwali/16.jpg";
import image37 from "../../../assets/diwali/17.jpg";
import image38 from "../../../assets/diwali/18.jpg";
import image39 from "../../../assets/diwali/19.jpg";
import image40 from "../../../assets/diwali/20.jpg";

import image41 from "../../../assets/diwali/21.jpg";
import image42 from "../../../assets/diwali/22.jpg";
import image43 from "../../../assets/diwali/23.jpg";
import image44 from "../../../assets/diwali/24.jpg";
import image45 from "../../../assets/diwali/25.jpg";

import img46 from "../../../assets/activites/1.jpg";
import img47 from "../../../assets/activites/2.jpg";
import img48 from "../../../assets/activites/3.jpg";
import img49 from "../../../assets/activites/4.jpg";
import img50 from "../../../assets/activites/5.jpg";
import img51 from "../../../assets/activites/6.jpg";
import img52 from "../../../assets/activites/7.jpg";
import img53 from "../../../assets/activites/8.jpg";
import img54 from "../../../assets/activites/9.jpg";
import img55 from "../../../assets/activites/10.jpg";
import img56 from "../../../assets/activites/11.jpg";
import img57 from "../../../assets/activites/12.jpg";
import img58 from "../../../assets/activites/13.jpg";
import img59 from "../../../assets/activites/14.jpg";
import img60 from "../../../assets/activites/15.jpg";
import img61 from "../../../assets/activites/16.jpg";
import img62 from "../../../assets/activites/17.jpg";
import img63 from "../../../assets/activites/18.jpg";
import img64 from "../../../assets/activites/19.jpg";
import img65 from "../../../assets/activites/20.jpg";
import img66 from "../../../assets/activites/21.jpg";
import img67 from "../../../assets/activites/22.jpg";
import img68 from "../../../assets/activites/23.jpg";
import img69 from "../../../assets/activites/24.jpg";
import img70 from "../../../assets/activites/25.jpg";
import img71 from "../../../assets/activites/26.jpg";

const celebrationData = [
  {
    id: "ganesh",
    slug: "ganesh-chaturthi-celebrations",
    img: image1,
    title: "Ganesh Chaturthi Celebrations at NextGen",
    category: "Events",
    date: "September 27, 2025",
    gallery: [
      { src: image1, height: 600 },
      { src: image2, height: 450 },
      // { src: image3, height: 700 },
      // { src: image4, height: 500 },
      // { src: image5, height: 650 },
      { src: image6, height: 550 },
      { src: image7, height: 400 },
      { src: image8, height: 750 },
      { src: image9, height: 480 },
      { src: image10, height: 600 },
      { src: image12, height: 680 },
      { src: image13, height: 430 },
      { src: image14, height: 590 },
      { src: image15, height: 710 },
      { src: image16, height: 470 },
      { src: image17, height: 640 },
      { src: image18, height: 560 },
    ],
  },
  {
    id: "diwali",
    slug: "diwali-celebrations",
    img: image21,
    title: "Diwali Celebrations at NextGen",
    category: "Events",
    date: "October 20, 2025",
    gallery: [
      { src: image21, height: 620 },
      { src: image22, height: 480 },
      { src: image23, height: 700 },
      { src: image24, height: 540 },
      { src: image25, height: 660 },
      { src: image26, height: 520 },
      { src: image27, height: 430 },
      { src: image28, height: 760 },
      { src: image29, height: 500 },
      { src: image30, height: 610 },
      { src: image31, height: 690 },
      { src: image32, height: 450 },
      { src: image33, height: 580 },
      { src: image34, height: 720 },
      { src: image35, height: 490 },
      { src: image36, height: 640 },
      { src: image37, height: 530 },
      { src: image38, height: 750 },
      { src: image39, height: 470 },
      { src: image40, height: 600 },
      { src: image41, height: 680 },
      { src: image42, height: 520 },
      { src: image43, height: 710 },
      { src: image44, height: 460 },
      { src: image45, height: 590 },
    ],
  },
  {
    id: "activities",
    slug: "events-activities",
    img: img46, // Fixed: Changed from activity1 to img46
    title: "Events & Activities at NextGen", // Fixed: Spelling correction
    category: "Events",
    date: "November 29, 2025",
    gallery: [
      { src: img46, height: 650 },
      { src: img47, height: 480 },
      { src: img48, height: 700 },
      { src: img49, height: 520 },
      { src: img50, height: 610 },
      { src: img51, height: 450 },
      { src: img52, height: 680 },
      { src: img53, height: 540 },
      { src: img54, height: 620 },
      { src: img55, height: 500 },
      { src: img56, height: 660 },
      { src: img57, height: 470 },
      { src: img58, height: 720 },
      { src: img62, height: 710 },
      { src: img59, height: 560 },
      { src: img60, height: 640 },
      { src: img61, height: 490 },
      { src: img63, height: 530 },
      { src: img64, height: 600 },
      { src: img65, height: 460 },
      { src: img66, height: 680 },
      { src: img67, height: 510 },
      { src: img68, height: 730 },
      { src: img69, height: 550 },
      { src: img70, height: 620 },
      { src: img71, height: 480 },
    ],
  },
];

export default function FestivalGallery({ params }) {
  const [festival, setFestival] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const foundFestival = celebrationData.find((f) => f.slug === params.slug);
    setFestival(foundFestival);
    if (foundFestival) {
      setTotalImages(foundFestival.gallery.length);
    }
  }, [params.slug]);

  useEffect(() => {
    if (festival && totalImages > 0) {
      // Reset loading state when festival changes
      setImagesLoaded(0);

      // Create Image objects to preload
      const loadPromises = festival.gallery.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = item.src.default?.src || item.src.src || item.src;
          img.onload = () => {
            setImagesLoaded((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => {
            setImagesLoaded((prev) => prev + 1);
            resolve(); // Still resolve to continue loading
          };
        });
      });

      Promise.all(loadPromises).then(() => {
        setLoading(false);
      });
    }
  }, [festival, totalImages]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  // Calculate loading percentage

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#1c4268] rounded-full animate-spin" />

          {/* Text */}
          <p className="text-sm font-medium text-[#1c4268]">
            Loading gallery...
          </p>
        </div>
      </div>
    );
  }

  if (!festival) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Festival Not Found
          </h2>
          <p className="text-gray-600">
            The festival gallery you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-10 mb-10"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1c4268] mt-4 relative inline-block group">
            {festival.title}
            <span className="absolute left-0 -bottom-3 h-1 bg-[#245586] w-0 transition-all duration-500 group-hover:w-full"></span>
          </motion.h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-gray-600 text-lg">
            <span className="text-gray-400">•</span>
            <span>{festival.date}</span>
            <span className="text-gray-400">•</span>
          </div>
        </motion.div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 px-4">
          {festival.gallery.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={item.src}
                  alt={`${festival.title} - Image ${index + 1}`}
                  width={400}
                  height={item.height}
                  className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index < 3}
                  loading={index < 3 ? undefined : "lazy"}
                  onLoad={handleImageLoad}
                  ref={(el) => {
                    if (el && !imageRefs.current.includes(el)) {
                      imageRefs.current.push(el);
                    }
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm bg-black/30 px-3 py-1 rounded-full">
                      Image {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Info Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center px-4">
          <p className="text-gray-600 mb-2">
            Showing {festival.gallery.length} images from {festival.title}
          </p>
          <p className="text-sm text-gray-500">
            All images loaded successfully • Optimized for fast viewing
          </p>
        </div>
      </div>
    </main>
  );
}
