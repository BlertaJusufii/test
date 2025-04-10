"use client";

import { useState, useEffect, useCallback } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Memoized cookie check function
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

    // More efficient cookie monitoring using MutationObserver
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

      // Enhanced cookie settings
      const cookieString = [
        `cookieConsent=${encodeURIComponent(JSON.stringify(consentData))}`,
        "path=/",
        "max-age=31536000", // 1 year
        "SameSite=Lax",
        window.location.protocol === "https:" ? "Secure" : "",
        "partitioned", // New attribute for cross-site cookies
      ]
        .filter(Boolean)
        .join("; ");

      document.cookie = cookieString;
      setCookieAccepted(true);

      // Force reload to ensure all tracking is properly initialized
      window.location.reload();
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  if (!isClient) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center">
          <div className="w-full h-[300px] md:h-[500px] bg-gray-100" />
        </div>
      </section>
    );
  }

  if (!isClient) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center">
          <div className="w-full h-[300px] md:h-[500px] bg-gray-100" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <div className="text-center mb-10">
            <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
              Unsere Standorte
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
            </h2>
            <h2 className="text-3xl font-semibold text-gray-900 mt-6">
              Regional präsent, überregional aktiv – Finden Sie uns in Ihrer Nähe.
            </h2>
          </div>
        </div>

        <div className="w-full h-[500px] ">
          {cookieAccepted ? (
            <GoogleMapsEmbed
              apiKey="AIzaSyDZRlUwuUyVmqLfnwgSFoy9Lsf5b1R_n5M"
              height="500"
              width="100%"
              mode="place"
              q="Landstraße+11,+6911+Lochau,+Austria"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4">
              <p className="mb-4 text-gray-700 text-center max-w-md">
                Um die Karte anzuzeigen, müssen Sie die Verwendung von Google Maps bestätigen.
              </p>
              <button
                onClick={handleAcceptCookie}
                className="px-4 py-2 bg-[#669933] text-white rounded-lg hover:bg-[#5a8a2d] transition-colors"
              >
                Karte aktivieren
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;
