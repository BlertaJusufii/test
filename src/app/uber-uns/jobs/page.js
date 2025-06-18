import JobsInfo from "@/components/Jobs/jobs";
import JobListings from "@/components/Jobs/jobsposition";
import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import InfoSection from "@/components/Reusable/info";
import TeamBanner from "@/components/Reusable/teamBanner";
import TeamSection from "@/components/Team/team";
import TechnologySection from "@/components/Reusable/TechnologySection";
import AnotherDesign from "@/components/Reusable/AnotherDesign";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import EndSection from "@/components/Reusable/end";
import JobsBannerSection from "@/components/Jobs/banner";
import JobsInfoSection from "@/components/Jobs/info";
import JobsBenefitsLayout from "@/components/Jobs/newsection";
import JobsTechnologySection from "@/components/Jobs/jobssection";
import JobsAnotherDesign from "@/components/Jobs/endsection";
const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.jobs_page.api.get_jobs_de`;


export const metadata = {
  title: "Jobs",
  description:
    "Werden Sie Teil des ÖKOVOLT-Teams und gestalten Sie mit uns die Energiewende! Wir bieten spannende Karrieremöglichkeiten in der Photovoltaikbranche – von der Planung über die Installation bis hin zur Wartung. Nutzen Sie Ihre Chance, in einem dynamischen Umfeld mit modernster Technologie und langfristigen Perspektiven zu arbeiten.",
  keywords: [
    "Solarbranche Karriere",
    "Erneuerbare Energien Jobs",
    "Photovoltaik Stellenangebote",
    "Karriere in der Energiebranche",
    "Nachhaltige Energieversorgung Jobs",
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
      <JobsBannerSection data={data} />
      <JobsInfoSection data={data} />
      <JobListings />
      <JobsBenefitsLayout data={data} />
      <JobsTechnologySection data={data} />
      <JobsInfo data={data} />
      <JobsAnotherDesign data={data} />
      <EndSection/>
    </div>
  );
}
