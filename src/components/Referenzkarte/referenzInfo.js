"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSolarPanel } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/referenzen/projekte/${project.location
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "-")
        .replace(/[ä]/g, "ae")
        .replace(/[ö]/g, "oe")
        .replace(/[ü]/g, "ue")
        .replace(/[ß]/g, "ss")
        .replace(/[^a-z0-9-]/g, "")}`}
      className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={`http://192.168.68.197:8000${project.image}`}
          alt={`Project - ${project.location}`}
          fill
          className={`transition-all duration-500 object-cover object-center ${
            isHovered ? "scale-110 blur-[1px]" : "scale-100 blur-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div
          className={`transition-all duration-500 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white text-xl font-semibold">{project.location}</h3>
          <div className="flex items-center text-white gap-2 mt-2 text-[16px]">
            <FaSolarPanel className="text-[#ffde59]" />
            <span>{project.capacity}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.projektede.api.projektede_data"
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        const formatted = data.message
          .slice(0, 3) // adjust number of projects shown
          .map((marke) => ({
            location: marke.title,
            capacity: marke.leistung,
            image: marke.bild_anhagen[0]?.bild_anhagen,
            status: marke.status,
          }));

        setProjects(formatted);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="mt-15 mb-15 lg:mt-20 lg:mb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
              UNSERE PROJEKTE
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
            </h2>
            <h2 className="text-3xl font-semibold text-gray-900 mt-10">
              Unsere Referenzkarte – Erfolgreiche Projekte auf einen Blick
            </h2>
          </div>
          <div className="text-gray-700 space-y-4 text-center text-[17px]">
            <p>
              Nachhaltige Energielösungen sind der Schlüssel zu einer umweltfreundlichen Zukunft. Mit der steigenden
              Nachfrage nach Photovoltaikanlagen für Industrie, Gewerbe und Privathaushalte haben wir zahlreiche
              Projekte erfolgreich realisiert.
              <br />
              Unsere Photovoltaik-Referenzkarte bietet Ihnen eine übersichtliche Darstellung unserer bisherigen Einsätze
              – eine Solaranlagen Karte, die zeigt, wo unsere Systeme zur Energiewende beitragen.
              <br />
              <br />
              Jedes Projekt ist individuell geplant und auf die spezifischen Anforderungen unserer Kunden abgestimmt.
              Von kleinen privaten Anlagen bis zu großflächigen Solarparks – unsere PV-Installationen in Deutschland
              stehen für Effizienz, Qualität und Nachhaltigkeit.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center flex flex-row items-center justify-center mt-16">
          <Link
            href="/referenzen/projekte"
            className="flex items-center justify-center gap-2 bg-[#669933] hover:bg-[#669933]/90 text-white uppercase px-6 py-3 rounded-lg transition-colors duration-300 text-[14px]"
          >
            Weitere Projekte <FaAngleRight/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
