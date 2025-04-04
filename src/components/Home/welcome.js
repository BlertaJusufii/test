"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaSolarPanel, FaPlug, FaLeaf } from "react-icons/fa";

export default function RotatingImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 200;
  const iconSize = 64; // Tailwind w-16 h-16 = 64px

  const images = ["/Images/Navbar/logo.png", "/solar2.jpg", "/Images/Navbar/logo.png"];
  const icons = [
    { icon: FaSolarPanel, color: "text-yellow-500" },
    { icon: FaPlug, color: "text-blue-500" },
    { icon: FaLeaf, color: "text-green-500" },
  ];
  const items = [
    { name: "Individuelle Photovoltaikanlagen", description: "Perfekte Abstimmung auf Ihren Energiebedarf" },
    { name: "Alles aus einer Hand", description: "Von der Planung bis zur Inbetriebnahme Ihrer PV-Anlage" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [icons.length]);

  const getIconPosition = (index) => {
    const totalIcons = icons.length;
    const baseAngle = index * (360 / totalIcons);
    const rotationOffset = -activeIndex * (360 / totalIcons);
    const finalAngle = baseAngle + rotationOffset - 90; // Active is at top
    const angleRad = (finalAngle * Math.PI) / 180;

    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    // Optional: Log calculated positions to check if they form a circle
    // console.log(`Icon ${index}, Active ${activeIndex}: Angle=${finalAngle.toFixed(1)}deg, Pos=(${x.toFixed(1)}, ${y.toFixed(1)})`);
    return { x, y, zIndex: index === activeIndex ? 10 : 1 };
  };

  const containerSize = (radius + iconSize / 2) * 2 + 20; // Diameter + padding

  return (
    <div className="max-w-7xl mx-auto p-10 pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Rotating Icons Section */}
        <div
          className="relative flex items-center justify-center mx-auto mb-10 lg:mb-0"
          style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
        >
          {/* Central Image */}
          <motion.div
            key={activeIndex} // Add key here too for consistency
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-78 h-78 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg z-0" // Explicit z-0
          >
            <img src={images[activeIndex % images.length]} alt="Solar Image" className="w-full h-full object-cover" />
          </motion.div>

          {/* SVG Dotted Circle Path */}
          <svg
            className="absolute top-0 left-0 w-full h-full z-[5]" // z-index between image and icons
            viewBox={`0 0 ${containerSize} ${containerSize}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={containerSize / 2}
              cy={containerSize / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              className="text-gray-300 dark:text-gray-600"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Orbiting Icons */}
          {icons.map(({ icon: Icon, color }, index) => {
            const { x, y, zIndex } = getIconPosition(index);

            return (
              <motion.div
                key={index}
                // Position element's center at the parent's center initially
                className={`absolute top-1/2 left-1/2 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer border-2 ${
                  // Removed transition-transform here, let motion handle it
                  index === activeIndex ? "border-blue-500" : "border-gray-300"
                }`}
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  // Offset by half size to truly center before transform
                  marginLeft: `-${iconSize / 2}px`,
                  marginTop: `-${iconSize / 2}px`,
                  zIndex,
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.15 }}
                animate={{
                  x: x, // Target X translation from center
                  y: y, // Target Y translation from center
                  scale: index === activeIndex ? 1.1 : 1,
                  // *** Use tween transition with linear easing ***
                  transition: {
                    // Apply to x and y changes
                    x: { type: "tween", duration: 0.8, ease: "linear" },
                    y: { type: "tween", duration: 0.8, ease: "linear" },
                    // Scale can use default spring or tween
                    scale: { type: "spring", stiffness: 200, damping: 15 },
                  },
                  // --- Alternative simpler transition (applies to all animated props) ---
                  // transition: { type: "tween", duration: 0.8, ease: "linear" }
                }}
              >
                <Icon className={`text-2xl ${color}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Text Content Section (remains the same) */}
        <div className="space-y-4">
          {/* ... text content ... */}
          <h2 className="text-[#669933] text-xl font-bold">Willkommen bei Ökovolt Solartechnik</h2>
          <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihr Experte für Photovoltaik in Deutschland – seit über 15 Jahren.
          </p>
          <p className="text-gray-700">
            Wir sind spezialisiert auf die Planung und Umsetzung leistungsstarker Photovoltaikanlagen für Gewerbe,
            Industrie, Kommunen und Privathaushalte.
          </p>
          <ul className="space-y-3 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 ">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 flex-col">
                <div className="flex items-center gap-3 justify-start">
                  <div className={` flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[#669933]`}>
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
