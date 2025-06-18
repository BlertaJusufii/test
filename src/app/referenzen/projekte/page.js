import ProjekteBannerSection from "@/components/Project/banner";
import ProjekteAnotherDesign from "@/components/Project/endsection";
import ProjectsHero from "@/components/Project/info";
import ProjekteTechnologySection from "@/components/Project/newsection";
import ProjekteBenefitsLayout from "@/components/Project/second";
import Vorteil from "@/components/Project/vorteile";
import AnotherDesign from "@/components/Reusable/AnotherDesign";
import TechnologySection from "@/components/Reusable/TechnologySection";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.referenzen_page.api.get_referenzen`;


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
      <ProjekteBannerSection data={data} />
      <ProjectsHero data={data}/>
      <ProjekteTechnologySection data={data} />
      <ProjekteBenefitsLayout data={data} />
      <Vorteil data={data}/>
      {/* <TechnologySection backgroundImage={secondBackgroundImage} /> */}
      <ProjekteAnotherDesign data={data} />
      <EndSection/>
    </div>
  );
}
