import AGComponent from "@/components/Agb/agb";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export default function Home() {
  const data = {
    title: "Allgemeine Geschäfts­bedingungen",
    img: "/Images/Kontakt/download-2.jpg",
  };

  return (
    <div>
      <BannerSection data={data} />
      <AGComponent />
      <GreenFeatureSection />
    </div>
  );
}
