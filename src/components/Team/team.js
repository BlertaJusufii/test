"use client";

import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Member Photo */}
      <div className="relative h-72 w-full ">
        <Image
          src={member.image}
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
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-white mt-1">{member.position}</p>
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
  const teamMembers = [
    {
      id: 1,
      name: "Max Mustermann",
      position: "Geschäftsführer",
      email: "max@oekovolt.com",
      phone: "+43123456789",

      image: "/Images/Team/sylvie.jpg",
    },
    {
      id: 2,
      name: "Erika Musterfrau",
      position: "Projektleiterin",
      email: "erika@oekovolt.com",
      phone: "+43123456788",

      image: "/Images/Team/sylvie.jpg",
    },
    {
      id: 3,
      name: "Thomas Technik",
      position: "Technischer Leiter",
      email: "thomas@oekovolt.com",
      phone: "+43123456787",
      image: "/Images/Team/sylvie.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
