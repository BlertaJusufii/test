import GreenFeatureSection from "@/components/Reusable/contactInfo";
import TeamBanner from "@/components/Reusable/teamBanner";
import AdvantagesSection from "@/components/Service/AdvantagesSection";
import ServiceSection from "@/components/Service/service";

export const metadata = {
  title: "Service und Wartung",
  description:
    "Mit unseren Smarthome-Lösungen und Batteriesystemen optimieren Sie den Eigenverbrauch Ihrer Photovoltaikanlage. Nutzen Sie Solarenergie rund um die Uhr, reduzieren Sie Ihre Energiekosten, und profitieren Sie von intelligenten Lade- und Notstromlösungen. Mit Smartmeter, Ladestationen und Notstrombox bleiben Sie immer flexibel und unabhängig – auch bei Stromausfällen.",
  keywords: ["Smarthome Lösungen", "Batteriesysteme", "Notstrombox", "Ladestationen", "Smartmeter"],
};

export default function Home() {
  const data = {
    title: "Service und Wartung",
    img: "/Images/Dienstleistungen/Service/solar-panel-7518786_1280.jpg",
    description:
      "Ihre Photovoltaikanlage in erfahrenen Händen – mit dem Photovoltaik Service von Oekovolt Deutschland.",
  };

  const end={
    greentitle:"Smarthome-Lösung",
    title:"Jetzt Termin für Wartung & Service vereinbaren!",
    description:"Möchten Sie Ihre Solaranlage professionell warten oder reparieren lassen? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an. Unser Team berät Sie individuell und kompetent – von der einfachen Reinigung bis zur vollständigen Sanierung Ihrer PV-Anlage."
  }

  return (
    <div>
      <TeamBanner data={data} />
      <ServiceSection />
      <AdvantagesSection />
      <GreenFeatureSection data={end}/>
    </div>
  );
}
