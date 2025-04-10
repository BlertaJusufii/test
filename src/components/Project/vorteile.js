"use client";
<<<<<<< HEAD
import React from "react";
=======

>>>>>>> CookieDeveloped
import { FaSolarPanel } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Vorteil = () => {
  return (
    <section className=" pb-16 md:pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Row: Image + Benefits Grid */}
        {/* Bottom Row: Split Text Sections */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Zukunftsperspektiven */}
          <div className="lg:w-1/2 border-4 border-[#669933] rounded-lg p-6 bg-white flex flex-col items-center">
            <div className="bg-[#669933] rounded-full p-6 mb-6">
              <FaSolarPanel className="text-white w-18 h-18  " />
            </div>
            <h2 className="text-[20px] font-bold text-gray-900 mb-6 text-center">
              Zukunftsperspektiven und nachhaltige Entwicklung
            </h2>
            <div className="space-y-4 text-gray-700 text-center text-[16px]">
              <p>
                Die Energiewende erfordert laufende Innovation und Anpassung. Förderprogramme und gesetzliche
                Rahmenbedingungen machen nachhaltige Energielösungen zunehmend attraktiv – sowohl für Privatpersonen als
                auch für Unternehmen.
              </p>
              <p>
                Ein besonderer Fokus liegt auf kombinierten Lösungen, die Photovoltaik, Speicher und intelligente
                Steuerung vereinen. So wird es möglich, den Stromverbrauch optimal an die Produktion anzupassen – eine
                zentrale Voraussetzung für eine CO₂-neutrale Energieversorgung.
              </p>
              <p>
                Gleichzeitig spielt die gesellschaftliche Sensibilisierung eine große Rolle. Mehr Bewusstsein für
                klimafreundliche Alternativen stärkt die Akzeptanz und treibt den Wandel hin zu einer nachhaltigen
                Energiezukunft voran.
              </p>
            </div>
          </div>

          {/* Right Column - Zukunft der Energie */}
          <div className="lg:w-1/2 border-4 border-[#669933] rounded-lg p-6 bg-white flex flex-col items-center">
            <div className="bg-[#669933] rounded-full p-6 mb-6">
              <FaFlag className="text-white w-18 h-18  " />
            </div>
            <h2 className="text-[20px] font-bold text-gray-900 mb-6 text-center">
              Die Zukunft der Energie: Nachhaltig und Unabhängig
            </h2>
            <div className="space-y-4 text-gray-700 text-center text-[16px]">
              <p>
                Die Nutzung von Solarenergie ist ein entscheidender Baustein für die Energiezukunft in Deutschland.
                Moderne Technologien machen es möglich, erneuerbare Energien effizient zu nutzen – sowohl wirtschaftlich
                als auch ökologisch.
              </p>
              <p>
                Dank intelligenter Speicherlösungen und optimierter Systemsteuerung lassen sich Solarprojekte heute
                flexibler und zuverlässiger realisieren als je zuvor.
              </p>
              <p>
                Photovoltaik Projekte wie die von Solartechnik zeigen, wie erfolgreich eine nachhaltige Umsetzung
                funktionieren kann.
              </p>
              <p>
                Mit kontinuierlicher Weiterentwicklung und dem Fokus auf Qualität und Individualisierung wird die
                Solarenergie zur bevorzugten Lösung der nächsten Generationen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vorteil;
