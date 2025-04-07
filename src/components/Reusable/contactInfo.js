"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function GreenFeatureSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Text Content (75% width) */}
        <motion.div
          className="w-full md:w-3/4 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[18px] font-bold" style={{ color: "#669933" }}>
            Nachhaltige Energie für Ihr Zuhause
          </h2>

          <p className="text-[16px] text-gray-600">
            Entdecken Sie unsere maßgeschneiderten Photovoltaik-Lösungen, die Ihnen helfen, Energie zu sparen und
            gleichzeitig die Umwelt zu schonen. Unsere Experten beraten Sie gerne zu den besten Optionen für Ihr
            Zuhause.
          </p>

          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white transition-colors hover:bg-[#558822] text-[16px] uppercase"
            style={{ backgroundColor: "#669933" }}
          >
            Jetzt Kontaktieren
            <FaChevronRight />
          </Link>
        </motion.div>

        {/* Right Column - Rounded Image (25% width) */}
        <motion.div
          className="w-full md:w-1/4 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative aspect-square w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <Image
              src="/Images/Home/contactImage.jpg"
              alt="Solaranlage auf einem Hausdach"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100px, 200px"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
