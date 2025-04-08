import GreenFeatureSection from "@/components/Reusable/contactInfo";
import TeamBanner from "@/components/Reusable/teamBanner";
import VorteileSection from "@/components/Smarthome/Smarthomeloesung";
import Tabs from "@/components/Smarthome/Tabs";

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
