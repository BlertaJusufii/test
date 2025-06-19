import React from "react";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import SmartmeterBanner from "@/components/Smartmeter/banner";
import SmartMeterCardSection from "@/components/Smartmeter/second";
import Smartmeter from "@/components/Smartmeter/third";
import Smartmetersectionfour from "@/components/Smartmeter/fourth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import SmartMeterCostSection from "@/components/Smartmeter/fifth";
import EndSection from "@/components/Reusable/end";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_smart_meter_page_with_keywords`;

export async function generateMetadata() {
  // Fetch data for metadata
  let seoData = null;
  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    seoData = json.message;
  } catch (error) {
    console.error("Failed to fetch SEO data", error);
    // Fallback metadata if API fails
    return {
      title: "Smart Meter & Zähler | Ökovolt Solartechnik",
      description: "Moderne Smart Meter für intelligentes Energiemanagement. Optimieren Sie Ihren Energieverbrauch mit digitalen Zählern und Echtzeit-Monitoring.",
      keywords: [
        "Smart Meter",
        "Digitaler Zähler",
        "Energiemanagement",
        "Stromzähler",
        "Intelligente Messsysteme"
      ],
      openGraph: {
        title: "Smart Meter & Zähler | Ökovolt Solartechnik",
        description: "Moderne Smart Meter für intelligentes Energiemanagement.",
        images: [{ url: "/images/smartmeter-og.jpg" }],
      },
    };
  }

  // Process keywords - use API keywords if available, otherwise fallback
  const apiKeywords = seoData?.keywords 
    ? seoData.keywords.split(/,\s*/) 
    : [
        "Smart Meter",
        "Digitaler Zähler",
        "Energiemanagement",
        "Stromzähler",
        "Intelligente Messsysteme"
      ];

  return {
    title: seoData?.title || "Smart Meter & Zähler | Ökovolt Solartechnik",
    description: seoData?.description || "Moderne Smart Meter für intelligentes Energiemanagement. Optimieren Sie Ihren Energieverbrauch mit digitalen Zählern und Echtzeit-Monitoring.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Smart Meter & Zähler | Ökovolt Solartechnik",
      description: seoData?.description || "Moderne Smart Meter für intelligentes Energiemanagement.",
      url: "https://www.oekovolt.de/smartmeter",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/smartmeter-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Smart Meter & Zähler | Ökovolt Solartechnik",
      description: seoData?.description || "Moderne Smart Meter für intelligentes Energiemanagement.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/smartmeter-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/smartmeter",
    },
  };
}

export default async function SmartmeterPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smartmeter data", error);
  }

 

  return (
    <div>
      <SmartmeterBanner data={data} />
      <SmartMeterCardSection data={data} />
      <Smartmeter data={data} />
      <Smartmetersectionfour data={data} />
      <SmartMeterCostSection data={data} />
      <EndSection />
    </div>
  );
}