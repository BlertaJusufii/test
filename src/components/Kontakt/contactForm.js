"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    zipCity: "",
    street: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (message) {
      setShowMessage(true);
      timer = setTimeout(() => {
        setShowMessage(false);
        // Wait for the fade-out animation to complete before removing the message
        setTimeout(() => setMessage(null), 300);
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.message ||
      !formData.lastName ||
      !formData.phone ||
      !formData.zipCity ||
      !formData.street
    ) {
      setMessage({ type: "error", text: "Bitte füllen Sie alle Pflichtfelder aus." });
      setLoading(false);
      return;
    }

    const payload = {
      nachname: formData.firstName,
      vorname: formData.lastName,
      e_mail_adressee: formData.email,
      telefonnummer: formData.phone,
      ihre_nachricht: formData.message,
      strasse_und_hausnummer: formData.street,
      plz_und_ort: formData.zipCity,
    };

    // Log payload to see what is being sent
    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(
        "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.kontakt_de.api.create_contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const errorMsg = responseData.message || responseData.error || "Fehler beim Senden der Nachricht.";
        throw new Error(errorMsg);
      }

      setMessage({ type: "success", text: "Nachricht erfolgreich gesendet!" });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        street: "",
        zipCity: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({ type: "error", text: error.message || "Es gab einen Fehler beim Senden Ihrer Nachricht." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Kontakt/download-2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 py-30">
        <div className="rounded-lg shadow-xl p-8 bg-opacity-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-[16px] font-medium text-white">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="Ihr Vorname"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-[16px] font-medium text-white">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="Ihr Nachname"
                />
              </div>

              {/* Street and House Number */}
              <div>
                <label htmlFor="street" className="block text-[16px] font-medium text-white">
                  Strasse und Hausnummer *
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="Musterstraße 123"
                />
              </div>

              {/* ZIP and City */}
              <div>
                <label htmlFor="zipCity" className="block text-[16px] font-medium text-white">
                  PLZ und Ort *
                </label>
                <input
                  type="text"
                  id="zipCity"
                  name="zipCity"
                  value={formData.zipCity}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="12345 Musterstadt"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[16px] font-medium text-white">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="ihre@email.de"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[16px] font-medium text-white">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                  placeholder="+49 123 456789"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[16px] font-medium text-white">
                Ihre Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white bg-transparent placeholder-gray-400"
                placeholder="Ihre Nachricht an uns..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#669933] hover:bg-[#5a8a2d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#669933] transition-colors duration-200 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  "ANFRAGE SENDEN"
                )}
              </button>
              {message && (
                <div
                  className={`mt-6 p-4 rounded-md transition-all duration-300 transform ${
                    message.type === "error"
                      ? "flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      : "flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  } ${showMessage ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                  role="alert"
                >
                  <svg
                    className="shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium"> {message.text}</span>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
