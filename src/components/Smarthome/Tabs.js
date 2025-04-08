"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosBatteryCharging } from "react-icons/io";
import {  MdPowerSettingsNew } from "react-icons/md";
import { FaChargingStation, FaTachometerAlt } from "react-icons/fa";

export default function Home() {
    const [activeComponent, setActiveComponent] = useState("batteriesysteme");

    return (
        <div className="flex justify-center algin-items-center">
            <main className="flex flex-col md:flex-row max-w-7xl w-full mt-6">
                <div className="w-full md:w-64 border-r border-gray-200 bg-white">
                    <nav className="p-4">
                        <ul className="space-y-4">
                            <li>
                                <button
                                    onClick={() => setActiveComponent("batteriesysteme")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "batteriesysteme"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <IoIosBatteryCharging className="mr-2 text-green-700" size={24} />
                                    Batteriesysteme
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("ladestationen")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "ladestationen"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaChargingStation className="mr-2 text-green-700" size={24} />
                                    Ladestationen
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("notstrombox")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "notstrombox"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <MdPowerSettingsNew className="mr-2 text-green-700" size={24} />
                                    Notstrombox
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveComponent("smartmeter")}
                                    className={`flex items-center w-full p-2 text-left rounded text-[21px] ${activeComponent === "smartmeter"
                                        ? "bg-gray-100 text-green-700 font-medium cursor-pointer"
                                        : "hover:bg-gray-100 text-gray-800 cursor-pointer"
                                        }`}
                                >
                                    <FaTachometerAlt className="mr-2 text-green-700" size={24} />
                                    Smartmeter
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex-1 p-6">
                    {activeComponent === "batteriesysteme" && <BatterieSysteme />}
                    {activeComponent === "ladestationen" && <Ladestationen />}
                    {activeComponent === "notstrombox" && <Notstrombox />}
                    {activeComponent === "smartmeter" && <Smartmeter />}
                </div>
            </main>
        </div>
    );
}

function BatterieSysteme() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Sonnenstrom rund um die Uhr nutzen
            </h1>
            <div className="mb-6">
                <Image
                    src="/Images/Dienstleistungen/Smartphone/Stronspeicher.jpg"
                    alt="Batteriesysteme"
                    width={600}
                    height={400}
                    quality={100}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">
                    Nutzen Sie nicht nur tagsüber die Energie der Sonne!
                </p>
                <p className="text-gray-800 text-[18px]">
                    Durch intelligente Hausautomation speichern Sie überschüssigen
                    Solarstrom in Ihrem Batteriesystem und verwenden ihn genau dann, wenn
                    Sie ihn benötigen.
                </p>
            </div>
        </div>
    );
}

function Ladestationen() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Elektrofahrzeuge intelligent laden
            </h1>
            <div className="mb-6">
                <Image
                    src="/Images/Dienstleistungen/Smartphone/wallbox-scaled.jpg"
                    alt="Ladestationen"
                    width={600}
                    height={400}
                    quality={100}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">Warum eine eigene Ladestation für Elektroautos?</p>
                <p className="text-gray-800 text-[18px]">
                    Zeit sparen – Nie wieder auf öffentliche Ladesäulen angewiesen sein;
                    Günstigere Ladekosten – Laden Sie Ihr E-Auto mit eigenem Solarstrom;
                    Schnellere Ladezeiten – Höhere Ladeleistung und effiziente Nutzung;
                    Nutzen Sie Ihre Photovoltaikanlage als Energiequelle für Ihre Elektromobilität.
                </p>
            </div>
        </div>
    );
}

function Notstrombox() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Unabhängig bei Stromausfällen
            </h1>
            <div className="mb-6">
                <Image
                    src="/Images/Dienstleistungen/Smartphone/smart-guard-scaled.jpg"
                    alt="Ladestationen"
                    width={600}
                    height={400}
                    quality={100}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="space-y-3">
                <p className="text-gray-800 text-[18px]">Bleiben Sie auch bei Netzausfällen versorgt!</p>
                <p className="text-gray-800 text-[18px]">
                    Mit unseren Notstromlösungen können wichtige Geräte in Ihrem Haushalt
                    auch bei einem Stromausfall weiter betrieben werden.
                </p>
            </div>
        </div>
    );
}

function Smartmeter() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-2xl font-medium text-green-800 mb-6">
                Smarte Steuerung mit Smartmeter – Ihr Energieverbrauch in Echtzeit
            </h1>
            <div className="mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <Image
                            src="/Images/Dienstleistungen/Smartphone/Fronius-Primo-5.0-1-208-240.webp"
                            alt="Ladestationen"
                            width={300}
                            height={300}
                            quality={100}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/Images/Dienstleistungen/Smartphone/huawei.webp"
                            alt="Ladestationen"
                            width={300}
                            height={400}
                            quality={100}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-3 pt-4 mt-6">
                <p className="text-gray-800 text-[18px]">
                    Ein Smartmeter ermöglicht eine präzise Überwachung Ihrer Energieflüsse und hilft Ihnen, 
                    Ihren Eigenverbrauch zu optimieren: Energieproduktion & Verbrauch im Blick – 
                    Transparente Kontrolle Ihrer PV-Anlage, Fernsteuerung per App – Bequeme Steuerung 
                    Ihres Smarthome-Systems, Mehr Effizienz & Netzstabilität – Optimierte Nutzung von Solarstrom. 
                    Jetzt Smarthome & Smartmeter kombinieren!
                </p>
            </div>
        </div>
    );
}
