"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={`Project background - ${project.location}`}
          fill
          className={`transition-all duration-300 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-white">
          <h3 className="text-[20px] font-bold ">{project.location}</h3>
          <p
            className={`text-[16px] font-light mt-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
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
      description: "Hochwertige Planung und Umsetzung für nachhaltige Solarenergie.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      location: "BAD WÖRISHOFEN",
      capacity: "54,20 KWP",
      description: "Moderne Solartechnik für gewerbliche Nutzung.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      location: "FREILASSING",
      capacity: "32,15 KWP",
      description: "Individuelle Lösungen für Privathaushalte.",
      image: "/images/project3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="block text-[18px] font-semibold text-[#669933] mb-2 uppercase tracking-wider text-center">
            UNSERE PROJEKTE
          </span>
          <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900 mb-6 text-center">
            Unsere Referenzkarte – Erfolgreiche Projekte auf einen Blick
          </h2>
          <div className="text-gray-600 space-y-4 text-center text-[16px]">
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
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-2">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        </div>

        {/* WEITERE PROJEKTE Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#669933]/90 hover:bg-[#669933] text-white font-semibold py-3 px-6 rounded-[2px] flex items-center transition-colors duration-300 gap-2 text-[16px]">
            WEITERE PROJEKTE
            <FaAngleRight />
          </button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-[28px] md:text-[35px] font-bold text-gray-900 mb-6 text-center">
            Warum eine Referenzkarte?
          </h2>
          <div className="text-gray-600 space-y-4 text-center text-[16px]">
            <p>
              Unsere Referenzkarte für Photovoltaikprojekte gibt Ihnen einen klaren Überblick über bereits realisierte
              Anlagen in Ihrer Umgebung.
              <br />
              Sie entdecken Standorte, erhalten Einblicke in technische Daten, vergleichen Projekttypen und erfahren,
              wie Solarenergie Referenzen konkret umgesetzt wurden.
              <br />
              <br />
              Von kleinen Anlagen für Einfamilienhäuser bis hin zu umfassenden Großanlagen für Unternehmen – jedes
              Projekt wurde an die jeweiligen Anforderungen angepasst.
              <br />
              Dazu gehören die optimale Modulausrichtung, Integration von Speicherlösungen und die nahtlose
              Netzanbindung.
              <br />
              Mit smarter Energiesteuerung, modernen Batteriespeichern und intelligentem Monitoring wird die erzeugte
              Energie bestmöglich genutzt – sei es zur Eigenversorgung oder zur Einspeisung.
              <br />
              Kundenreferenzen Solarenergie belegen: Unternehmen senken durch Photovoltaik ihre Betriebskosten und
              stärken gleichzeitig ihre Nachhaltigkeitsstrategie.
              <br />
              <br />
              Unsere langjährige Erfahrung mit über 5.000 installierten PV-Anlagen in ganz Deutschland zeigt: Jedes
              Projekt trägt aktiv zur Energiewende bei und bringt unseren Kunden langfristige Vorteile. Ob im ländlichen
              Raum, in städtischen Gebieten oder in Industrieparks – unsere PV-Projekte in Deutschland spiegeln die
              Vielfalt moderner Solartechnik wider.
              <br />
              <br />
              Die zahlreichen Photovoltaik Referenzen auf unserer Karte machen deutlich, dass Qualität, Transparenz und
              maßgeschneiderte Planung im Mittelpunkt unserer Arbeit stehen. Von der ersten Idee bis zum laufenden
              Betrieb begleiten wir unsere Kunden ganzheitlich und mit einem klaren Ziel: maximale Energieunabhängigkeit
              bei gleichzeitig hoher Wirtschaftlichkeit. Besonders stolz sind wir auf das Vertrauen unserer Kundinnen
              und Kunden, die uns regelmäßig positive Rückmeldungen geben und uns weiterempfehlen. Ihre Erfahrungen mit
              Solaranlagen von Oekovolt fließen direkt in unsere Weiterentwicklung ein – damit wir auch in Zukunft
              führend im Bereich nachhaltiger Energielösungen bleiben.
            </p>
          </div>
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
