"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaHome, FaBuilding, FaIndustry, FaTractor } from "react-icons/fa";

export default function Tabs() {
    const [activeComponent, setActiveComponent] = useState("privathaushalte");

    return (
        <div className="flex justify-center algin-items-center">
            <main className="flex flex-col md:flex-row max-w-7xl w-full mt-6">
                <div className="w-full md:w-64 border-r border-gray-200 bg-white">
                    <nav className="p-4">
                        <ul className="space-y-4">
                            <li>
                                <button
                                    onClick={() => setActiveComponent("privathaushalte")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "privathaushalte"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaHome className="mr-2 text-green-700" size={24} />
                                    Privathaushalte
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("mehrfamilienhaeuser")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "mehrfamilienhaeuser"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaBuilding className="mr-2 text-green-700" size={24} />
                                    Mehrfamilienhäuser
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("gwerbeundindustrie")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "gwerbeundindustrie"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaIndustry className="mr-2 text-green-700" size={24} />
                                    Gewerbe und Industrie
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("landwirtschaft")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "landwirtschaft"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaTractor className="mr-2 text-green-700" size={24} />
                                    Landwirtschaft
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex-1 p-6">
                    {activeComponent === "privathaushalte" && <Privathaushalte />}
                    {activeComponent === "mehrfamilienhaeuser" && <Mehrfamilienhaeuser />}
                    {activeComponent === "gwerbeundindustrie" && <Gwerbeundindustrie />}
                    {activeComponent === "landwirtschaft" && <Landwirtschaft />}
                </div>
            </main>
        </div>
    );
}

function Privathaushalte() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Warum eine Photovoltaikanlage für Ihr Zuhause?
            </h1>
            <div className="mb-6 flex justify-start">
                <Image
                    src="/Images/Dienstleistungen/Photovoltaik/Bild1.png"
                    alt="Privathaushalte"
                    width={600}
                    height={350}
                    quality={100}
                    className="rounded-lg shadow-md object-cover"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">
                    Ein verantwortungsvoller Umgang mit natürlichen Ressourcen und eine stabile
                    Energieversorgung sind essenziell für unsere Lebensqualität – heute und in Zukunft.
                    Eine moderne Photovoltaikanlage, die direkt Sonnenstrom für Ihr Zuhause erzeugt,
                    bringt zahlreiche Vorteile: Geringere Energiekosten – Senken Sie Ihre Stromkosten langfristig,
                    Unabhängigkeit vom Strommarkt – Nutzen Sie Ihren eigenen Solarstrom, Umweltfreundlich & nachhaltig –
                    Reduzieren Sie CO₂-Emissionen, Staatliche Förderung – Zahlreiche Programme unterstützen Ihr Solar-Projekt.
                </p>
            </div>
        </div>
    );
}

function Mehrfamilienhaeuser() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Setzen Sie auf unsere Lösungen – Maßgeschneiderte Photovoltaik für Ihr Gebäude
            </h1>
            <div className="mb-6 flex justify-start">
                <Image
                    src="/Images/Dienstleistungen/Photovoltaik/download-2.jpg"
                    alt="Mehrfamilienhäuser"
                    width={600}
                    height={350}
                    quality={100}
                    className="rounded-lg shadow-md object-cover"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">
                    Intelligente PV-Anlagen mit maximalem Eigenverbrauch
                </p>
                <p className="text-gray-800 text-[18px]">
                    Eine moderne Immobilie zeichnet sich durch Effizienz, Nachhaltigkeit & niedrige Betriebskosten aus.
                    Photovoltaikanlagen mit hoher Eigenverbrauchsquote sorgen für: Reduzierte Energiekosten
                    & Netzgebühren, Unabhängigkeit durch Eigenstromproduktion, Perfekte Basis für
                    Elektromobilität & Ladeinfrastruktur.
                </p>
            </div>
        </div>
    );
}

function Gwerbeundindustrie() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Nachhaltig von Solarenergie profitieren
            </h1>
            <div className="mb-6 flex justify-start">
                <Image
                    src="/Images/Dienstleistungen/Photovoltaik/314505-BAD.jpg"
                    alt="Gwerbeundindustrie"
                    width={600}
                    height={350}
                    quality={100}
                    className="rounded-lg shadow-md object-cover"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">
                    Direkt vor Ort erzeugte Solarenergie, die unmittelbar im Betrieb genutzt wird, bietet zahlreiche Vorteile:
                    Ein Kraftwerk, das exakt auf die Anforderungen Ihres Unternehmens zugeschnitten ist, senkt nicht nur Ihre Energiekosten,
                    sondern reduziert auch Netzgebühren und Abgaben, die abhängig von der verbrauchten Strommenge berechnet werden. Mit einer
                    Solaranlage sichert sich Ihr Unternehmen langfristig günstigere Energiekosten, gewinnt an Unabhängigkeit und ist bestens vor steigenden Energiepreisen geschützt.
                </p>
            </div>
        </div>
    );
}

function Landwirtschaft() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Die Kraft der Sonne nutzen
            </h1>
            <div className="mb-6 flex justify-start">
                <Image
                    src="/Images/Dienstleistungen/Photovoltaik/download-1-23.jpg"
                    alt="Landwirtschaft"
                    width={600}
                    height={350}
                    quality={100}
                    className="rounded-lg shadow-md object-cover"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">
                    Setzen Sie auf selbst erzeugte Solarenergie, die direkt in Ihrem Betrieb verwendet wird,
                    und profitieren Sie von den Vorteilen der Sonnenkraft. Ein individuell auf Ihre Bedürfnisse
                    abgestimmtes Kraftwerk senkt nicht nur Ihre Energiekosten, sondern reduziert auch Netzgebühren und
                    Abgaben, die nach der verbrauchten Strommenge berechnet werden. Mit einer Solaranlage genießt Ihr Betrieb
                    langfristig niedrigere Energiekosten, mehr Unabhängigkeit und Schutz vor steigenden Energiepreisen. Darüber
                    hinaus unterstützen zahlreiche Förderprogramme von Bund oder Kanton Ihr Vorhaben.
                </p>
            </div>
        </div>
    );
}