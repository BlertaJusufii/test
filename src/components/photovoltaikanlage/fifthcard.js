"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { API_IMG_URL } from "@/lib/apiImgUrl";

const PhotovoltaikOverviewSlider = ({ data }) => {
  
  
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Initialize with 1

    useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  
  if (
    !data ||
    !data.photovoltaik_title_fifth_card_first ||
    !data.photovoltaik_fifth_table ||
    data.photovoltaik_fifth_table.length === 0
  )
    return null;

  const title = data.photovoltaik_title_fifth_card_first;
  const subtitle = data.photovoltaik_subtitle_fifth_card_first;
  const items = data.photovoltaik_fifth_table;


  // Calculate visible count on client side only


  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="bg-white py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm mb-3 font-semibold text-[#669933] uppercase tracking-wide"
          >
            {subtitle}
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="flex justify-center items-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {Array.from({ length: visibleCount }).map((_, i) => {
                const item = items[(index + i) % items.length];
                return (
                  <motion.div
                    key={`${item.title}-${i}-${index}`} // More unique key
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    layout // Add layout animation
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={`${API_IMG_URL}${item.image}`}
                        alt={item.alt_text || "Image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotovoltaikOverviewSlider;