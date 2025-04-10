import GreenFeatureSection from "@/components/Reusable/contactInfo";
import TeamBanner from "@/components/Reusable/teamBanner";
import VorteileSection from "@/components/Smarthome/Smarthomeloesung";
import Tabs from "@/components/Smarthome/Tabs";

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

export default function Home() {
  const data = {
    title: "Smarthome",
    img: "/Images/Dienstleistungen/Smartphone/smart-home-3920905_1280.jpg",
    description: "Mit einer Kombination mit unseren Smarthome-Lösungen können Sie Ihren Eigenverbrauch erhöhen.",
  };

  return (
    <div>
      <TeamBanner data={data} />
      <Tabs />
      <VorteileSection />
      <GreenFeatureSection />
    </div>
  );
}
