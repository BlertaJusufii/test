"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 z-50 transform -translate-y-1/2 text-5xl  text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md"
  >
    <FaAngleLeft />

  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 z-50 transform -translate-y-1/2  text-5xl text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md"
  >
    <FaAngleRight />

  </div>
);


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={`http://192.168.68.197:8000${project.image}`}
          alt={`Project background - ${project.location}`}
          fill
          className={`transition-all duration-300 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
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
          className="text-white"
        >
          <h3 className="text-[20px] font-bold ">{project.location}</h3>
          <p
            className={`text-[16px] font-light mt-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {project.capacity}
          </p>
        </Link>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [marken, setMarken] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.projektede.api.projektede_data"
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();

        const formattedEvents = data.message
          .slice(0, 5)
          .reverse()
          .map((marke) => ({
            id: marke.name, // or any unique identifier
            location: marke.title,
            capacity: marke.leistung,
            image: marke.bild_anhagen[0]?.bild_anhagen, // fallback image
            status: marke.status,
          }));

        setMarken(formattedEvents);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchEvents();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

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
              <br />
              Besonderen Wert legen wir auf professionelle Planung, moderne Technik und intelligente Steuerungssysteme.
              In Kombination mit leistungsstarken Speichern erhöhen wir die Eigenverbrauchsquote und reduzieren die
              Abhängigkeit vom öffentlichen Stromnetz.
              <br />
              <br />
              Unsere Referenzen zeigen: Photovoltaik ist nicht nur ökologisch sinnvoll, sondern auch wirtschaftlich
              attraktiv. Mit staatlicher Förderung, Einspeisevergütung und steuerlichen Vorteilen lohnt sich die
              Investition mehrfach.
              <br />
              Oekovolt begleitet Sie von der Beratung über die Installation bis zur langfristigen Wartung – mit
              Lösungen, die echten Mehrwert bieten.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="slick-container">
          {marken.length > 0 ? (
            <Slider {...settings}>
              {marken.map((project) => (
                <div key={project.id} className="px-0 md:px-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-10">
              <p>Loading projects...</p>
            </div>
          )}
        </div>

        {/* WEITERE PROJEKTE Button */}
      
        <div className="text-center flex flex-row items-center justify-center mt-15">
          <Link
            href={"/referenzen/projekte"}
            className="flex items-center justify-center gap-2 bg-[#669933] hover:bg-[#669933]/90 text-white uppercase px-6 py-3 rounded-lg transition-colors duration-300 text-[14px]"
          >
            Weitere Projekte    <FaAngleRight />

          </Link>

        </div>
      </section>

      <style jsx global>{`
        .slick-container {
          padding: 0 20px;
        }

        .slick-list {
          margin: 0 -10px;
        }
        .slick-dots {
          bottom: -30px !important;
        }
        .slick-dots li button:before {
          color: #669933;
          opacity: 0.5;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #669933;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
