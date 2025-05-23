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
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import { API_IMG_URL } from "@/lib/apiImgUrl";

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
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check if file is PDF
      if (selectedFile.type !== "application/pdf") {
        setFileError("Bitte laden Sie nur PDF-Dateien hoch");
        setFile(null);
        e.target.value = ""; // Reset file input
      } else {
        setFile(selectedFile);
        setFileError(null);
      }
    }
  };

  const validateForm = () => {
    // Basic field validation
    if (!formData.name.trim()) {
      setError("Bitte geben Sie Ihren Namen ein");
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Bitte geben Sie Ihre Telefonnummer ein");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Bitte geben Sie eine Nachricht ein");
      return false;
    }
    if (!file) {
      setError("Bitte laden Sie Ihren Lebenslauf hoch");
      return false;
    }
    return true;
  };

  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form before submission
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);
      
      if (file) {
        formPayload.append("cv", file);
      }

      const response = await fetch(
        `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.karriere_bewerbung.api.submit_application`,
        {
          method: "POST",
          body: formPayload,
          // Content-Type will be automatically set to multipart/form-data by the browser
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Fehler beim Absenden der Bewerbung");
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setFile(null);
      document.getElementById("file-upload").value = "";
    } catch (err) {
      setError(err.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowSuccess(false);
        setError(null);
      }, 5000);
    }
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
            {error && (
              <motion.div
                className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-3 rounded-md mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <FaCheckCircle />
                <span>{error}</span>
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
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center gap-2 bg-[#669933] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#669933]/80 transition text-sm font-medium"
              >
                <FaFileUpload className="text-white" />
                {file ? file.name : "Lebenslauf auswählen (nur PDF)"}
              </label>
              {fileError && (
                <p className="text-red-500 text-sm mt-1">{fileError}</p>
              )}
            </div>

            <Buttons>
              <button type="submit" disabled={loading}>
                <span></span>
                <p data-title="Bewerbung Absenden">
                  {loading ? (
                    "Wird gesendet..."
                  ) : (
                    <>
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
                    </>
                  )}
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