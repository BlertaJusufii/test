import React from "react";
import TeamBanner from "@/components/Reusable/teamBanner";
import Tabs from "@/components/Photovoltaik/Tabs";
import AnlageSection from "@/components/Photovoltaik/Anlage";
import KomponentenSlider from "@/components/Photovoltaik/Slider";
import ProcessSteps from "@/components/Photovoltaik/Cards";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

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

export default function Home() {
  const data = {
    title: "Photovoltaikanlagen",
    img: "/Images/Dienstleistungen/Photovoltaik/fuschl-am-see-scaled-1.jpg",
    description:
      "Mit einer Photovoltaikanlage von Oekovolt Deutschland können Sie Ihre Energiekosten signifikant senken und gleichzeitig aktiv zur Energiewende beitragen.",
  };


  const end={
    greentitle:"Solaranlage",
    title:"Ihre Solaranlage – Jetzt Kontakt aufnehmen!",
    description:"Interessieren Sie sich für eine maßgeschneiderte Photovoltaikanlage? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an! Unser Team berät Sie gerne individuell & professionell."
  }


  return (
    <div>
      <TeamBanner data={data} />
      <Tabs />
      <AnlageSection />
      <KomponentenSlider />
      <ProcessSteps />
      <GreenFeatureSection data={end}/>
    </div>
  );
}
