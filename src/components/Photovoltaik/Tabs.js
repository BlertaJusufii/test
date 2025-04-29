"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHome, FaBuilding, FaIndustry, FaTractor } from "react-icons/fa";

export default function Tabs() {
  const [activeComponent, setActiveComponent] = useState("privathaushalte");

  return (
    <div className="flex justify-center items-center">
      <main className="flex flex-col lg:flex-row max-w-7xl w-full mt-15 mb-15 lg:mt-20 lg:mb-20 pl-0 pr-0 md:pr-10 md:pl-10">
        {/* Sidebar */}
        <div className="w-full lg:w-84 bg-white">
          <nav className="p-4 border border-gray-200">
            <ul className="space-y-4">
              {/* Privathaushalte */}
              <li>
                <button
                  onClick={() => setActiveComponent(activeComponent === "privathaushalte" ? null : "privathaushalte")}
                  className={`flex items-center w-full p-2 text-left rounded text-[21px] ${
                    activeComponent === "privathaushalte"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaHome className="mr-2 text-[#669933]" size={24} />
                  Privathaushalte
                </button>
                {activeComponent === "privathaushalte" && (
                  <div className="p-4 mt-2 border-b border-gray-200  lg:hidden">
                    <Privathaushalte />
                  </div>
                )}
              </li>

              {/* Mehrfamilienhäuser */}
              <li>
                <button
                  onClick={() => setActiveComponent(activeComponent === "mehrfamilienhaeuser" ? null : "mehrfamilienhaeuser")}
                  className={`flex items-center w-full p-2 text-left rounded text-[21px] ${
                    activeComponent === "mehrfamilienhaeuser"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaBuilding className="mr-2 text-[#669933]" size={24} />
                  Mehrfamilienhäuser
                </button>
                {activeComponent === "mehrfamilienhaeuser" && (
                  <div className="p-4 mt-2 border border-gray-200 lg:hidden">
                    <Mehrfamilienhaeuser />
                  </div>
                )}
              </li>

              {/* Gewerbe und Industrie */}
              <li>
                <button
                  onClick={() => setActiveComponent(activeComponent === "gwerbeundindustrie" ? null : "gwerbeundindustrie")}
                  className={`flex items-center w-full p-2 text-left rounded text-[21px] ${
                    activeComponent === "gwerbeundindustrie"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaIndustry className="mr-2 text-[#669933]" size={24} />
                  Gewerbe und Industrie
                </button>
                {activeComponent === "gwerbeundindustrie" && (
                  <div className="p-4 mt-2 border border-gray-200 lg:hidden">
                    <Gwerbeundindustrie />
                  </div>
                )}
              </li>

              {/* Landwirtschaft */}
              <li>
                <button
                  onClick={() => setActiveComponent(activeComponent === "landwirtschaft" ? null : "landwirtschaft")}
                  className={`flex items-center w-full p-2 text-left rounded text-[21px] ${
                    activeComponent === "landwirtschaft"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaTractor className="mr-2 text-[#669933]" size={24} />
                  Landwirtschaft
                </button>
                {activeComponent === "landwirtschaft" && (
                  <div className="p-4 mt-2 border border-gray-200 lg:hidden">
                    <Landwirtschaft />
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Content (desktop only) */}
        <div className="hidden lg:flex flex-1 p-8 border border-gray-200">
          {activeComponent === "privathaushalte" && <Privathaushalte />}
          {activeComponent === "mehrfamilienhaeuser" && <Mehrfamilienhaeuser />}
          {activeComponent === "gwerbeundindustrie" && <Gwerbeundindustrie />}
          {activeComponent === "landwirtschaft" && <Landwirtschaft />}
        </div>
      </main>
    </div>
  );
}

// Components
function Privathaushalte() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-[#669933] mb-6">Warum eine Photovoltaikanlage für Ihr Zuhause?</h1>
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/Bild1.png"
          alt="Privathaushalte"
          width={600}
          height={350}
          quality={100}
          className="object-cover h-auto w-auto"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Ein verantwortungsvoller Umgang mit natürlichen Ressourcen und eine stabile Energieversorgung sind essenziell
          für unsere Lebensqualität – heute und in Zukunft. Eine moderne Photovoltaikanlage, die direkt Sonnenstrom für
          Ihr Zuhause erzeugt, bringt zahlreiche Vorteile: Geringere Energiekosten – Senken Sie Ihre Stromkosten
          langfristig, Unabhängigkeit vom Strommarkt – Nutzen Sie Ihren eigenen Solarstrom, Umweltfreundlich &
          nachhaltig – Reduzieren Sie CO₂-Emissionen, Staatliche Förderung – Zahlreiche Programme unterstützen Ihr
          Solar-Projekt.
        </p>
      </div>
    </div>
  );
}

function Mehrfamilienhaeuser() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-[#669933] mb-6">
        Setzen Sie auf unsere Lösungen – Maßgeschneiderte Photovoltaik für Ihr Gebäude
      </h1>
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/download-2.jpg"
          alt="Mehrfamilienhäuser"
          width={600}
          height={350}
          quality={100}
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">Intelligente PV-Anlagen mit maximalem Eigenverbrauch</p>
        <p className="text-gray-800 text-[18px]">
          Eine moderne Immobilie zeichnet sich durch Effizienz, Nachhaltigkeit & niedrige Betriebskosten aus.
          Photovoltaikanlagen mit hoher Eigenverbrauchsquote sorgen für: Reduzierte Energiekosten & Netzgebühren,
          Unabhängigkeit durch Eigenstromproduktion, Perfekte Basis für Elektromobilität & Ladeinfrastruktur.
        </p>
      </div>
    </div>
  );
}

function Gwerbeundindustrie() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-[#669933] mb-6">Nachhaltig von Solarenergie profitieren</h1>
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/314505-BAD.jpg"
          alt="Gwerbeundindustrie"
          width={600}
          height={350}
          quality={100}
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Direkt vor Ort erzeugte Solarenergie, die unmittelbar im Betrieb genutzt wird, bietet zahlreiche Vorteile: Ein
          Kraftwerk, das exakt auf die Anforderungen Ihres Unternehmens zugeschnitten ist, senkt nicht nur Ihre
          Energiekosten, sondern reduziert auch Netzgebühren und Abgaben. Mit einer Solaranlage sichert sich Ihr
          Unternehmen langfristig günstigere Energiekosten, gewinnt an Unabhängigkeit und ist bestens vor steigenden
          Energiepreisen geschützt.
        </p>
      </div>
    </div>
  );
}

function Landwirtschaft() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-[#669933] mb-6">Die Kraft der Sonne nutzen</h1>
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Photovoltaik/download-1-23.jpg"
          alt="Landwirtschaft"
          width={600}
          height={350}
          quality={100}
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">
          Setzen Sie auf selbst erzeugte Solarenergie, die direkt in Ihrem Betrieb verwendet wird, und profitieren Sie
          von den Vorteilen der Sonnenkraft. Ein individuell auf Ihre Bedürfnisse abgestimmtes Kraftwerk senkt nicht nur
          Ihre Energiekosten, sondern reduziert auch Netzgebühren und Abgaben, die nach der verbrauchten Strommenge
          berechnet werden. Mit einer Solaranlage genießt Ihr Betrieb langfristig niedrigere Energiekosten, mehr
          Unabhängigkeit und Schutz vor steigenden Energiepreisen.
        </p>
      </div>
    </div>
  );
}
