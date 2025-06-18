import ServicesBanner from "@/components/Home/about";
import VideoBanner from "@/components/Home/banner";
import PVInquiryForm from "@/components/Home/form";
import SolutionsPage from "@/components/Home/info";
import Partners from "@/components/Home/partners";
import ProjectsSlider from "@/components/Home/projekte";
import RotatingCircleSection from "@/components/Home/welcome";
import EndWhite from "@/components/Reusable/Endwhite";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.home_page.api.get_home_page`;

export default async function Home() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }

  const endd = {
    greentitle: "Solaranlage sichern",
    title: "Jetzt Kontakt aufnehmen & Solaranlage sichern",
    description:
      "Interessiert an einer maßgeschneiderten Photovoltaikanlage für Ihr Zuhause oder Unternehmen? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an! Unser Expertenteam berät Sie persönlich und individuell.",
  };

  return (
    <div>
      <VideoBanner
        videoSrc={"/Images/Navbar/intro.mp4"}
        title={"Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"}
        mobileVideoSrc={
          "Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"
        }
      />
      <ServicesBanner data={data} />
      <RotatingCircleSection data={data} />
      <SolutionsPage data={data} />
      <ProjectsSlider data={data} />
      <Partners data={data} />
      <PVInquiryForm data={data} />
      <EndWhite data={endd} />
    </div>
  );
}
