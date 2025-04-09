"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GreenFeatureSection from "../Reusable/contactInfo";
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
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg groupe"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Next.js Image component */}
      <div className="relative w-full h-full">
        <Image
          src={`http://192.168.68.197:8000${project?.bild_anhagen[0].bild_anhagen}`} // Replace with dynamic image if necessary
          alt={`Project background - ${project?.location}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`transition-all duration-300 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
        />

        {/* Dark overlay (Vein Effect) */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 opacity-40 `}></div>
      </div>

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300`}>
        <div className="text-white">
          <h3 className="text-[20px]">{project?.title}</h3>
          <p
            className={`text-xl font-light mt-2 transition-all duration-300 transform text-[16px] ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {project?.leistung}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ProjectDetailComponent = ({ project, related }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Left Column - Images (75% width) */}
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-6">Fotos</h2>
          {/* Main Project Image */}
          {project?.bild_anhagen && project?.bild_anhagen.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {project.bild_anhagen.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <Image
                    src={`http://192.168.68.197:8000${image.bild_anhagen}`}
                    alt={`${project.title} - ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Text (25% width) */}
        <div className="w-full md:w-1/4">
          <div className="sticky top-30">
            {/* Project Title */}
            <h2 className="text-2xl font-bold mb-6">{project?.title}</h2>
            {/* Listing Section */}
            {project?.leistung && (
              <div className="mb-8">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Leistung</span>
                <p className="text-lg font-medium mt-1">{project.leistung}</p>
              </div>
            )}
            {/* Year Section */}
            {project?.jahr && (
              <div className="mb-8">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Jahr</span>
                <p className="text-lg font-medium mt-1">{project.jahr}</p>
              </div>
            )}
            {/* Project Description */}
            {project?.typ && (
              <div className=" mb-8">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Typ</span>
                <p className="text-lg font-medium mt-1">{project.typ}</p>
              </div>
            )}
            {project?.ort && (
              <div className=" mb-8">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Ort</span>
                <p className="text-lg font-medium mt-1">{project.ort}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weitere Kundenprojekte Section */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-8">Weitere Kundenprojekte entdecken</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {related.map((relatedProject, index) => (
            <ProjectCard project={relatedProject} key={index} />
          ))}
        </div>
      </div>
      <GreenFeatureSection />
    </div>
  );
};

export default ProjectDetailComponent;
