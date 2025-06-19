import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import BannerSection from '@/components/Direktvermarktung/banner';
import HeroEnergy from '@/components/Direktvermarktung/second';
import SecondCardSection from '@/components/Direktvermarktung/third';
import ThirdCardSection from '@/components/Direktvermarktung/fourth';
import FourthCardSection from '@/components/Direktvermarktung/fifth';
import FifthCardSection from '@/components/Direktvermarktung/six';
import SixthCardSection from '@/components/Direktvermarktung/seven';
import DirektvermarktungFAQ from '@/components/Direktvermarktung/eight';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
import EndSection from '@/components/Reusable/end';

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.direktvermarktung_service_page.api.get_direktvermarktung_page_with_keywords`;

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
      title: "Direktvermarktung von Solarstrom | Ökovolt Solartechnik",
      description: "Professionelle Direktvermarktung Ihres Solarstroms. Maximieren Sie Ihre Erträge durch optimale Vermarktung Ihrer PV-Überschüsse.",
      keywords: [
        "Solarstrom Direktvermarktung",
        "Stromvermarktung PV-Anlage",
        "EEG-Vergütung",
        "Energie Direktvermarktung",
        "Solarstrom verkaufen"
      ],
      openGraph: {
        title: "Direktvermarktung von Solarstrom | Ökovolt Solartechnik",
        description: "Professionelle Direktvermarktung Ihres Solarstroms.",
        images: [{ url: "/images/direktvermarktung-og.jpg" }],
      },
    };
  }

  // Process keywords - use API keywords if available, otherwise fallback
  const apiKeywords = seoData?.keywords 
    ? seoData.keywords.split(/,\s*/) 
    : [
        "Solarstrom Direktvermarktung",
        "Stromvermarktung PV-Anlage",
        "EEG-Vergütung",
        "Energie Direktvermarktung",
        "Solarstrom verkaufen"
      ];

  return {
    title: seoData?.title || "Direktvermarktung von Solarstrom | Ökovolt Solartechnik",
    description: seoData?.description || "Professionelle Direktvermarktung Ihres Solarstroms. Maximieren Sie Ihre Erträge durch optimale Vermarktung Ihrer PV-Überschüsse.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Direktvermarktung von Solarstrom | Ökovolt Solartechnik",
      description: seoData?.description || "Professionelle Direktvermarktung Ihres Solarstroms.",
      url: "https://www.oekovolt.de/direktvermarktung",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/direktvermarktung-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Direktvermarktung von Solarstrom | Ökovolt Solartechnik",
      description: seoData?.description || "Professionelle Direktvermarktung Ihres Solarstroms.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/direktvermarktung-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/direktvermarktung",
    },
  };
}

export default async function DirektvermarktungPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch direktvermarktung data", error);
  }

  return (
    <div>
      <BannerSection data={data} />
      <HeroEnergy data={data} />
      <SecondCardSection data={data} />
      <ThirdCardSection data={data} />
      <FourthCardSection data={data} />
      <FifthCardSection data={data} />
      <SixthCardSection data={data} />
      <DirektvermarktungFAQ data={data} />
      <EndSection/>
    </div>
  );
}