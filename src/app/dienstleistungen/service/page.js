import GreenFeatureSection from "@/components/Reusable/contactInfo";
import TeamBanner from "@/components/Reusable/teamBanner";
import AdvantagesSection from "@/components/Service/AdvantagesSection";
import ServiceSection from "@/components/Service/service";

export default function Home() {
  const data = {
    title: "Service und Wartung",
    img: "/Images/Dienstleistungen/Service/solar-panel-7518786_1280.jpg",
    description: "Ihre Photovoltaikanlage in erfahrenen Händen – mit dem Photovoltaik Service von Oekovolt Deutschland.",
  };

  return (
    <div>
      <TeamBanner data={data} />
       <ServiceSection />
       <AdvantagesSection />
       <GreenFeatureSection />
    </div>
  );
}
