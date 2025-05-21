"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt, FaTools, FaBolt } from "react-icons/fa";
import GreenFeatureSection from "../Reusable/contactInfo";

const end={
  greentitle:"Smarthome-Lösung",
  title:"Ihre persönliche Solarberatung",
  description:"Interessieren Sie sich für eine eigene Solaranlage? Wir beraten Sie individuell – kontaktieren Sie uns jetzt!"
}

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/referenzen/projekte/${project.title
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
          src={`http://192.168.68.197:8000${project?.bild_anhagen[0].bild_anhagen}`}
          alt={`Project background - ${project?.location}`}
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
          <h3 className="text-white text-xl font-semibold">{project?.title}</h3>
          <div className="flex items-center text-white gap-2 mt-2 text-[16px]">
            <FaBolt className="text-[#ffde59]" />
            <span>{project?.leistung}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};


const ProjectDetailComponent = ({ project, related }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="w-full md:w-3/4">
          <h2 className="text-3xl font-bold text-[#669933] mb-6">Fotos</h2>
          <div className="grid grid-cols-1 gap-6">
            {project?.bild_anhagen?.map((image, index) => (
              <div
                key={index}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`http://192.168.68.197:8000${image.bild_anhagen}`}
                  alt={`${project.title} - ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4 space-y-6">
          <div className="sticky top-28 p-6 rounded-xl shadow-md border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {project?.title}
            </h2>
            {project?.leistung && (
              <div className="flex items-center gap-3 text-gray-700 mb-3">
                <FaBolt className="text-[#669933]" />
                <span className="font-medium">{project.leistung}</span>
              </div>
            )}
            {project?.jahr && (
              <div className="flex items-center gap-3 text-gray-700 mb-3">
                <FaCalendarAlt className="text-[#669933]" />
                <span className="font-medium">{project.jahr}</span>
              </div>
            )}
            {project?.typ && (
              <div className="flex items-center gap-3 text-gray-700 mb-3">
                <FaTools className="text-[#669933]" />
                <span className="font-medium">{project.typ}</span>
              </div>
            )}
            {project?.ort && (
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-[#669933]" />
                <span className="font-medium">{project.ort}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Weitere Kundenprojekte entdecken
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((relatedProject, index) => (
            <ProjectCard project={relatedProject} key={index} />
          ))}
        </div>
      </div>
      <GreenFeatureSection data={end}/>

    </div>
  );
};


export default ProjectDetailComponent;
