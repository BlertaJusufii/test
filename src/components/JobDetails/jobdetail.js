"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTasks,
  FaUserGraduate,
  FaThumbsUp,
  FaInfoCircle,
  FaCheckCircle,
  FaFileUpload,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdDescription } from "react-icons/md";


const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 100%;
    padding: 10px;
    height: 45px;
    background-color: transparent;
    color: #30373e;
    position: relative;
    overflow: hidden;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.5s ease;
    cursor: pointer;
    border: 2px solid #669933;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    p {
      margin: 0;
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 16px;
        height: 16px;
        transition: transform 0.3s ease;
      }
    }

    &:hover p svg {
      transform: translateX(4px);
    }
  }
`;

const JobDetails = ({ jobData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (!jobData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 rounded-lg bg-white shadow-md">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#669933] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Image & Title
      {jobData.bild_anhagen ? (
        <div className="relative w-full h-72 sm:h-96">
          <Image
            src={`http://10.10.200.192:8000${jobData.bild_anhagen}`}
            alt="Job Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {jobData.title}
            </motion.h1>
            {jobData.ort && (
              <motion.div
                className="flex items-center text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FaMapMarkerAlt className="mr-2 text-[#669933]" />
                <span>{jobData.ort}</span>
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-72 bg-gradient-to-r from-[#1f1f1f] to-[#30373e] flex flex-col items-center justify-center rounded-t-lg text-white p-6 text-center">
          <FaInfoCircle className="text-5xl mb-4 text-[#669933]" />
          <motion.h1
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {jobData.title}
          </motion.h1>
          {jobData.ort && (
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaMapMarkerAlt className="mr-2 text-[#669933]" />
              <span>{jobData.ort}</span>
            </motion.div>
          )}
        </div>
      )} */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Job Overview Section */}
        <motion.div
          className="mb-10 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 gap-4 text-[17px] text-gray-700 mb-6">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#669933]" />{" "}
              <strong>Standort:</strong> {jobData.ort || "Nicht angegeben"}
            </p>
            <p className="flex items-center gap-2">
              <FaMoneyBillWave className="text-[#669933]" />{" "}
              <strong>Gehalt:</strong> {jobData.gehalt || "Nicht angegeben"}
            </p>
          </div>

          {/* <p className="whitespace-pre-line mb-4 text-[17px] leading-relaxed">
          <strong>Beschreibung:</strong> {jobData.beschreibung || "Nicht angegeben"}

          </p> */}
        </motion.div>

        {/* Tasks, Qualifications, Benefits */}
        <motion.div
          className="space-y-8 grid sm:grid-cols-2 gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {jobData.deine_aufgaben?.length > 0 && (
            <div>
              <p className="font-semibold text-[#1f1f1f] text-[18px] flex items-center gap-2 mb-3">
                <FaTasks className="text-[#669933]" />
                Deine Aufgaben:
              </p>
              <ul className="space-y-3 pl-2">
                {jobData.deine_aufgaben.map((item, index) => (
                  <li
                    key={item.name ?? index}
                    className="flex items-start gap-3 text-[#1f1f1f] text-[16px]"
                  >
                    <FaCheckCircle className="text-[#669933] text-lg mt-1" />
                    <span>{item.beschreibung}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {jobData.deine_qualifikationen?.length > 0 && (
            <div>
              <p className="font-semibold text-[#1f1f1f] text-[18px] flex items-center gap-2 mb-3">
                <FaUserGraduate className="text-[#669933]" />
                Deine Qualifikationen:
              </p>
              <ul className="space-y-3 pl-2">
                {jobData.deine_qualifikationen.map((item, index) => (
                  <li
                    key={item.name ?? index}
                    className="flex items-start gap-3 text-[#1f1f1f] text-[16px]"
                  >
                    <FaCheckCircle className="text-[#669933]  text-lg mt-1" />
                    <span>{item.beschreibung}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {jobData.deine_vorteile?.length > 0 && (
            <div>
              <p className="font-semibold text-[#1f1f1f] text-[18px] flex items-center gap-2 mb-3">
                <FaThumbsUp className="text-[#669933]" />
                Deine Vorteile:
              </p>
              <ul className="space-y-3">
                {jobData.deine_vorteile.map((item, index) => (
                  <li
                    key={item.name ?? index}
                    className="flex items-start gap-3 text-[#1f1f1f] text-[16px]"
                  >
                    <FaCheckCircle className="text-[#669933] text-lg mt-1" />
                    <span>{item.beschreibung}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
        {/* <p className="whitespace-pre-line mb-4 text-[17px] leading-relaxed">
          <strong>Beschreibung:</strong> {jobData.beschreibung || "Nicht angegeben"}

          </p> */}
          <p className="flex items-center gap-2 whitespace-pre-line mb-4 text-[17px] leading-relaxed">
              <MdDescription className="text-[#669933]" />{" "}
              <strong>Beschreibung:</strong> {jobData.beschreibung || "Nicht angegeben"}
            </p>

        {/* Application Form */}
        <motion.div
          className="bg-white border border-gray-200 p-6 rounded-lg shadow-md mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#1f1f1f]">Jetzt Bewerben</h3>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-3 rounded-md mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <FaCheckCircle />
                <span>Vielen Dank! Ihre Bewerbung wurde erfolgreich eingereicht.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleApply} className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <FaUser className="text-[#669933]" />
              <input
                type="text"
                name="name"
                placeholder="Ihr Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-[16px]"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <FaEnvelope className="text-[#669933]" />
              <input
                type="email"
                name="email"
                placeholder="Ihre E-Mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-[16px]"
              />
            </div>

            {/* New Phone Number Field */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <FaPhone className="text-[#669933]" />
              <input
                type="tel"
                name="phone"
                placeholder="Telefonnummer"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-[16px]"
              />
            </div>

            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <textarea
                name="message"
                rows="4"
                placeholder="Nachricht oder Motivation..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-[16px]"
              />
            </div>

            <div className="relative inline-block">
              <input type="file" id="file-upload" className="hidden" />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center gap-2 bg-[#669933] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#669933]/80 transition text-sm font-medium"
              >
                <FaFileUpload className="text-white" />
                Datei auswählen
              </label>
            </div>

            <Buttons>
              <button type="submit">
                <span></span>
                <p data-title="Bewerbung Absenden">
                  Bewerbung Absenden
                  <svg
                    className="ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </button>
            </Buttons>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default JobDetails;
