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

export const metadata = {
  title: "Team",
  description:
    "ÖKOVOLT Deutschland ist ein führender Anbieter von Photovoltaiklösungen, spezialisiert auf Solaranlagen für Unternehmen, Kommunen und Privathaushalte. Mit Fokus auf Innovation und Nachhaltigkeit sorgt ihr Expertenteam für qualitativ hochwertige Installationen, die den wachsenden Energiebedarf der Kunden decken. Vom Beratungsgespräch über die Planung bis hin zur Installation und langfristigen Wartung bietet ÖKOVOLT umfassende, langlebige Energielösungen. Ihr Engagement für erneuerbare Energien, Kundenzufriedenheit und Umweltverantwortung macht sie zu einem zuverlässigen Partner für eine nachhaltige Zukunft.",
  keywords: [
    "Photovoltaik",
    "Nachhaltige Energie",
    "Erneuerbare Energien",
    "Solartechnik",
    "Energieversorgung",
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
      <BannerSection data={data} />
      <InfoSectionTeam data={data} />
      <TeamSection />
      <TeamBenefitsLayout data={data} />
      <TeamAnotherDesign data={data} />
      <EndSection />
    </div>
  );
}
