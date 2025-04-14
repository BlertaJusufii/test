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
        <h2 className="text-center text-[#669933] text-[18px] font-bold mb-4">KOMPONENTEN</h2>
        <p className="text-center text-black-600 mx-auto font-bold md:text-[35px]">
          Eine hochwertige Photovoltaikanlage besteht aus mehreren Schlüsselfaktoren
        </p>

        <Slider {...sliderSettings} className="py-8">
          {komponenten.map((komponent, index) => (
            <div key={index} className="px-4">
              <div className="p-6 h-96 flex flex-col items-center justify-end text-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    width={300}
                    height={300}
                    quality={100}
                    src={komponent.image}
                    alt={komponent.name}
                    className="h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{komponent.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}