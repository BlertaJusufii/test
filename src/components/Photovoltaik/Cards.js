import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRulerCombined,
  FaFileAlt,
  FaTools,
  FaKey,
} from "react-icons/fa";

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: "1. Ihre Anfrage",
      description: "Wir kümmern uns um Planung und Umsetzung. Von der Berechnung bis hin zur Installation haben Sie einen einzigen, kompetenten Ansprechpartner.",
      icon: <FaEnvelope className="text-white text-xl" />
    },
    {
      id: 2,
      title: "2. Erstkontakt",
      description: "Ein Fachberater meldet sich telefonisch, um den genauen Bedarf abzuklären und einen Termin bei Ihnen vor Ort zu vereinbaren.",
      icon: <FaPhoneAlt className="text-white text-xl" />
    },
    {
      id: 3,
      title: "3. Projektierung",
      description: "Wir vermessen das Dach Ihrer Immobilie und erstellen einen Vorplan, welches als Grundlage für Ihre Offerte dient.",
      icon: <FaRulerCombined className="text-white text-xl" />
    },
    {
      id: 4,
      title: "4. Erstellung der Offerte",
      description: "Unsere Profis erarbeiten eine massgeschneiderte, individuelle Offerte. Auf Wunsch inkludieren wir auch passende Förderungen.",
      icon: <FaFileAlt className="text-white text-xl" />
    },
    {
      id: 5,
      title: "5. Montage",
      description: "Ihnen sagt unsere Offerte zu? Perfekt! Wir sorgen für eine termingerechte Montage.",
      icon: <FaTools className="text-white text-xl" />
    },
    {
      id: 6,
      title: "6. Übergabe",
      description: "Bei der Inbetriebnahme erhalten Sie eine Instruktion von unseren Mitarbeitern. Wir übergeben Ihnen die Photovoltaik-Anlage schlüsselfertig.",
      icon: <FaKey className="text-white text-xl" />
    }
  ];

  return (
    <div className="bg-gray-100 px-4 w-full pt-15 pb-15 lg:pt-20 lg:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-lg">
            PROJEKTABLAUF
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h3>
          <h2 className="text-3xl font-bold mt-10 text-gray-800">
            Ihr Weg zur perfekten Photovoltaik-Lösung
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {steps.map((step) => (
            <div key={step.id} className="border border-gray-400 rounded-md p-8 ">
              <div className="bg-[#669933] w-12 h-12  flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;