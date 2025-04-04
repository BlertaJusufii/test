"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSolarPanel, FaIndustry, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function SolutionsPage() {
  const projects = [
    {
      id: 1,
      name: "Industrieanlage München",
      image: "/projects/industry.jpg",
      description: "1.2 MWp Anlage für Automobilzulieferer",
    },
    {
      id: 2,
      name: "Gewerbezentrum Hamburg",
      image: "/projects/commercial.jpg",
      description: "850 kWp Dachanlage für Logistikzentrum",
    },
  ];

  const partners = [
    "/partners/partner1.png",
    "/partners/partner2.png",
    "/partners/partner3.png",
    "/partners/partner4.png",
    "/partners/partner5.png",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      {/* Title Section */}
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Photovoltaiklösungen für Industrie, Gewerbe und Privatkunden
        </h2>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <FaSolarPanel className="text-4xl text-[#669933]/90" />, value: "5000", label: "PV-Kraftwerke" },
          { icon: <FaIndustry className="text-4xl text-[#669933]/90" />, value: "340.000kWp", label: "Leistung" },
          { icon: <FaChartLine className="text-4xl text-[#669933]/90" />, value: "112.000t", label: "Co2-Einsparung" },
        ].map((item, i) => (
          <div
            key={i}
            className={`text-center transition-all duration-700 delay-${i * 100} ${
              hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <div className="text-3xl font-bold text-[#669933]">{item.value}</div>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div
        className={`mb-24 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-center text-[#669933] text-xl font-bold mb-4">Projekte</h2>
        <p className="text-center text-black-600 mx-auto mb-12 font-bold text-2xl md:text-4xl">
          Entdecken Sie unsere neuesten Photovoltaik Projekte – echte Referenzen aus ganz Deutschland.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-lg h-64 transform transition-all duration-700 delay-${
                i * 100
              } ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold">{project.name}</h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-[#669933]/90 hover:bg-[#669933] text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Mehr Projekte anzeigen
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div
        className={`mb-16 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-center text-[#669933] text-xl font-bold mb-4">PARTNERS</h2>
        <p className="text-center text-black-600 mx-auto mb-12 font-bold text-2xl md:text-4xl">Wir sind Partner von</p>

        <Slider {...sliderSettings} className="py-8">
          {partners.map((partner, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-24 transition-transform duration-500 hover:scale-105">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
