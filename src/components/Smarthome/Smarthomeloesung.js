import React from "react";
import {
  FaBatteryThreeQuarters,
  FaCar,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";

function VorteileSection() {
  return (
    <section className="bg-gray-100 py-10 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#669933] uppercase m-0 p-0 font-semibold tracking-wide inline-block relative text-lg">
            Vorteile
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-6 text-gray-900 leading-[1.5]">
            Vorteile mit einer Smarthome-Lösung
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
          {/* Energiekosten reduzieren */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center text-green-600 text-3xl">
                <FaBatteryThreeQuarters className="text-[#669933]" size={40} />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Energiekosten reduzieren
              </h3>
              <p className="text-gray-700 text-md">
                Ihre Photovoltaik-Großanlage verringert nicht nur die direkten
                Energiekosten, sondern auch Netzgebühren und Abgaben erheblich.
              </p>
            </div>
          </div>

          {/* Mobilitätskosten reduzieren */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center text-green-600 text-3xl">
                <FaCar className="text-[#669933]" size={40} />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mobilitätskosten reduzieren
              </h3>
              <p className="text-gray-700 text-md">
                Mit selbst erzeugter Solarenergie versorgen Sie Ihre
                E-Fahrzeugflotte kostengünstig und umweltfreundlich.
              </p>
            </div>
          </div>

          {/* Notstrombox */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center text-green-600 text-3xl">
                <FaBolt className="text-[#669933]" size={40} />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notstrombox
              </h3>
              <p className="text-gray-700 text-md">
                Begriffe wie umweltfreundlich, wartungsarm, unabhängig und leise
                beschreiben die Vorteile einer Notstrombox perfekt. Sie bieten
                eine zuverlässige und nachhaltige Lösung für die Stromversorgung
                – ganz ohne Lärm oder hohe Wartungsanforderungen.
              </p>
            </div>
          </div>

          {/* Smartmeter */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center text-green-600 text-3xl">
                <FaMobileAlt className="text-[#669933]" size={40} />
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smartmeter
              </h3>
              <p className="text-gray-700 text-md">
                Überwachen Sie Ihren Eigenverbrauch in Echtzeit und optimieren
                Sie Ihren Energiehaushalt. Das Smartmeter zeigt Ihnen genau, wie
                viel Energie aktuell produziert und verbraucht wird.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VorteileSection;
