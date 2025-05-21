"use client";
import { motion } from "framer-motion"; // ✅ Import motion
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSolarPanel,
  FaIndustry,
  FaChartLine,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 z-50 transform -translate-y-1/2 text-5xl text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md"
  >
    <FaAngleLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 z-50 transform -translate-y-1/2 text-5xl text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md"
  >
    <FaAngleRight />
  </div>
);

export default function SolutionsPage() {
  const stats = [
    {
      icon: <FaSolarPanel className="text-[35px] text-[#669933]/90" />,
      value: 5000,
      label: "PV-Kraftwerke",
    },
    {
      icon: <FaIndustry className="text-[35px] text-[#669933]/90" />,
      value: 340000,
      suffix: "kWp",
      label: "Leistung",
    },
    {
      icon: <FaChartLine className="text-[35px] text-[#669933]/90" />,
      value: 112000,
      suffix: "t",
      label: "Co2-Einsparung",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const countersRef = useRef(null);
  const animationRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [partnersFrappe, setPartnersFrappe] = useState([]);
  const [projectFrappe, setProjectFrappe] = useState([]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

  const startCounters = () => {
    const duration = 3000;
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
      { breakpoint: 1024, settings: { slidesToShow: 3, autoplay: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, autoplay: true } },
      { breakpoint: 468, settings: { slidesToShow: 1, autoplay: true } },
    ],
  };

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

        if (!partnersRes.ok || !projectsRes.ok)
          throw new Error("Fehler beim Laden der Daten");

        const partnersData = await partnersRes.json();
        const projectsData = await projectsRes.json();

        const formattedPartners = partnersData.message.map((marke) => ({
          name: marke.name1,
          image: marke.bild_anhagen,
          status: marke.status,
        }));

        const formattedProjects = projectsData.message
          .slice(0, 3)
          .map((projekt) => ({
            title: projekt.title,
            image: projekt.bild_anhagen[0]?.bild_anhagen,
            leistung: projekt.leistung,
            status: projekt.status,
          }));

        setPartnersFrappe(formattedPartners);
        setProjectFrappe(formattedProjects);
      } catch (error) {
        console.error("Fehler:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-2xl lg:text-2xl font-[500] text-gray-900 mb-6">
          Photovoltaiklösungen für Industrie, Gewerbe und Privatkunden
        </h2>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        ref={countersRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:mb-25 md:mb-10 sm:mb-10 relative pb-10"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-2">{item.icon}</div>
            <div className="text-[40px] font-[500] text-[#669933] mb-2">
              {counters[i].toLocaleString()}
              {item.suffix && <span>{item.suffix}</span>}
            </div>
            <p className="text-black text-[18px]">{item.label}</p>
          </motion.div>
        ))}
        {/* <div
          className="hidden lg:block lg:absolute bottom-0 left-0 right-0 w-full h-[3px] bg-[#669933] rounded-full"
          style={{ boxShadow: "0 15px 30px 5px rgba(112,163,61,0.7)" }}
        ></div> */}
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <div className="text-center mb-6 flex flex-col items-center justify-center">
        <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-lg">
                        Projekte
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
                    </h2>
          <p className="text-center text-black-500 mx-auto mb-12 lg:text-[30px] text-2xl md:text-3xl font-bold mt-6">
            Entdecken Sie unsere neuesten Photovoltaik Projekte – echte
            Referenzen aus ganz Deutschland.
          </p>
        </div>

        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 450, settings: { slidesToShow: 1 } },
            ],
          }}
          className="mb-12 relative"
        >
          {projectFrappe.map((project, i) => (
            <div key={i} className="px-5">
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
                className="relative group overflow-hidden rounded-lg h-100 transform transition-all duration-700"
              >
                <img
                  src={`http://192.168.68.197:8000${project.image}`}
                  alt={project.title}
                  className="w-full h-120 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="group-hover:scale-105 transition-transform duration-500">
                    <h3 className="text-white text-[20px] uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[18px]">
                      {project.leistung}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <div className="text-center flex flex-row items-center justify-center mt-4">
          <Link
            href={"/referenzen/projekte"}
            className="flex items-center justify-center gap-2 bg-[#669933] hover:bg-[#669933]/90 text-white uppercase px-6 py-3 rounded-lg transition-colors duration-300 text-[14px]"
          >
            Weitere Projekte <FaAngleRight />
          </Link>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-5"
      >
        <div className="text-center mb-6">
        <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-lg">
                        PARTNERS
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
                    </h2>
          <p className="text-center text-black-500 mx-auto lg:text-[30px] text-2xl md:text-3xl font-bold mb-12 mt-6">
            Wir sind Partner von
          </p>
        </div>

        <Slider {...sliderSettings} className="mt-6">
          {partnersFrappe.map((partner, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center h-40 transition-transform duration-500 hover:scale-105">
                <Image
                  src={`http://192.168.68.197:8000${partner.image}`}
                  alt={partner.name}
                  width={200}
                  height={160}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
