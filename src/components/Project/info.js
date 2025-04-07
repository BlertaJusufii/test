"use client";

import { useState } from "react";
import Image from "next/image";
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg groupe"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src="/Images/Referenzen/projekteBanner.jpg"
          alt={`Project background - ${project.location}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`transition-all duration-300 ${isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
            }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 opacity-40 `}></div>
      </div>
      <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300`}>
        <div className="text-white">
          <h3 className="text-[20px]">{project.location}</h3>
          <p
            className={`text-xl font-light mt-2 transition-all duration-300 transform text-[16px] ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            {project.capacity}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      location: "VORARLBERG",
      capacity: "69,44 KWP",
      description:
        "Eine Kombination aus hochwertiger Planung, professioneller Umsetzung und fortlaufender Optimierung sorgt dafür, dass Solarenergie effizient und nachhaltig genutzt wird.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      location: "BAD WÖRISHOFEN",
      capacity: "54,20 KWP",
      description: "Modernste Solartechnik für gewerbliche Nutzung mit optimaler Flächenausnutzung.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      location: "FREILASSING",
      capacity: "32,15 KWP",
      description: "Individuelle Lösungen für Privathaushalte mit ästhetischer Integration.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto px-4">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="block text-[18px] font-semibold text-[#669933] mb-2 uppercase tracking-wider text-center">
            PROJEKTE
          </span>

          <h1 className="text-[28px] md:text-[35px] font-bold text-gray-900 mb-6 leading-tight text-center">
            Nachhaltige Energielösungen für eine grüne Zukunft
          </h1>

          <div className="prose prose-lg text-gray-600 space-y-4 text-center text-[18px]">
            <p>
              In einer Zeit, in der nachhaltige Energiequellen immer wichtiger werden, ist es essenziell, innovative
              Photovoltaik Projekte zu entwickeln, die wirtschaftlich und umweltfreundlich zugleich sind.
            </p>

            <p>
              Die Nutzung von Solarenergie trägt nicht nur zur Reduzierung von CO<sub>2</sub>-Emissionen bei, sondern
              ermöglicht langfristige Einsparungen und größere Unabhängigkeit von steigenden Energiepreisen. Durch den
              Einsatz moderner Technologien entstehen individuelle Lösungen, die exakt auf die Anforderungen von
              Gewerbe, Industrie und Privathaushalten abgestimmt sind.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
