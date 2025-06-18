import React from "react";
import Tabs from "@/components/Photovoltaik/Tabs";
import AnlageSection from "@/components/Photovoltaik/Anlage";
import KomponentenSlider from "@/components/Photovoltaik/Slider";
import ProcessSteps from "@/components/Photovoltaik/Cards";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import PhotovoltaikanlageBannerSection from "@/components/Photovoltaik/banner";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import EndSection from "@/components/Reusable/end";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.photovoltaikanlagen_primary_page.api.get_photovoltaikanlagen`;


export const metadata = {
  title: "Photovoltaikanlagen",
  description:
    "Nutzen Sie die Vorteile von Photovoltaikanlagen mit ÖKOVOLT Deutschland und senken Sie Ihre Energiekosten. Ob für Privathaushalte, Mehrfamilienhäuser, Gewerbe oder Landwirtschaft – wir bieten maßgeschneiderte Lösungen für nachhaltige, umweltfreundliche und kostengünstige Solarenergie. Profitieren Sie von Förderprogrammen, reduzieren Sie CO₂-Emissionen und machen Sie sich unabhängig von steigenden Strompreisen.",
  keywords: [
    "Photovoltaikanlage",
    "Energiekosten senken",
    "Solarenergie",
    "CO₂-Emissionen reduzieren",
    "Förderprogramme",
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
      {/* <TeamBanner data={data} /> */}
      <PhotovoltaikanlageBannerSection data={data} />
      <Tabs data={data}/>
      <AnlageSection data={data} />
      <KomponentenSlider data={data}/>
      <ProcessSteps data={data}/>
      <EndSection/>
    </div>
  );
}
