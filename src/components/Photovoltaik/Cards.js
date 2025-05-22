import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRulerCombined,
  FaFileAlt,
  FaTools,
  FaKey,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Ihre Anfrage",
    description:
      "Wir kümmern uns um Planung und Umsetzung. Von der Berechnung bis hin zur Installation haben Sie einen einzigen, kompetenten Ansprechpartner.",
    icon: <FaEnvelope className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Erstkontakt",
    description:
      "Ein Fachberater meldet sich telefonisch, um den genauen Bedarf abzuklären und einen Termin bei Ihnen vor Ort zu vereinbaren.",
    icon: <FaPhoneAlt className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Projektierung",
    description:
      "Wir vermessen das Dach Ihrer Immobilie und erstellen einen Vorplan, welches als Grundlage für Ihre Offerte dient.",
    icon: <FaRulerCombined className="text-white text-2xl" />,
  },
  {
    id: 4,
    title: "Erstellung der Offerte",
    description:
      "Unsere Profis erarbeiten eine massgeschneiderte, individuelle Offerte. Auf Wunsch inkludieren wir auch passende Förderungen.",
    icon: <FaFileAlt className="text-white text-2xl" />,
  },
  {
    id: 5,
    title: "Montage",
    description:
      "Ihnen sagt unsere Offerte zu? Perfekt! Wir sorgen für eine termingerechte Montage.",
    icon: <FaTools className="text-white text-2xl" />,
  },
  {
    id: 6,
    title: "Übergabe",
    description:
      "Bei der Inbetriebnahme erhalten Sie eine Instruktion von unseren Mitarbeitern. Wir übergeben Ihnen die Photovoltaik-Anlage schlüsselfertig.",
    icon: <FaKey className="text-white text-2xl" />,
  },
];

const ProcessSteps = () => {
  return (
    <section className="relative bg-[#f7f7f7] px-4 py-10 md:py-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-lg">
          Projektablauf
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
        </h2>
        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          Ihr Weg zur perfekten Photovoltaik-Lösung
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-[#669933] transition duration-300"
          >
            <div className="absolute -top-5 left-6 bg-[#669933] text-white rounded-full w-13 h-13 flex items-center justify-center shadow-md ring-4 ring-white text-sm font-bold z-10">
              {step.icon}
            </div>

            {/* <div className="mb-5 mt-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#669933] rounded-xl shadow-lg">
                {step.icon}
              </div>
            </div> */}

            <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-5">
              {step.title}
            </h4>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
