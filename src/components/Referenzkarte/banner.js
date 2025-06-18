"use client";
import React from "react";
import Image from "next/image";
import { API_IMG_URL } from "@/lib/apiImgUrl";

const ReferenzkarteBannerSection = ({ data }) => {
  return (
    <section className="h-[300px] w-full overflow-hidden lg:h-[400px] relative">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={`${API_IMG_URL}${data.image}`}
          alt={data.alt_image}
          fill
          quality={100}
          className="object-cover w-full h-full object-center"
          priority
          style={{
            objectPosition: "center center",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-transparent w-2/3"></div>
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4">
        <div>
          <div className="max-w-xl text-white">
            <h1 className="max-w-[660px] text-[28px]  md:text-[40px] font-medium mb-4">{data.title}</h1>
            <p className="max-w-[560px] text-[20px] font-medium mb-4">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenzkarteBannerSection;
