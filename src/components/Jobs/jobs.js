"use client";
import React from "react";
import Image from "next/image";

const JobsInfo = ({ data }) => {
  return (
    <section className=" pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 max-w-6xl">
        {/* Top Row: Image + Benefits Grid */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Image */}

          <div className="lg:w-1/2">
            <h2 className="text-[28px] md:text-[35px] font-bold text-[#669933] mb-8">{data.title}</h2>

            {data.description.map((desc, index) => (
              <p key={index} className="text-gray-700 mb-8  max-w-4xl mx-auto text-[16px]">
                {desc}
              </p>
            ))}
          </div>
          {/* Right Column - Benefits Grid */}
          <div className="lg:w-1/2">
            <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg ">
              <Image
                src={`${data.img}`} // Replace with your image path
                alt="Solar panel installation"
                fill
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsInfo;
