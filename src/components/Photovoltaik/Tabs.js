"use client";
import React, { useState } from "react";
import { FaHome, FaBuilding, FaIndustry, FaTractor } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Tabs() {
  const [activeComponent, setActiveComponent] = useState("privathaushalte");

  return (
    <div className="flex justify-center items-center">
      <main className="flex flex-col lg:flex-row max-w-7xl w-full py-10 md:py-16 pl-0 pr-0 md:pr-10 md:pl-10">
        {/* Sidebar */}
        <div className="w-full lg:w-84 bg-white">
          <nav className="p-4 border border-gray-200">
            <ul className="space-y-4">
              {/* Privathaushalte */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "privathaushalte"
                        ? null
                        : "privathaushalte"
                    )
                  }
                  className={`flex items-center w-full p-2 text-left rounded cursor-pointer text-[21px] ${
                    activeComponent === "privathaushalte"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaHome className="mr-2 text-[#669933]" size={24} />
                  Privathaushalte
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "privathaushalte" && (
                    <motion.div
                      key="privathaushalte"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border-b border-gray-200 lg:hidden"
                    >
                      <Privathaushalte />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Mehrfamilienhäuser */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "mehrfamilienhaeuser"
                        ? null
                        : "mehrfamilienhaeuser"
                    )
                  }
                  className={`flex items-center w-full p-2 text-left cursor-pointer rounded text-[21px] ${
                    activeComponent === "mehrfamilienhaeuser"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaBuilding className="mr-2 text-[#669933]" size={24} />
                  Mehrfamilienhäuser
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "mehrfamilienhaeuser" && (
                    <motion.div
                      key="mehrfamilienhaeuser"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border border-gray-200 lg:hidden"
                    >
                      <Mehrfamilienhaeuser />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Gewerbe und Industrie */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "gwerbeundindustrie"
                        ? null
                        : "gwerbeundindustrie"
                    )
                  }
                  className={`flex items-center w-full p-2 text-left cursor-pointer rounded text-[21px] ${
                    activeComponent === "gwerbeundindustrie"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaIndustry className="mr-2 text-[#669933]" size={24} />
                  Gewerbe und Industrie
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "gwerbeundindustrie" && (
                    <motion.div
                      key="gwerbeundindustrie"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border border-gray-200 lg:hidden"
                    >
                      <Gwerbeundindustrie />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Landwirtschaft */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "landwirtschaft"
                        ? null
                        : "landwirtschaft"
                    )
                  }
                  className={`flex items-center w-full p-2 text-left cursor-pointer rounded text-[21px] ${
                    activeComponent === "landwirtschaft"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaTractor className="mr-2 text-[#669933]" size={24} />
                  Landwirtschaft
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "landwirtschaft" && (
                    <motion.div
                      key="landwirtschaft"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border border-gray-200 lg:hidden"
                    >
                      <Landwirtschaft />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Content (desktop only) */}
        <div className="hidden lg:flex flex-1 p-8 border border-gray-200">
          <AnimatePresence mode="wait">
            {activeComponent === "privathaushalte" && (
              <motion.div
                key="desktop-privathaushalte"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Privathaushalte />
              </motion.div>
            )}
            {activeComponent === "mehrfamilienhaeuser" && (
              <motion.div
                key="desktop-mehrfamilienhaeuser"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Mehrfamilienhaeuser />
              </motion.div>
            )}
            {activeComponent === "gwerbeundindustrie" && (
              <motion.div
                key="desktop-gwerbeundindustrie"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Gwerbeundindustrie />
              </motion.div>
            )}
            {activeComponent === "landwirtschaft" && (
              <motion.div
                key="desktop-landwirtschaft"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Landwirtschaft />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- Content Components ---
// These are placeholders, you can replace them with your actual content.

// Components
function Privathaushalte() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl  font-semibold mb-10 tracking-wide inline-block relative">
        Warum eine Photovoltaikanlage für Ihr Zuhause?
      </h2>
      <hr className="w-70  h-1 bg-[#669933] text-[#669933] mt-[-30px] mb-5"></hr>
      {/* <h1 className="text-2xl font-semibold text-[#669933] mb-6">Warum eine Photovoltaikanlage für Ihr Zuhause?</h1> */}
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/house.png"
          alt="Privathaushalte"
          width={1200}
          height={250}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Ein verantwortungsvoller Umgang mit natürlichen Ressourcen und eine
          stabile Energieversorgung sind essenziell für unsere Lebensqualität –
          heute und in Zukunft. Eine moderne Photovoltaikanlage, die direkt
          Sonnenstrom für Ihr Zuhause erzeugt, bringt zahlreiche Vorteile:
          Geringere Energiekosten – Senken Sie Ihre Stromkosten langfristig,
          Unabhängigkeit vom Strommarkt – Nutzen Sie Ihren eigenen Solarstrom,
          Umweltfreundlich & nachhaltig – Reduzieren Sie CO₂-Emissionen,
          Staatliche Förderung – Zahlreiche Programme unterstützen Ihr
          Solar-Projekt.
        </p>
      </div>
    </div>
  );
}

function Mehrfamilienhaeuser() {
  return (
    <div className="max-w-4xl">
      {/* <h1 className="text-2xl font-semibold text-[#669933] mb-6">
        Setzen Sie auf unsere Lösungen – Maßgeschneiderte Photovoltaik für Ihr Gebäude
      </h1> */}
      <h2 className="text-2xl  font-semibold  tracking-wide inline-block relative">
        Maßgeschneiderte Photovoltaik für Ihr Gebäude
      </h2>
      <hr className="w-70  h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>

      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/download-2.jpg"
          alt="Mehrfamilienhäuser"
          width={600}
          height={350}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Intelligente PV-Anlagen mit maximalem Eigenverbrauch
        </p>
        <p className="text-gray-800 text-[18px]">
          Eine moderne Immobilie zeichnet sich durch Effizienz, Nachhaltigkeit &
          niedrige Betriebskosten aus. Photovoltaikanlagen mit hoher
          Eigenverbrauchsquote sorgen für: Reduzierte Energiekosten &
          Netzgebühren, Unabhängigkeit durch Eigenstromproduktion, Perfekte
          Basis für Elektromobilität & Ladeinfrastruktur.
        </p>
      </div>
    </div>
  );
}

function Gwerbeundindustrie() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl  font-semibold  tracking-wide inline-block relative">
        Nachhaltig von Solarenergie profitieren
      </h2>
      <hr className="w-70  h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>

      {/* <h1 className="text-2xl font-semibold text-[#669933] mb-6">Nachhaltig von Solarenergie profitieren</h1> */}
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/314505-BAD.jpg"
          alt="Gwerbeundindustrie"
          width={600}
          height={350}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Direkt vor Ort erzeugte Solarenergie, die unmittelbar im Betrieb
          genutzt wird, bietet zahlreiche Vorteile: Ein Kraftwerk, das exakt auf
          die Anforderungen Ihres Unternehmens zugeschnitten ist, senkt nicht
          nur Ihre Energiekosten, sondern reduziert auch Netzgebühren und
          Abgaben. Mit einer Solaranlage sichert sich Ihr Unternehmen
          langfristig günstigere Energiekosten, gewinnt an Unabhängigkeit und
          ist bestens vor steigenden Energiepreisen geschützt.
        </p>
      </div>
    </div>
  );
}

function Landwirtschaft() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl  font-semibold  tracking-wide inline-block relative">
        Die Kraft der Sonne nutzen
      </h2>
      <hr className="w-70  h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>

      {/* <h1 className="text-2xl font-semibold text-[#669933] mb-6">Die Kraft der Sonne nutzen</h1> */}
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/download-1-23.jpg"
          alt="Landwirtschaft"
          width={600}
          height={350}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Setzen Sie auf selbst erzeugte Solarenergie, die direkt in Ihrem
          Betrieb verwendet wird, und profitieren Sie von den Vorteilen der
          Sonnenkraft. Ein individuell auf Ihre Bedürfnisse abgestimmtes
          Kraftwerk senkt nicht nur Ihre Energiekosten, sondern reduziert auch
          Netzgebühren und Abgaben, die nach der verbrauchten Strommenge
          berechnet werden. Mit einer Solaranlage genießt Ihr Betrieb
          langfristig niedrigere Energiekosten, mehr Unabhängigkeit und Schutz
          vor steigenden Energiepreisen.
        </p>
      </div>
    </div>
  );
}
