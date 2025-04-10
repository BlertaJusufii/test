"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSolarPanel, FaIndustry, FaChartLine } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  const stats = [
    { icon: <FaSolarPanel className="text-[35px] text-[#669933]/90" />, value: 5000, label: "PV-Kraftwerke" },
    { icon: <FaIndustry className="text-[35px] text-[#669933]/90" />, value: 340000, suffix: "kWp", label: "Leistung" },
    {
      icon: <FaChartLine className="text-[35px] text-[#669933]/90" />,
      value: 112000,
      suffix: "t",
      label: "Co2-Einsparung",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const [counters, setCounters] = useState(stats.map(() => 0));
  const countersRef = useRef(null);
  const animationRef = useRef(null);

  const startCounters = () => {
    const duration = 3000; // Animation duration in ms
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newCounters = stats.map((stat, i) => {
        const value = stats[i].value;
        return Math.floor(progress * value);
      });

      setCounters(newCounters);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCounters);
      }
    };

    animationRef.current = requestAnimationFrame(animateCounters);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  const [partnersFrappe, setPartnersFrappe] = useState([]); // Ruaj ngjarjet nga API

  const [projectFrappe, setProjectFrappe] = useState([]); // Ruaj ngjarjet nga API

  // Merr të dhënat nga API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnersRes, projectsRes] = await Promise.all([
          fetch(
            "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.partnersde.api.partnersde_data"
          ),
          fetch(
            "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.projektede.api.projektede_data"
          ),
        ]);

        if (!partnersRes.ok || !projectsRes.ok) {
          throw new Error("Gabim gjatë marrjes së të dhënave");
        }

        const partnersData = await partnersRes.json();
        const projectsData = await projectsRes.json();

        const formattedPartners = partnersData.message.map((marke) => ({
          name: marke.name1,
          image: marke.bild_anhagen,
          status: marke.status,
        }));

        const formattedProjects = projectsData.message.slice(0, 3).map((projekt) => ({
          title: projekt.title,
          image: projekt.bild_anhagen[0]?.bild_anhagen,
          leistung: projekt.leistung,
          status: projekt.status,
        }));

        // Set state këtu
        setPartnersFrappe(formattedPartners);
        setProjectFrappe(formattedProjects);
        // setProjectsFrappe(formattedProjects); // nëse ke një state për projekte
      } catch (error) {
        console.error("Gabim gjatë marrjes së të dhënave:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      {/* Title Section */}
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-[28px] md:text-[30px] font-bold text-gray-900 mb-6">
          Photovoltaiklösungen für Industrie, Gewerbe und Privatkunden
        </h2>
      </div>

      {/* Stats Section */}
      <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative pb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`text-center transition-all duration-700 delay-${i * 100} ${
              hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <div className="text-[35px] font-bold text-[#669933]">
              {counters[i].toLocaleString()}
              {item.suffix && <span>{item.suffix}</span>}
            </div>
            <p className="text-gray-600 text-[18px]">{item.label}</p>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-transparent to-[#669933] w-full"></div>
      </div>
      <div
        className={`mb-24 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-6">
          <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
            Projekte
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h2>
          <p className="text-center text-black-500 mx-auto mb-12 font-semibold text-[28px] md:text-[35px] mt-5">
            Entdecken Sie unsere neuesten Photovoltaik Projekte – echte Referenzen aus ganz Deutschland.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {projectFrappe.map((project, i) => (
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
              key={i}
              className={`relative group overflow-hidden rounded-lg h-64 transform transition-all duration-700 delay-${
                i * 100
              } ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <img
                src={`http://192.168.68.197:8000${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-[24px] font-bold">{project.title}</h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[18px]">
                    {project.leistung}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={"/referenzen/projekte"}
            className="bg-[#669933]/90 hover:bg-[#669933] text-white px-6 py-3 rounded-lg transition-colors duration-300 text-[18px]"
          >
            Mehr Projekte anzeigen
          </Link>
        </div>
      </div>

      <div
        className={`mb-5 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-6">
          <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
            PARTNERS
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h2>
          <p className="text-center text-black-500 mx-auto mb-12 font-semibold text-[28px] md:text-[35px] mt-5">
            Wir sind Partner von
          </p>
        </div>

        <Slider {...sliderSettings} className="py-4">
          {partnersFrappe.map((partner, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center h-40 transition-transform duration-500 hover:scale-105">
                <Image
                  src={`http://192.168.68.197:8000${partner.image}`}
                  alt={partner.name}
                  width={200}
                  height={160}
                  className="w-auto h-auto object-contain transition-all duration-300 "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
