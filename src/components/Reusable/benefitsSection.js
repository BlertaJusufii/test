"use client";
import Image from "next/image";

const BenefitsLayout = ({ data }) => {
  return (
    <section className=" pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 max-w-6xl">
        {/* Top Row: Image + Benefits Grid */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="lg:w-1/2  pr-2 lg:pr-0">
            <div className=" h-[300px] md:h-[400px] relative lg:h-full w-full rounded-lg overflow-hidden shadow-lg ">
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
            <h2 className="text-[18px] font-bold text-[#669933] mb-8">{data.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Benefit 1 */}
              {data.benefits.map((benefit, index) => (
                <div key={index} className="bg-white  ">
                  <h2 className="text-[18px] font-bold text-[#669933] mb-3">{benefit.title}</h2>
                  <p className="text-gray-700 text-[16px]">{benefit.description}</p>
                </div>
              ))}
            </div>
            {/* Summary Paragraph */}
            <p className="text-gray-700 mb-12 text-left  mx-auto pt-8 text-[16px]">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsLayout;
