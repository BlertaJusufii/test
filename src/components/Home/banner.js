import React from "react";

const VideoBanner = ({ videoSrc, title, mobileVideoSrc }) => {
  return (
    <div className="relative w-full h-screen max-h-[70vh] overflow-hidden z-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video autoPlay loop muted playsInline className="hidden md:block w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video (optional) */}
        {mobileVideoSrc && (
          <video autoPlay loop muted playsInline className="md:hidden w-full h-full object-cover">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Fallback image if videos don't load */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center h-full text-center px-4 max-w-5xl
      mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">{title}</h1>
      </div>
    </div>
  );
};

export default VideoBanner;
