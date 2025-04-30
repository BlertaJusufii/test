"use client";
import Image from "next/image";

export default function AnotherDesign() {
  return (
    <div className="w-full bg-gray-100 pb-16">
       <div className="max-w-7xl  mx-auto px-4 py-16  flex flex-col lg:flex-row items-center gap-20">
    {/* Left - Image with decorations */}
    <div className="relative w-full max-w-xl">
      <div className="relative z-10 rounded-lg overflow-hidden">
        <Image
          src="/Images/Team/download-1.jpg" // Make sure image is in /public/images/
          alt="Zoo Image"
          width={600}
          height={800}
          className="rounded-xl h-100 w-400 pl-10"
        />
      </div>
      {/* Bottom badge */}
      {/* <div className="absolute  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-20 border border-green-100">
        <Image
          src="/Images/Team/download-1.jpg" // small icon
          alt="Zoo Icon"
          width={150}
          height={150}
          className="rounded-ld"
        />
      </div> */}
      {/* Green border accents */}
      <div className="absolute top-0 left-0 w-116 h-108 bg-[#669933] rounded-br-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-116 h-108 bg-[#669933] rounded-tr-3xl z-0" />
    </div>

    {/* Right - Text */}
    <div className="w-full max-w-5xl text-center lg:text-left">
    
      <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Ganzheitliche Planung und Umsetzung für nachhaltige Energielösungen
      </h2>
      <p className="text-gray-600 mb-6">
      Ein erfolgreicher Einstieg in die Photovoltaik beginnt mit einer fundierten 
      Analyse Ihrer individuellen Anforderungen, gefolgt von einer präzisen 
      Projektierung, detaillierten Planung und professionellen Umsetzung durch
       unsere erfahrenen Experten. Dabei berücksichtigen wir nicht nur technische 
       Gegebenheiten, sondern auch wirtschaftliche Rahmenbedingungen, 
       Fördermöglichkeiten sowie zukünftige Ausbaupotenziale Ihrer Anlage.


      </p>

      {/* Highlight box */}
      <div className="rotating-border bg-gray-900 rounded-lg p-4 flex items-center gap-4 mb-6 text-white">
  <Image
    src="/Images/Team/download.jpg"
    alt="Highlight"
    width={150}
    height={150}
    className="rounded-md object-cover"
  />
  <p className="text-sm">
    Oekovolt bietet Ihnen komplette Photovoltaiklösungen – von
    der hochwertigen Installation bis zur intelligenten Systemoptimierung.
  </p>
</div>

<div class="card-container">
    <div class="animated-border"></div>
    <div class="card-content">
      <h2>Hello Bro 👋</h2>
    </div>
  </div>


      {/* Bullet points */}
      <ul className="space-y-2 text-gray-800 font-semibold mb-6">
        <li className="flex items-center gap-2">
          <span className="text-[#669933]">✔</span> Langjährige Erfahrung aus Solarprojekten in ganz Deutschland.
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#669933]">✔</span> Qualität, Präzision und persönliche Beratung für maximale Effizienz.
        </li>
      </ul>
    </div>
  </div> 
    </div>
    
  );
}
