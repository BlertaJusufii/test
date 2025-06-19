import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import InfoSection from "@/components/Reusable/info";
import TeamBanner from "@/components/Reusable/teamBanner";
import TeamSection from "@/components/Team/team";
import TechnologySection from "@/components/Reusable/TechnologySection";
import AnotherDesign from "@/components/Reusable/AnotherDesign";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import BannerSection from "@/components/Team/banner";
import InfoSectionTeam from "@/components/Team/info";
import EndSection from "@/components/Reusable/end";
import TeamBenefitsLayout from "@/components/Team/section";
import TeamAnotherDesign from "@/components/Team/another";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.team_page.api.get_team_page`;

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
      title: "Unser Team | Ökovolt Solartechnik",
      description: "Lernen Sie unser Expertenteam kennen. Erfahrene Spezialisten für Photovoltaik, die Ihnen maßgeschneiderte Lösungen für nachhaltige Energie bieten.",
      keywords: [
        "Ökovolt Team",
        "Photovoltaik Experten",
        "Solar Fachleute",
        "Energieberater Team",
        "PV-Installateure"
      ],
      openGraph: {
        title: "Unser Team | Ökovolt Solartechnik",
        description: "Lernen Sie unser Expertenteam für Photovoltaik-Lösungen kennen.",
        images: [{ url: "/images/team-og.jpg" }],
      },
    };
  }

  // Process keywords - combine API keywords with defaults if available
  const defaultKeywords = [
    "Ökovolt Team",
    "Photovoltaik Experten",
    "Solar Fachleute",
    "Energieberater Team",
    "PV-Installateure"
  ];
  
  const apiKeywords = seoData?.keywords 
    ? [...new Set([...seoData.keywords.split(/,\s*/), ...defaultKeywords])]
    : defaultKeywords;

  return {
    title: seoData?.title || "Unser Team | Ökovolt Solartechnik",
    description: seoData?.description || "Lernen Sie unser Expertenteam kennen. Erfahrene Spezialisten für Photovoltaik, die Ihnen maßgeschneiderte Lösungen für nachhaltige Energie bieten.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Unser Team | Ökovolt Solartechnik",
      description: seoData?.description || "Lernen Sie unser Expertenteam für Photovoltaik-Lösungen kennen.",
      url: "https://www.oekovolt.de/team",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/team-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Unser Team | Ökovolt Solartechnik",
      description: seoData?.description || "Lernen Sie unser Expertenteam für Photovoltaik-Lösungen kennen.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/team-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/team",
    },
  };
}

export default async function Home() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch team data", error);
  }

  return (
    <div>
      <BannerSection data={data} />
      <InfoSectionTeam data={data} />
      <TeamSection data={data} />
      <TeamBenefitsLayout data={data} />
      <TeamAnotherDesign data={data} />
      <EndSection />
    </div>
  );
}