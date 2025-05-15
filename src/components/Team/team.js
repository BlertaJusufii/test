"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";


const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group h-130 w-100  relative overflow-hidden rounded-2xl bg-white border-3 border-[#669933] hover:text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className=" overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-100 w-100 object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-14 transition-transform duration-300 group-hover:translate-y-0">
        <div className="relative z-10 bg-blue">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-black ">{member.name}</h3>
            <p className="mt-1 text-lg text-[#669933]">{member.position}</p>
          </motion.div>

          <motion.div
            className="mt-4 flex space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          
            <a
              href={`tel:+49 8245 96 788 0`}
              className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#669933]"
            >
 <HiPhone className="h-5 w-5" />
             </a>
            <a
              href="mailto:office@oekovolt.de"
              className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#669933]"
            >
              <MdEmail className="h-5 w-5"/>
            </a>
          </motion.div>

          {/* <motion.p
            className="mt-4 text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {member.bio || 'Experte für nachhaltige Energielösungen mit langjähriger Erfahrung in der Solarbranche.'}
          </motion.p> */}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.teamde.api.teamde_data"
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();

        const formattedEvents = data.message.map((marke) => ({
          name: marke.name1,
          surname: marke.vorname,
          email: marke.e_mail,
          phone: marke.telefon,
          image: `http://192.168.68.197:8000${marke.bild_anhagen}`,
          status: marke.status,
          position: marke.rolle,
          bio: "Experte für nachhaltige Energielösungen mit langjähriger Erfahrung in der Solarbranche."
        }));

        setTeams(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="pb-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
        
        </motion.div>

        <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
          {teams.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;