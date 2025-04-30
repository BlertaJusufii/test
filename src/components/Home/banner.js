import React from "react";

const VideoBanner = ({ videoSrc, title, mobileVideoSrc }) => {
  return (
    <div className="relative w-full h-screen max-h-[55vh] overflow-hidden z-0">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="hidden md:block w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {mobileVideoSrc && (
          <video autoPlay loop muted playsInline className="md:hidden w-full h-full object-cover">
            <source src={mobileVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div
        className="relative z-10 flex items-center justify-center h-full text-center px-4 max-w-2xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight animate-fadeInUp">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default VideoBanner;
