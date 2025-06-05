"use client";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import { API_IMG_URL } from "@/lib/apiImgUrl";

const StromspeicherBanner = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${API_IMG_URL}${data.strom_banner_image}`}
          alt={data.strom_banner_image_alt || "Banner Background"}
          fill
          quality={100}
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>

      {/* Right shadow overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-[#669933]/60 via-black/10 to-transparent"></div>

      {/* Left white overlay with angled edge */}
      <div className="absolute inset-y-0 left-0 w-full max-w-[1300px] bg-gray-100 z-20 clip-path-banner"></div>

      {/* Text Content */}
      <div className="relative z-30 h-full flex items-center px-46">
        <div className="text-gray-800 max-w-[700px]">
          <span className="uppercase text-sm tracking-widest text-[#669933]">
            {data.strom_title}
          </span>
          <h1 className="text-2xl md:text-3xl mt-3 mb-3">
            {data.strom_subtitle}
          </h1>
          <p className="text-md text-gray-600">{data.strom_description}</p>
        </div>
      </div>

      <style jsx>{`
        .clip-path-banner {
          clip-path: polygon(0 0, 80% 0, 70% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default StromspeicherBanner;
