import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";
import TeamBanner from "@/components/Reusable/teamBanner";
import SmarthomeBannerSection from "@/components/Smarthome/banner";
import VorteileSection from "@/components/Smarthome/Smarthomeloesung";
import Tabs from "@/components/Smarthome/Tabs";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.smarthome_page.api.get_smarthome_page`;


export const metadata = {
  title: "Smarthome",
  description:
    "Mit dem Photovoltaik Service von ÖKOVOLT Deutschland erhalten Sie alles aus einer Hand: Wartung, Reparatur, Reinigung und Instandhaltung Ihrer Solaranlage. Unsere Experten sorgen für eine lange Lebensdauer und optimale Effizienz Ihrer PV-Anlage. Vertrauen Sie auf zuverlässigen Service und nachhaltige Lösungen – von der Inspektion bis zur Reparatur.",
  keywords: [
    "Photovoltaik Service",
    "Wartung Solaranlagen",
    "Solaranlagen Reinigung",
    "PV-Anlage Reparatur",
    "Instandhaltung Solaranlage",
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
      <SmarthomeBannerSection data={data} />
      <Tabs data={data}/>
      <VorteileSection data={data}/>
      <EndSection/>
    </div>
  );
}
