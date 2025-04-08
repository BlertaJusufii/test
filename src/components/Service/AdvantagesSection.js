import React from "react";
import { FaHandsHelping, FaLeaf, FaSolarPanel } from "react-icons/fa";

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      title: "Einfachheit",
      description: "Wir kümmern uns um alles – von der Berechnung über die PV-Anlage Inspektion bis zur fachgerechten Umsetzung. Sie haben einen zentralen Ansprechpartner für alle Serviceleistungen.",
      icon: <FaHandsHelping className="text-white text-xl" />
    },
    {
      id: 2,
      title: "Nachhaltigkeit",
      description: "Mit Ihrer Photovoltaikanlage erzeugen Sie saubere Energie direkt aus Sonnenlicht – 100 % erneuerbar, CO₂-frei und effizient.",
      icon: <FaLeaf className="text-white text-xl" />
    },
    {
      id: 3,
      title: "Langlebigkeit",
      description: "Regelmäßige Wartung sorgt für maximale Lebensdauer Ihrer Anlage. Photovoltaikanlagen liefern zuverlässige Energie über Jahrzehnte – bei minimalem Wartungsaufwand.",
      icon: <FaSolarPanel className="text-white text-xl" />
    }
  ];

  return (
    <div className="bg-gray-100 px-4 py-16 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
            VORTEILE
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h3>
          <h2 className="text-3xl font-bold mt-6 text-gray-800">
            Ihre Vorteile mit unserem Photovoltaik-Service
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="border border-gray-200 p-8 bg-white">
              <div className="bg-[#669933] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {advantage.title}
              </h3>
              <p className="text-gray-700">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;