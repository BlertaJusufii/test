"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { API_IMG_URL } from "@/lib/apiImgUrl";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.hersteller.api.get_icon_partners`;

const FeaturedLogos = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch(DATA_URL, { cache: "no-store" });
        const json = await res.json();
        setLogos(json.message || []);
      } catch (error) {
        console.error("Failed to fetch logos", error);
      }
    };

    fetchLogos();
  }, []);

  if (!logos.length) return null;

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full bg-[#f5f5f5] py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center gap-6">
        <div className="w-full">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center h-20 items-center px-2">
                <div className="relative w-full h-10 grayscale translate-y-1/2">
                  <Image
                    src={`${API_IMG_URL}${logo.logo_image}`}
                    alt={logo.alt_logo_image || `Partner Logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLogos;
