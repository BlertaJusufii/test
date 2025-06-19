import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import ProjectsSection from "@/components/Referenzkarte/referenzInfo";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import MapContainer from "@/components/Referenzkarte/map";
import TechnologySection from "@/components/Reusable/TechnologySection";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import ReferenzkarteBannerSection from "@/components/Referenzkarte/banner";
import EndSection from "@/components/Reusable/end";
import ReferenzkarteBenefitsLayout from "@/components/Referenzkarte/newsection";
import ReferenzkarteTechnologySection from "@/components/Referenzkarte/endsection";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.referenzstandorde_page.api.get_referenzstandorde_page`;

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
      title: "Referenzkarte | Ökovolt Solartechnik",
      description: "Unsere Photovoltaik-Projekte auf der Karte. Entdecken Sie unsere Referenzstandorte in ganz Deutschland.",
      keywords: [
        "Photovoltaik Referenzkarte",
        "Solarprojekte Karte",
        "PV-Anlagen Standorte",
        "Ökovolt Referenzen",
        "Energielösungen Standorte"
      ],
      openGraph: {
        title: "Referenzkarte | Ökovolt Solartechnik",
        description: "Unsere Photovoltaik-Projekte auf der Karte.",
        images: [{ url: "/images/referenzkarte-og.jpg" }],
      },
    };
  }

  // Process keywords - combine API keywords with defaults if available
  const defaultKeywords = [
    "Photovoltaik Referenzkarte",
    "Solarprojekte Karte",
    "PV-Anlagen Standorte",
    "Ökovolt Referenzen",
    "Energielösungen Standorte"
  ];
  
  const apiKeywords = seoData?.keywords 
    ? [...new Set([...seoData.keywords.split(/,\s*/), ...defaultKeywords])]
    : defaultKeywords;

  return {
    title: seoData?.title || "Referenzkarte | Ökovolt Solartechnik",
    description: seoData?.description || "Unsere Photovoltaik-Projekte auf der Karte. Entdecken Sie unsere Referenzstandorte in ganz Deutschland.",
    keywords: apiKeywords,
    openGraph: {
      title: seoData?.title || "Referenzkarte | Ökovolt Solartechnik",
      description: seoData?.description || "Unsere Photovoltaik-Projekte auf der Karte.",
      url: "https://www.oekovolt.de/referenzkarte",
      siteName: "Ökovolt Solartechnik",
      images: [
        {
          url: seoData?.banner_image 
            ? `${API_BASE_URL}${seoData.banner_image}` 
            : "/images/referenzkarte-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.title || "Referenzkarte | Ökovolt Solartechnik",
      description: seoData?.description || "Unsere Photovoltaik-Projekte auf der Karte.",
      images: [
        seoData?.banner_image 
          ? `${API_BASE_URL}${seoData.banner_image}` 
          : "/images/referenzkarte-og.jpg"
      ],
    },
    alternates: {
      canonical: "https://www.oekovolt.de/referenzkarte",
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
    console.error("Failed to fetch reference map data", error);
  }

 

  return (
    <div>
      <ReferenzkarteBannerSection data={data} />
      <ProjectsSection data={data}/>
      <MapContainer data={data}/>
      <ReferenzkarteBenefitsLayout data={data} />
      <ReferenzkarteTechnologySection data={data} />
      <EndSection />
    </div>
  );
}