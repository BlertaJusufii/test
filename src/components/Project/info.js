"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg groupe"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={`http://192.168.68.197:8000${project?.image}`}
          alt={`Project background - ${project?.location}`}
          fill
          className={`transition-all duration-300 object-cover object-center ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 opacity-40 `}></div>
      </div>
      <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300`}>
        <div className="text-white">
          <h3 className="text-[20px]">{project?.location}</h3>
          <p
            className={`text-xl font-light mt-2 transition-all duration-300 transform text-[16px] ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {project?.capacity}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  const [marken, setMarken] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(marken.length / projectsPerPage);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = marken.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the projects section when changing pages
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Fetch data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.projektede.api.projektede_data"
        );

        if (!response.ok) {
          throw new Error("Gabim gjatë marrjes së të dhënave");
        }

        const data = await response.json();

        const formattedEvents = data.message.slice().map((marke) => ({
          location: marke?.title,
          image: marke?.bild_anhagen[0]?.bild_anhagen,
          status: marke?.status,
          capacity: marke?.leistung,
        }));

        setMarken(formattedEvents);
      } catch (error) {
        console.error("Gabim gjatë marrjes së ngjarjeve:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4" id="projects-section">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
              PROJEKTE
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
            </h2>
            <h2 className="text-3xl font-semibold text-gray-900 mt-6">
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
              ermöglicht langfristige Einsparungen und größere Unabhängigkeit von steigenden Energiepreisen. Durch den
              Einsatz moderner Technologien entstehen individuelle Lösungen, die exakt auf die Anforderungen von
              Gewerbe, Industrie und Privathaushalten abgestimmt sind.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
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
