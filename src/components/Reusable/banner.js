"use client";
import React from "react";
import Image from "next/image";

const BannerSection = ({ data }) => {
  return (
<<<<<<< HEAD
    <section className="relative h-[300px] w-full overflow-hidden lg:h-[400px]">
      <div className="absolute inset-0">
=======
    <section className="relative h-[300px] w-full overflow-hidden lg:h-[400px] relative">
      {/* Background Image */}
      <div className="absolute inset-0 ">
>>>>>>> CookieDeveloped
        <Image
          src={`${data.img}`} 
          alt="Banner Background"
          fill
          quality={100}
          className="object-cover w-full h-full "
          priority
<<<<<<< HEAD
          style={{
            objectPosition: "center bottom",
          }}
=======
>>>>>>> CookieDeveloped
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/40 to-transparent w-1/2"></div>
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4">
        <div>
          <div className="max-w-xl text-white">
<<<<<<< HEAD
            <h1 className=" text-[22px]  md:text-[34px] font-bold mb-4 uppercase">{data.title}</h1>
=======
            <h1 className=" text-[28px]  md:text-[40px] font-bold mb-4 uppercase break-all">{data.title}</h1>
>>>>>>> CookieDeveloped
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
