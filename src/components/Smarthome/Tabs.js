"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosBatteryCharging } from "react-icons/io";
import { MdPowerSettingsNew } from "react-icons/md";
import { FaChargingStation, FaTachometerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs() {
  const [activeComponent, setActiveComponent] = useState("batteriesysteme");

  return (
    <div className="flex justify-center items-center">
      <main className="flex flex-col lg:flex-row max-w-7xl w-full py-10 md:py-16 pl-0 pr-0 md:pr-10 md:pl-10">
        {/* Sidebar */}
        <div className="w-full lg:w-84 bg-white">
          <nav className="p-4 border border-gray-200">
            <ul className="space-y-4">
              {/* Batteriesysteme */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "batteriesysteme" ? null : "batteriesysteme"
                    )
                  }
                  className={`flex items-center w-full p-2 text-left cursor-pointer rounded text-[21px] ${
                    activeComponent === "batteriesysteme"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <IoIosBatteryCharging className="mr-2 text-[#669933]" size={24} />
                  Batteriesysteme
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "batteriesysteme" && (
                    <motion.div
                      key="mobile-batteriesysteme"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border-b border-gray-200 lg:hidden"
                    >
                      <BatterieSysteme />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Ladestationen */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "ladestationen" ? null : "ladestationen"
                    )
                  }
                  className={`flex items-center cursor-pointer w-full p-2 text-left rounded text-[21px] ${
                    activeComponent === "ladestationen"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaChargingStation className="mr-2 text-[#669933]" size={24} />
                  Ladestationen
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "ladestationen" && (
                    <motion.div
                      key="mobile-ladestationen"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border-b border-gray-200 lg:hidden"
                    >
                      <Ladestationen />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Notstrombox */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "notstrombox" ? null : "notstrombox"
                    )
                  }
                  className={`flex items-center w-full cursor-pointer p-2 text-left rounded text-[21px] ${
                    activeComponent === "notstrombox"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <MdPowerSettingsNew className="mr-2 text-[#669933]" size={24} />
                  Notstrombox
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "notstrombox" && (
                    <motion.div
                      key="mobile-notstrombox"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border-b border-gray-200 lg:hidden"
                    >
                      <Notstrombox />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Smartmeter */}
              <li>
                <button
                  onClick={() =>
                    setActiveComponent(
                      activeComponent === "smartmeter" ? null : "smartmeter"
                    )
                  }
                  className={`flex items-center w-full cursor-pointer p-2 text-left rounded text-[21px] ${
                    activeComponent === "smartmeter"
                      ? "bg-gray-100 text-[#669933] font-medium"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <FaTachometerAlt className="mr-2 text-[#669933]" size={24} />
                  Smartmeter
                </button>
                <AnimatePresence mode="wait">
                  {activeComponent === "smartmeter" && (
                    <motion.div
                      key="mobile-smartmeter"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 mt-2 border-b border-gray-200 lg:hidden"
                    >
                      <Smartmeter />
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
            {activeComponent === "batteriesysteme" && (
              <motion.div
                key="desktop-batteriesysteme"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <BatterieSysteme />
              </motion.div>
            )}
            {activeComponent === "ladestationen" && (
              <motion.div
                key="desktop-ladestationen"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Ladestationen />
              </motion.div>
            )}
            {activeComponent === "notstrombox" && (
              <motion.div
                key="desktop-notstrombox"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Notstrombox />
              </motion.div>
            )}
            {activeComponent === "smartmeter" && (
              <motion.div
                key="desktop-smartmeter"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Smartmeter />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// Components
function BatterieSysteme() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-wide inline-block relative">
        Sonnenstrom rund um die Uhr nutzen
      </h2>
      <hr className="w-70 h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>
      
      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Smartphone/Stronspeicher.jpg"
          alt="Batteriesysteme"
          width={600}
          height={400}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">Nutzen Sie nicht nur tagsüber die Energie der Sonne!</p>
        <p className="text-gray-800 text-[18px]">
          Durch intelligente Hausautomation speichern Sie überschüssigen Solarstrom in Ihrem Batteriesystem und verwenden ihn genau dann, wenn Sie ihn benötigen.
        </p>
      </div>
    </div>
  );
}

function Ladestationen() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-wide inline-block relative">
        Elektrofahrzeuge intelligent laden
      </h2>
      <hr className="w-70 h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>

      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Smartphone/wallbox-scaled.jpg"
          alt="Ladestationen"
          width={600}
          height={400}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">Warum eine eigene Ladestation für Elektroautos?</p>
        <p className="text-gray-800 text-[18px]">
          Zeit sparen – Nie wieder auf öffentliche Ladesäulen angewiesen sein; Günstigere Ladekosten – Laden Sie Ihr E-Auto mit eigenem Solarstrom; Schnellere Ladezeiten – Höhere Ladeleistung und effiziente Nutzung; Nutzen Sie Ihre Photovoltaikanlage als Energiequelle für Ihre Elektromobilität.
        </p>
      </div>
    </div>
  );
}

function Notstrombox() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-wide inline-block relative">
        Unabhängig bei Stromausfällen
      </h2>
      <hr className="w-70 h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>

      <div className="mb-6 flex justify-start">
        <Image
          src="/Images/Dienstleistungen/Smartphone/smart-guard-scaled.jpg"
          alt="Notstrombox"
          width={600}
          height={400}
          quality={100}
          className="object-cover object-center h-[400] w-[100%]"
        />
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 text-[18px]">Bleiben Sie auch bei Netzausfällen versorgt!</p>
        <p className="text-gray-800 text-[18px]">
          Mit unseren Notstromlösungen können wichtige Geräte in Ihrem Haushalt auch bei einem Stromausfall weiter betrieben werden.
        </p>
      </div>
    </div>
  );
}

function Smartmeter() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-wide inline-block relative">
        Smarte Steuerung mit Smartmeter
      </h2>
      <hr className="w-70 h-1 bg-[#669933] text-[#669933] mt-[10px] mb-5"></hr>
      
      <div className="mb-6 flex justify-start">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <Image
              src="/Images/Dienstleistungen/Smartphone/Fronius-Primo-5.0-1-208-240.webp"
              alt="Smartmeter"
              width={300}
              height={300}
              quality={100}
              className="object-cover object-center h-[400] w-[100%]"
            />
          </div>
          <div className="">
            <Image
              src="/Images/Dienstleistungen/Smartphone/huawei.webp"
              alt="Smartmeter"
              width={300}
              height={400}
              quality={100}
              className="object-cover object-center h-[400] w-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="space-y-3 pt-4 mt-6">
        <p className="text-gray-800 text-[18px]">
          Ein Smartmeter ermöglicht eine präzise Überwachung Ihrer Energieflüsse und hilft Ihnen, Ihren Eigenverbrauch zu optimieren: Energieproduktion & Verbrauch im Blick – Transparente Kontrolle Ihrer PV-Anlage, Fernsteuerung per App – Bequeme Steuerung Ihres Smarthome-Systems, Mehr Effizienz & Netzstabilität – Optimierte Nutzung von Solarstrom. Jetzt Smarthome & Smartmeter kombinieren!
        </p>
      </div>
    </div>
  );
}