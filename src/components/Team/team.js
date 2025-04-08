"use client";

import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Member Photo */}
      <div className="relative h-72 w-full ">
        <Image
          src={`http://192.168.68.197:8000${member.image}`}
          alt={member.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Member Info */}
      <div className="p-6 bg-[#669933] text-white">
        <div className="flex justify-between items-start">
          {/* Name and Position */}
          <div>
            <h3 className="text-[20px] font-bold text-white">{member.name}</h3>
            <p className="text-white mt-1 text-[16px]">{member.position}</p>
          </div>

          {/* Contact Icons */}
          <div className="flex flex-col items-end space-y-3">
            {/* Email */}
            <a
              href={`mailto:${member.email}`}
              className="text-white hover:text-white transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <FaEnvelope className="text-xl" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${member.phone}`}
              className="text-white hover:text-white transition-colors"
              aria-label={`Call ${member.name}`}
            >
              <FaPhone className="text-xl" />
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
        const formattedEvents = data.message
          .slice() // copy to avoid mutating original
          .map((marke) => ({
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
