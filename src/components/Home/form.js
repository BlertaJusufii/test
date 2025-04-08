"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBuilding, FaWarehouse, FaHouseUser, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PVInquiryForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roofType: "",
    isOwner: "",
    powerConsumption: 9000,
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    city: "",
    phone: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const roofTypes = [
    { id: "pultdach", label: "Pultdach", icon: FaHome },
    { id: "flachdach", label: "Flachdach", icon: FaWarehouse },
    { id: "satteldach", label: "Satteldach", icon: FaBuilding },
    { id: "other", label: "Sonstiges Installation", icon: FaHouseUser },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        welche_dachform_hat_dein_haus: formData.roofType,
        bist_du_eigentümer_der_immobilie: formData.isOwner === "yes" ? "Eigentümer" : "Nicht Eigentümer",
        wieviel_stromverbrauch_hast_du_im_jahr: `Jährlicher Stromverbrauch: ${formData.powerConsumption} kWh`,
        nachname: formData.lastName,
        vorname: formData.firstName,
        e_mail: formData.email,
        telefonnummer: formData.phone,
        plz: formData.zipCode,
        ort: formData.city,
        allgemeine_geschäftsbedingungen: formData.acceptTerms ? 1 : 0,
      };

      const response = await fetch(
        "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.anfrage_de.api.create_anfrage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Anfrage");
      }

      const result = await response.json();
      console.log("API Response:", result);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Vielen Dank für Ihre Anfrage!</h2>
          <p className="text-lg text-gray-700">
            Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2
        className={`text-[18px] font-bold mb-6 text-[#669933] transition-all duration-700 ${
          hasMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        Unverbindliche Anfrage Photovoltaik Anlage
      </h2>

      <div className="mb-6">
        <div className="flex mb-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`flex-1 h-2 mx-1 rounded-full ${i <= step ? "bg-[#669933]" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            key="step1"
          >
            <h2 className="text-[20px] lg:text-[24px] font-semibold mb-4">Welche Dachform hat dein Haus?</h2>
            <p className="text-gray-600 mb-6 text-[16px] lg:text-[20px]">
              Bitte wähle die Form des Daches auf welchem die Anlage installiert werden soll
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
              {roofTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.id} className="group">
                    <label
                      className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all h-full ${
                        formData.roofType === type.id
                          ? "border-[#669933] bg-[#669933]/10"
                          : "border-gray-200 hover:border-[#669933]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="roofType"
                        value={type.id}
                        checked={formData.roofType === type.id}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div
                        className={`p-4 mb-3 rounded-full ${
                          formData.roofType === type.id
                            ? "bg-[#669933]/10 text-[#669933]"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}
                      >
                        <Icon className="text-3xl" />
                      </div>
                      <span className="font-medium text-center">{type.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!formData.roofType}
                className={`px-6 py-2 rounded-md text-[16px] ${
                  formData.roofType
                    ? "bg-[#669933]/90 hover:bg-[#669933] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                NÄCHSTE &gt;
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            key="step2"
          >
            <h2 className="text-[20px] lg:text-[24px] font-semibold mb-4">Bist du Eigentümer der Immobilie?</h2>
            <p className="text-gray-600 mb-6 text-[16px] lg:text-[20px]">
              Bitte bestätige ob du der Eigentümer der Immobilie bist
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { id: "yes", label: "Ja", icon: FaCheckCircle },
                { id: "no", label: "Nein", icon: FaTimesCircle },
              ].map((option) => {
                const Icon = option.icon;
                return (
                  <div key={option.id} className="group">
                    <label
                      className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all h-full ${
                        formData.isOwner === option.id
                          ? "border-[#669933] bg-[#669933]/10"
                          : "border-gray-200 hover:border-[#669933]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="isOwner"
                        value={option.id}
                        checked={formData.isOwner === option.id}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div
                        className={`p-4 mb-3 rounded-full ${
                          formData.isOwner === option.id
                            ? "bg-[#669933]/10 text-[#669933]"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}
                      >
                        <Icon className="text-3xl" />
                      </div>
                      <span className="font-medium text-center">{option.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 text-[16px]"
              >
                ZURÜCK
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.isOwner}
                className={`px-6 py-2 rounded-md text-[16px] ${
                  formData.isOwner
                    ? "bg-[#669933]/90 hover:bg-[#669933] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                NÄCHSTE &gt;
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            key="step3"
          >
            <h2 className="text-[20px] lg:text-[24px] font-semibold mb-4">Wieviel Stromverbrauch hast du im Jahr?</h2>
            <p className="text-gray-600 mb-6 text-[16px] lg:text-[20px]">
              Benutze den Schieberegler um den ungefähren Jahresbedarf anzugeben
            </p>

            <div className="mb-8">
              <input
                type="range"
                name="powerConsumption"
                min="1000"
                max="20000"
                step="100"
                value={formData.powerConsumption}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-4 text-[20px] lg:text-[24px] font-semibold">
                {formData.powerConsumption} kWh pro Jahr
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 text-[16px]"
              >
                ZURÜCK
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#669933]/90 hover:bg-[#669933] text-white rounded-md text-[16px]"
              >
                NÄCHSTE &gt;
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            key="step4"
          >
            <h2 className="text-[20px] lg:text-[24px] font-bold mb-2">Noch ein Schritt bis zu deinem Angebot</h2>
            <p className="text-gray-600 mb-6 text-[16px] lg:text-[20px]">
              Klasse, das Angebot ist in deiner Region verfügbar. Wir melden uns schnellstmöglich bei dir!
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nachname</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postleitzahl *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ort *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600">Ich akzeptiere die Datenschutzbestimmungen und AGB</label>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 text-[16px]"
              >
                ZURÜCK
              </button>
              <button
                onClick={handleSubmit}
                disabled={
                  !formData.firstName ||
                  !formData.email ||
                  !formData.zipCode ||
                  !formData.city ||
                  !formData.phone ||
                  !formData.acceptTerms
                }
                className={`px-6 py-2 rounded-md text-[16px] ${
                  loading
                    ? "bg-gray-400 text-white cursor-wait"
                    : formData.firstName &&
                      formData.email &&
                      formData.zipCode &&
                      formData.city &&
                      formData.phone &&
                      formData.acceptTerms
                    ? "bg-[#669933]/90 hover:bg-[#669933] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {loading ? "Wird gesendet..." : "JETZT ANGEBOT ANFORDERN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
