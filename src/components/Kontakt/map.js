"use client";

import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const Map = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col  gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-[18px] font-semibold text-[#669933] uppercase tracking-wider mb-2 text-center">
            Unsere Standorte
          </h2>
          <h3 className="text-[28px] md:text-[35px] font-bold text-gray-900 mb-4 text-center">
            Regional präsent, überregional aktiv – Finden Sie uns in Ihrer Nähe.
          </h3>
        </div>

        <div className="w-full h-[300px] md:h-[500px]">
          <iframe
            title="Projekt Standort"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9094444536347!2d9.741196115613785!3d47.48721237917747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c3a06d30d1993%3A0x9b1b64c7aa92d0e5!2sLandstra%C3%9Fe%2011%2C%206911%20Lochau%2C%20Austria!5e0!3m2!1sen!2sat!4v1678817752460!5m2!1sen!2sat"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
