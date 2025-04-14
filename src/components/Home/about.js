"use client";
import React, { useEffect, useRef } from "react";
import { HiOutlineCog6Tooth, HiOutlineBolt, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const cards = [
  {
    title: "Ökosys von Ökovolt",
    description:
      "Permanente KI-Überwachung Ihrer Photovoltaikanlage für höchste Leistung und Vermeidung von Ausfällen – intelligentes Energiemanagement für Deutschland.",
    icon: <HiOutlineCog6Tooth className="w-6 h-6" />,
    pulseDuration: "1000ms",
  },
  {
    title: "Notstrombox",
    description:
      "Jederzeit unabhängig: Beziehen Sie Strom aus Ihrem Speicher – selbst bei Netzstörungen. Für maximale Sicherheit und Eigenverbrauch Ihrer Solarenergie.",
    icon: <HiOutlineBolt className="w-6 h-6" />,
    pulseDuration: "2000ms",
  },
  {
    title: "Service & Wartung",
    description:
      "Automatische Fehlererkennung, professionelle Wartung und schnelle Lösungen durch unser erfahrenes Expertenteam – Ihr zuverlässiger Photovoltaik Service in Deutschland.",
    icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />,
    pulseDuration: "2000ms",
  },
];

const ServicesBanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll(".fade-up-card");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-white pb-10 md:pb-15 max-w-7xl mx-auto px-4 -mt-20">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="fade-up-card group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden opacity-0 translate-y-10"
            style={{ transitionDelay: `${i * 300}ms` }}
          >
            <div className="relative z-20 flex items-center mb-6">
              <div className="relative w-16 h-16 rounded-full bg-[#669933] flex items-center justify-center text-white mr-4 group-hover:bg-[#557A29] transition-colors duration-300">
                {card.icon}
                <span
                  className={`absolute inset-0 rounded-full border-2 border-blue-400 scale-100 opacity-0 group-hover:scale-[1.2] group-hover:opacity-100 transition-all`}
                  style={{ transitionDuration: card.pulseDuration }}
                ></span>
              </div>
              <h3 className="text-[20px] lg:text-[24px] font-bold text-gray-900 ">{card.title}</h3>
            </div>
            <p className="text-gray-600 mb-6 relative z-20 text-[16px] lg:text-[20px]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBanner;
