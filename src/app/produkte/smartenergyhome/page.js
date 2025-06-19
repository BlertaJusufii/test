import SmartBanner from "@/components/smartenergyhome/banner";
import HeroEnergy from "@/components/smartenergyhome/hero";
import SmartEnergySection from "@/components/smartenergyhome/smartenergy";
import ThirdPart from "@/components/smartenergyhome/third";
import EnergyOfferSection from "@/components/smartenergyhome/fourth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import EndSection from "@/components/Reusable/end";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.smart_energy_home_page.api.get_smart_energy_page_with_keywords`;

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
      title: "Smart Energy Lösungen | Ökovolt Solartechnik",
      description: "Innovative Smart Energy Lösungen für intelligentes Energiemanagement in Ihrem Zuhause. Energieeffizienz, Nachhaltigkeit und Kosteneinsparung durch moderne Technologie.",
      keywords: [
        "Smart Energy",
        "Energiemanagement",
        "Energieeffizienz",
        "Intelligente Stromnutzung",
        "Nachhaltige Energie"
      ],
      openGraph: {
        title: "Smart Energy Lösungen | Ökovolt Solartechnik",
        description: "Innovative Smart Energy Lösungen für intelligentes Energiemanagement.",
        images: [{ url: "/images/smart-energy-og.jpg" }],
      },
    };
  }

  // Process keywords - use API keywords if available, otherwise fallback
  const apiKeywords = seoData?.keywords 
    ? seoData.keywords.split(/,\s*/) 
    : [
        "Smart Energy",
        "Energiemanagement",
        "Energieeffizienz",
        "Intelligente Stromnutzung",
        "Nachhaltige Energie"
      ];

  return {
    title: seoData?.title || "Smart Energy Lösungen | Ökovolt Solartechnik",
    description: seoData?.description || "Innovative Smart Energy Lösungen für intelligentes Energiemanagement in Ihrem Zuhause. Energieeffizienz, Nachhaltigkeit und Kosteneinsparung durch moderne Technologie.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Smart Energy Lösungen | Ökovolt Solartechnik",
      description: seoData?.description || "Innovative Smart Energy Lösungen für intelligentes Energiemanagement.",
      url: "https://www.oekovolt.de/smart-energy",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/smart-energy-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Smart Energy Lösungen | Ökovolt Solartechnik",
      description: seoData?.description || "Innovative Smart Energy Lösungen für intelligentes Energiemanagement.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/smart-energy-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/smart-energy",
    },
  };
}

export default async function SmartEnergyPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }

  return (
    <div>
      <SmartBanner data={data} />
      <HeroEnergy data={data} />
      <SmartEnergySection data={data} />
      <EnergyOfferSection data={data} />
      <ThirdPart data={data} />
      <EndSection />
    </div>
  );
}