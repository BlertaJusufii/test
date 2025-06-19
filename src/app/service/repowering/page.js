import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import BannerSection from '@/components/Repowering/banner';
import EnhancedCardsSection from '@/components/Repowering/second';
import PhotovoltaikOptimization from '@/components/Repowering/third';
import InverterReplacementSection from '@/components/Repowering/fourth';
import SystemExpansionSection from '@/components/Repowering/fifth';
import SixSection from '@/components/Repowering/six';
import RepoweringSection from '@/components/Repowering/seven';
import ThirdCardSection from '@/components/Repowering/eight';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
import EndSection from '@/components/Reusable/end';

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.photovoltaik_repowering_service_page.api.get_photovoltaik_repowering_page_with_keywords`;

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
      title: "Photovoltaik Repowering | Ökovolt Solartechnik",
      description: "Modernisierung und Leistungssteigerung Ihrer bestehenden Solaranlage. Erhöhen Sie Effizienz und Ertrag durch professionelles Repowering.",
      keywords: [
        "Photovoltaik Repowering",
        "Solaranlage modernisieren",
        "PV-Anlage aufrüsten",
        "Wechselrichter Austausch",
        "Solaranlage optimieren"
      ],
      openGraph: {
        title: "Photovoltaik Repowering | Ökovolt Solartechnik",
        description: "Modernisierung und Leistungssteigerung Ihrer bestehenden Solaranlage.",
        images: [{ url: "/images/repowering-og.jpg" }],
      },
    };
  }

  // Process keywords - use API keywords if available, otherwise fallback
  const apiKeywords = seoData?.keywords 
    ? seoData.keywords.split(/,\s*/) 
    : [
        "Photovoltaik Repowering",
        "Solaranlage modernisieren",
        "PV-Anlage aufrüsten",
        "Wechselrichter Austausch",
        "Solaranlage optimieren"
      ];

  return {
    title: seoData?.title || "Photovoltaik Repowering | Ökovolt Solartechnik",
    description: seoData?.description || "Modernisierung und Leistungssteigerung Ihrer bestehenden Solaranlage. Erhöhen Sie Effizienz und Ertrag durch professionelles Repowering.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Photovoltaik Repowering | Ökovolt Solartechnik",
      description: seoData?.description || "Modernisierung und Leistungssteigerung Ihrer bestehenden Solaranlage.",
      url: "https://www.oekovolt.de/repowering",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/repowering-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Photovoltaik Repowering | Ökovolt Solartechnik",
      description: seoData?.description || "Modernisierung und Leistungssteigerung Ihrer bestehenden Solaranlage.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/repowering-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/repowering",
    },
  };
}

export default async function RepoweringPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch repowering data", error);
  }

  return (
    <div>
      <BannerSection data={data} />
      <PhotovoltaikOptimization data={data} />
      <EnhancedCardsSection data={data} />
      <InverterReplacementSection data={data} />
      <SystemExpansionSection data={data} />
      <SixSection data={data} />
      <RepoweringSection data={data} />
      <ThirdCardSection data={data} />
      <EndSection />
    </div>
  );
}