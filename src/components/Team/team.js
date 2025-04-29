"use client";
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* Member Photo */}
      <div className="relative aspect-square w-full max-h-100">
        <Image
          src={`http://192.168.68.197:8000${member.image}`}
          alt={member.name}
          fill
          quality={100}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 md:p-6 bg-[#669933] text-white flex-grow flex flex-col">
        <div className="flex justify-between items-start flex-grow">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-lg md:text-xl font-bold text-white line-clamp-1">{member.name}</h3>
            <p className="text-white mt-1 text-sm md:text-base line-clamp-2">{member.position}</p>
          </div>
          <div className="flex flex-col items-end space-y-2 md:space-y-3 flex-shrink-0">
            <a href={`mailto:${member.email}`} className="text-white hover:text-white/80 transition-colors">
              <FaEnvelope className="text-lg md:text-xl" />
            </a>
            <a href={`tel:${member.phone}`} className="text-white hover:text-white/80 transition-colors">
              <FaPhone className="text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [teams, setTeams] = useState([]); // Ruaj ngjarjet nga API

  // Merr të dhënat nga API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.teamde.api.teamde_data"
        );

        // Kontrollo nëse përgjigja është e suksesshme
        if (!response.ok) {
          throw new Error("Gabim gjatë marrjes së të dhënave");
        }

        // Kthe përgjigjen në JSON
        const data = await response.json();

        // Formato ngjarjet për FullCalendar
        const formattedEvents = data.message.map((marke) => ({
          name: marke.name1,
          surname: marke.vorname,
          email: marke.e_mail,
          phone: marke.telefon,
          image: marke.bild_anhagen,
          status: marke.status,
          position: marke.rolle,
        }));

        // Vendos ngjarjet në state
        setTeams(formattedEvents);
      } catch (error) {
        console.error("Gabim gjatë marrjes së ngjarjeve:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="pb-15 lg:pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {teams.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
