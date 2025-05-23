"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSolarPanel } from "react-icons/fa";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import { API_IMG_URL } from "@/lib/apiImgUrl";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/referenzen/projekte/${project.location
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "-")
        .replace(/[\u00e4]/g, "ae")
        .replace(/[\u00f6]/g, "oe")
        .replace(/[\u00fc]/g, "ue")
        .replace(/[\u00df]/g, "ss")
        .replace(/[^a-z0-9-]/g, "")}`}
      className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full ">
        <Image
          src={`${API_IMG_URL}${project?.image}`}
          alt={`Project - ${project?.location}`}
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
          <h3 className="text-white text-xl font-semibold">{project?.location}</h3>
          <div className="flex items-center text-white gap-2 mt-2 text-[16px]">
            <FaSolarPanel className="text-[#ffde59]" />
            <span>{project?.capacity}</span>
          </div>
        </div>
      </div>

      {/* <div
        className={`absolute top-3 right-3 px-3 py-1 text-sm rounded-full bg-[#669933] text-white font-medium shadow-md transition-all duration-500 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        Mehr erfahren →
      </div> */}
    </Link>
  );
};

const ProjectsSection = () => {
  const [marken, setMarken] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const totalPages = Math.ceil(marken.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = marken.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.projektede.api.projektede_data`
        );
        if (!response.ok) throw new Error("Gabim gjate marrjes se te dhenave");
        const data = await response.json();
        const formattedEvents = data.message.slice().map((marke) => ({
          location: marke?.title,
          image: marke?.bild_anhagen[0]?.bild_anhagen,
          status: marke?.status,
          capacity: marke?.leistung,
        }));
        setMarken(formattedEvents);
      } catch (error) {
        console.error("Gabim gjate marrjes se ngjarjeve:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4" id="projects-section">
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-6">
            <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
              PROJEKTE
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-6">
              Nachhaltige Energielösungen für eine grüne Zukunft
            </h2>
          </div>
          <div className="prose prose-lg text-gray-600 space-y-4 text-center text-[18px]">
            <p>
              In einer Zeit, in der nachhaltige Energiequellen immer wichtiger werden, ist es essenziell, innovative
              Photovoltaik Projekte zu entwickeln, die wirtschaftlich und umweltfreundlich zugleich sind.
            </p>
            <p>
              Die Nutzung von Solarenergie trägt nicht nur zur Reduzierung von CO<sub>2</sub>-Emissionen bei, sondern
              ermöglicht langfristige Einsparungen und größere Unabhängigkeit von steigenden Energiepreisen.
            </p>
            <p>
              Eine Kombination aus hochwertiger Planung, professioneller Umsetzung und fortlaufender Optimierung sorgt
              dafür, dass Solarenergie effizient und nachhaltig genutzt wird.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mb-9 md:mb-17">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 ">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-md cursor-pointer ${
                    currentPage === number ? "bg-[#669933] text-white" : "border border-gray-300"
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectsSection;
