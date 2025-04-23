import React from "react";
import {
  HiOutlineCog6Tooth,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const cards = [
  {
    title: "Ökosys von Ökovolt",
    description:
      "Permanente KI-Überwachung Ihrer Photovoltaikanlage für höchste Leistung und Vermeidung von Ausfällen – intelligentes Energiemanagement für Deutschland.",
    icon: <HiOutlineCog6Tooth className="w-10 h-10" />,
  },
  {
    title: "Notstrombox",
    description:
      "Jederzeit unabhängig: Beziehen Sie Strom aus Ihrem Speicher – selbst bei Netzstörungen. Für maximale Sicherheit und Eigenverbrauch Ihrer Solarenergie.",
    icon: <HiOutlineBolt className="w-10 h-10" />,
  },
  {
    title: "Service & Wartung",
    description:
      "Automatische Fehlererkennung, professionelle Wartung und schnelle Lösungen durch unser erfahrenes Expertenteam – Ihr zuverlässiger Photovoltaik Service in Deutschland.",
    icon: <HiOutlineWrenchScrewdriver className="w-10 h-10" />,
  },
];

const ServicesBanner = () => {
  return (
    <div className="bg-white px-4 z-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative z-20 bg-white mt-[-100px] shadow-[0px_20px_20px_-10px_rgba(0,0,0,0.5)] p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-1 gap-10">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start  md:flex-row md:items-start justify-center items-center gap-4">
                <div className="w-18 h-18 rounded-full bg-[#669933] flex items-center justify-center text-white shrink-0 pulse-hover transition-all">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-[540] text-black mb-2 text-center sm:text-start leading-[1.7]">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-center sm:text-start">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
