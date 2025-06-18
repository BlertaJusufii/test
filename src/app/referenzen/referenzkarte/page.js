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


export const metadata = {
  title: "Referenzen",
  description:
    "Entdecken Sie die erfolgreichen Photovoltaik-Projekte von ÖKOVOLT Deutschland. Wir bieten maßgeschneiderte, effiziente und umweltfreundliche Lösungen für Gewerbe, Industrie und Privathaushalte. Erfahren Sie mehr über unsere innovativen Projekte und technologischen Entwicklungen, die den Weg zu einer nachhaltigen Energiezukunft ebnen.",
  keywords: [
    "Photovoltaik Referenzen",
    "Nachhaltige Energielösungen",
    "Solarenergie Projekte",
    "Photovoltaik Technologien",
    "ÖKOVOLT Deutschland",
  ],
};

export default async function Home() {

    let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }
  


  return (
    <div>
      <ReferenzkarteBannerSection data={data} />
      <ProjectsSection data={data}/>
      <MapContainer data={data}/>
      <ReferenzkarteBenefitsLayout data={data} />
      <ReferenzkarteTechnologySection data={data} />
      <EndSection/>
    </div>
  );
}
