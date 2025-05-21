"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Map = () => {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const checkCookieConsent = useCallback(() => {
    if (typeof document === "undefined") return false;
    try {
      const cookies = document.cookie.split(";").map((c) => c.trim());
      const cookieConsentCookie = cookies.find((c) => c.startsWith("cookieConsent="));
      if (!cookieConsentCookie) return false;
      const cookieValue = cookieConsentCookie.split("=")[1];
      const decodedValue = decodeURIComponent(cookieValue);
      const consentData = JSON.parse(decodedValue);
      return consentData.googleMaps === true;
    } catch (error) {
      console.error("Cookie parsing error:", error);
      return false;
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    setCookieAccepted(checkCookieConsent());
    const observer = new MutationObserver(() => {
      setCookieAccepted((prev) => {
        const current = checkCookieConsent();
        return current !== prev ? current : prev;
      });
    });
    observer.observe(document, {
      subtree: true,
      attributes: true,
      attributeFilter: ["cookie"],
    });
    return () => observer.disconnect();
  }, [checkCookieConsent]);

  const handleAcceptCookie = () => {
    try {
      let consentData = {};
      const cookies = document.cookie.split(";").map((c) => c.trim());
      const cookieConsentCookie = cookies.find((c) => c.startsWith("cookieConsent="));
      if (cookieConsentCookie) {
        const cookieValue = cookieConsentCookie.split("=")[1];
        consentData = JSON.parse(decodeURIComponent(cookieValue));
      }
      consentData.googleMaps = true;
      const cookieString = [
        `cookieConsent=${encodeURIComponent(JSON.stringify(consentData))}`,
        "path=/",
        "max-age=31536000",
        "SameSite=Lax",
        window.location.protocol === "https:" ? "Secure" : "",
        "partitioned",
      ]
        .filter(Boolean)
        .join("; ");
      document.cookie = cookieString;
      setCookieAccepted(true);
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  if (!isClient || !show) {
    return (
      <div className="relative w-full h-[400px] overflow-hidden shadow-lg bg-gray-100" />
    );
  }

  return (
    <motion.div
      className="relative w-full h-[400px] overflow-hidden shadow-lg group cursor-pointer"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {cookieAccepted ? (
        <>
          <iframe
            title="Platzhirsch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9094444536347!2d9.741196115613785!3d47.48721237917747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c3a06d30d1993%3A0x9b1b64c7aa92d0e5!2sLandstra%C3%9Fe%2011%2C%206911%20Lochau%2C%20Austria!5e0!3m2!1sen!2sat!4v1678817752460!5m2!1sen!2sat"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-[45%] left-1/2 z-20 -translate-x-1/2 -translate-y-full pointer-events-none animate-bounce-slow">
            <Image
              src="/Images/Home/newpreview2.png"
              alt="Custom Marker"
              width={60}
              height={60}
              className="w-[60px] h-auto drop-shadow-md"
            />
          </div>
          <div className="absolute mt-8 top-[52%] left-1/2 z-30 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Landstraße+11,+6911+Lochau,+Austria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#669933] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#669933] transition"
            >
              Get Directions
            </a>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
          <p className="mb-4 text-gray-700 text-center max-w-md">
            Um die Karte anzuzeigen, müssen Sie die Verwendung von Google Maps bestätigen.
          </p>
          <button
            onClick={handleAcceptCookie}
            className="px-4 py-2 bg-[#669933] text-white rounded-lg hover:bg-[#669933] transition-colors"
          >
            Karte aktivieren
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Map;