"use client";

import Image from "next/image";
import { FaSolarPanel } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const BenefitsLayout = ({ data }) => {
  return (
    <section className=" pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 max-w-6xl">
        {/* Top Row: Image + Benefits Grid */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Image */}
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

          {/* Right Column - Benefits Grid */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#669933] mb-8">{data.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Benefit 1 */}
              {data.benefits.map((benefit, index) => (
                <div key={index} className="bg-white  ">
                  <h2 className="text-xl font-bold text-[#669933]  mb-3">{benefit.title}</h2>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            {/* Summary Paragraph */}
            <p className="text-gray-700 mb-12 text-center max-w-4xl mx-auto pt-8">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsLayout;
