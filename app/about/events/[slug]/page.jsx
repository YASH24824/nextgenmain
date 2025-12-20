"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const image1 = "/assets/ganesh/1.webp";
const image2 = "/assets/ganesh/2.webp";
const image6 = "/assets/ganesh/6.webp";
const image7 = "/assets/ganesh/7.webp";
const image8 = "/assets/ganesh/8.webp";
const image9 = "/assets/ganesh/9.webp";
const image10 = "/assets/ganesh/10.webp";
const image12 = "/assets/ganesh/12.webp";
const image13 = "/assets/ganesh/13.webp";
const image14 = "/assets/ganesh/14.webp";
const image15 = "/assets/ganesh/15.webp";
const image16 = "/assets/ganesh/16.webp";
const image17 = "/assets/ganesh/17.webp";
const image18 = "/assets/ganesh/18.webp";

const image21 = "/assets/diwali/1.webp";
const image22 = "/assets/diwali/2.webp";
const image23 = "/assets/diwali/3.webp";
const image24 = "/assets/diwali/4.webp";
const image25 = "/assets/diwali/5.webp";
const image26 = "/assets/diwali/6.webp";
const image27 = "/assets/diwali/7.webp";
const image28 = "/assets/diwali/8.webp";
const image29 = "/assets/diwali/9.webp";
const image30 = "/assets/diwali/10.webp";

const image31 = "/assets/diwali/11.webp";
const image32 = "/assets/diwali/12.webp";
const image33 = "/assets/diwali/13.webp";
const image34 = "/assets/diwali/14.webp";
const image35 = "/assets/diwali/15.webp";
const image36 = "/assets/diwali/16.webp";
const image37 = "/assets/diwali/17.webp";
const image38 = "/assets/diwali/18.webp";
const image39 = "/assets/diwali/19.webp";
const image40 = "/assets/diwali/20.webp";

const image41 = "/assets/diwali/21.webp";
const image42 = "/assets/diwali/22.webp";
const image43 = "/assets/diwali/23.webp";
const image44 = "/assets/diwali/24.webp";
const image45 = "/assets/diwali/25.webp";

const img46 = "/assets/activites/1.webp";
const img47 = "/assets/activites/2.webp";
const img48 = "/assets/activites/3.webp";
const img49 = "/assets/activites/4.webp";
const img50 = "/assets/activites/5.webp";
const img51 = "/assets/activites/6.webp";
const img52 = "/assets/activites/7.webp";
const img53 = "/assets/activites/8.webp";
const img54 = "/assets/activites/9.webp";
const img55 = "/assets/activites/10.webp";
const img56 = "/assets/activites/11.webp";
const img57 = "/assets/activites/12.webp";
const img58 = "/assets/activites/13.webp";
const img59 = "/assets/activites/14.webp";
const img60 = "/assets/activites/15.webp";
const img61 = "/assets/activites/16.webp";
const img62 = "/assets/activites/17.webp";
const img63 = "/assets/activites/18.webp";
const img64 = "/assets/activites/19.webp";
const img65 = "/assets/activites/20.webp";
const img66 = "/assets/activites/21.webp";
const img67 = "/assets/activites/22.webp";
const img68 = "/assets/activites/23.webp";
const img69 = "/assets/activites/24.webp";
const img70 = "/assets/activites/25.webp";
const img71 = "/assets/activites/26.webp";

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

export default function EventsGallery({ params }) {
  const [festival, setFestival] = useState(null);
  const resolvedParams = use(params);

  useEffect(() => {
    const foundFestival = celebrationData.find((f) => f.slug === resolvedParams.slug);
    setFestival(foundFestival);
  }, [resolvedParams.slug]);

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
        </div>
      </div>
    </main>
  );
}
