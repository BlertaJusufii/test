"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function KomponentenSlider() {
  const komponenten = [
    {
      name: "Montagegestell",
      image: "/Images/Dienstleistungen/Photovoltaik/Montagegestell.png",
    },
    {
      name: "Photovoltaikmodule",
      image: "/Images/Dienstleistungen/Photovoltaik/photovoltaikmodule.png",
    },
    {
      name: "BYD",
      image: "/Images/Dienstleistungen/Photovoltaik/BYD.png",
    },
    {
      name: "HUAWEI LUNA",
      image: "/Images/Dienstleistungen/Photovoltaik/HUAWEI-LUNA.jpg",
    },
    {
      name: "Welschelrichter",
      image: "/Images/Dienstleistungen/Photovoltaik/welschelrichter.webp",
    },
  ];

  const sliderSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <div
        className={`mb-16 transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
            KOMPONENTEN
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
          </h2>
          <h2 className="text-3xl font-semibold text-gray-900 mt-6">
            Eine hochwertige Photovoltaikanlage besteht aus mehreren
            Schlüsselfaktoren
          </h2>
        </div>
        <Slider {...sliderSettings} className="py-8">
          {komponenten.map((komponent, index) => (
            <div key={index} className="px-4">
              <div className="p-6 h-96 flex flex-col items-center justify-center text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    width={300}
                    height={300}
                    quality={100}
                    src={komponent.image}
                    alt={komponent.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {komponent.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
