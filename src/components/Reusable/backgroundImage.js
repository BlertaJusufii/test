"use client";

import Image from "next/image";

const TechnologySection = ({ backgroundImage }) => {
  return (
    <section className="relative  w-full">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <div className="absolute inset-0">
          <Image
            src={`${backgroundImage?.src}`} // Replace with dynamic path if needed
            alt="Technological Developments"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            className="mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center py-20">
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="p-8 text-white">
            <h3 className="text-[25px] font-bold mb-6 text-center">{backgroundImage?.title}</h3>

            <div className="prose prose-lg space-y-4 text-white text-center">
              {backgroundImage?.description.map((desc, index) => (
                <p key={index} className="text-[16px]">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
