"use client";

import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 flex-col lg:flex-row sm:px-6 lg:px-8 flex  gap-8 items-center">
        {/* Left Side - Contact Information */}
        <div className="space-y-6 w-full lg:w-3/5">
          <div className="flex flex-col gap-4">
            <h2 className="text-[18px] font-semibold text-[#669933] uppercase tracking-wider mb-2">
              WIR SIND FÜR SIE DA
            </h2>
            <h3 className="text-[28px] md:text-[35px] font-bold text-gray-900 mb-4">Kontaktieren Sie Uns</h3>
            <p className="text-lg text-gray-700 text-[16px]">
              Sie schätzen den persönlichen Kontakt? Wir auch. Rufen Sie uns doch einfach an oder nutzen Sie unser
              Kontaktformular.
            </p>
          </div>

          <div className="space-y-4 grid grid-cols-3 gap-4">
            {/* Phone */}
            <div className="flex flex-col items-start space-x-3 gap-4">
              <div className="p-2 bg-[#669933] text-white rounded-md">
                <FaPhone className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-800  text-[16px]">+49 8245 96 788 0</p>
                <p className="text-gray-600  text-[16px]">office@oekovolt.de</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-start space-x-3 gap-4">
              <div className="p-2 bg-[#669933] text-white rounded-md">
                <FaMapMarkerAlt className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-800 text-[16px]">Schlingener Straße 1a</p>
                <p className="text-gray-600 text-[16px]">86842 Türkheim, </p>
                <p className="text-gray-600 text-[16px]">Deutschland</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col items-start space-x-3 gap-4">
              <div className="p-2 bg-[#669933] text-white rounded-md">
                <FaClock className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-800 text-[16px]">Montag - Donnerstag</p>
                <p className="text-gray-600 text-[16px]">08:00 - 16:00</p>
                <p className="text-gray-800 mt-2 text-[16px]">Freitag</p>
                <p className="text-gray-600 text-[16px]">08:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" w-full lg:w-2/5">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/Images/Kontakt/download-1.jpg" // Replace with the actual image path
              alt="Zentrale von Ökovolt Deutschland in Türkheim (Bayern)"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-gray-600 text-[16px] mt-2">
            Zentrale von Ökovolt Deutschland in Türkheim (Bayern)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
