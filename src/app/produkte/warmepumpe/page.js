import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import WarmepumpeBanner from '../../../components/Warmepumpe/banner';
import WarmepumpeVorteileSection from '@/components/Warmepumpe/second';
import WarmepumpeSecondCardSection from '@/components/Warmepumpe/third';
import WarmepumpeManufacturerSection from '@/components/Warmepumpe/fourth';
import KontaktFormular from '@/components/Warmepumpe/fifth';
import WarmepumpeFinancingSection from '@/components/Warmepumpe/six';
import WaermepumpePartnerSection from '@/components/Warmepumpe/seven';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
import WarmeBanner from '@/components/Warmepumpe/bannertwo';
import EndSection from '@/components/Reusable/end';

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_waermepumpe_page_with_keywords`;

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
      title: "Wärmepumpen | Ökovolt Solartechnik",
      description: "Effiziente Wärmepumpen für umweltfreundliche Heizlösungen. Senken Sie Ihre Heizkosten und CO₂-Emissionen mit moderner Wärmepumpentechnologie.",
      keywords: [
        "Wärmepumpe",
        "Heizung",
        "Wärmepumpenheizung",
        "Umweltfreundliche Heizung",
        "Energieeffiziente Heizung"
      ],
      openGraph: {
        title: "Wärmepumpen | Ökovolt Solartechnik",
        description: "Effiziente Wärmepumpen für umweltfreundliche Heizlösungen.",
        images: [{ url: "/images/waermepumpe-og.jpg" }],
      },
    };
  }

  // Process keywords - use API keywords if available, otherwise fallback
  const apiKeywords = seoData?.keywords 
    ? seoData.keywords.split(/,\s*/) 
    : [
        "Wärmepumpe",
        "Heizung",
        "Wärmepumpenheizung",
        "Umweltfreundliche Heizung",
        "Energieeffiziente Heizung"
      ];

  return {
    title: seoData?.title || "Wärmepumpen | Ökovolt Solartechnik",
    description: seoData?.description || "Effiziente Wärmepumpen für umweltfreundliche Heizlösungen. Senken Sie Ihre Heizkosten und CO₂-Emissionen mit moderner Wärmepumpentechnologie.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Wärmepumpen | Ökovolt Solartechnik",
      description: seoData?.description || "Effiziente Wärmepumpen für umweltfreundliche Heizlösungen.",
      url: "https://www.oekovolt.de/waermepumpen",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/waermepumpe-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Wärmepumpen | Ökovolt Solartechnik",
      description: seoData?.description || "Effiziente Wärmepumpen für umweltfreundliche Heizlösungen.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/waermepumpe-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/waermepumpen",
    },
  };
}

export default async function WarmepumpePage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch waermepumpe data", error);
  }

 

  return (
    <div>
      <WarmeBanner data={data} />
      <WarmepumpeSecondCardSection data={data} />
      <WarmepumpeVorteileSection data={data} />
      <WarmepumpeManufacturerSection data={data} />
      <KontaktFormular />
      <WarmepumpeFinancingSection data={data} />
      <WaermepumpePartnerSection data={data} />
      <EndSection  />
    </div>
  );
}