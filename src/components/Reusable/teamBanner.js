"use client";

import Image from "next/image";

const BannerSection = ({ data }) => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${data.img}`} // Replace with your image path
          alt="Banner Background"
          fill
          className="object-cover w-full h-full object-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Gradient Overlay - Left to Middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-1/2"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center max-w-4xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-lg text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 uppercase">{data.title}</h1>
            <p className="text-md md:text-lg font-bold mb-4">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
