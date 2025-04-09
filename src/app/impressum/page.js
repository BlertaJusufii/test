import PrivacyPolicy from "@/components/Datenschutz/datenschutz";
import Impressum from "@/components/Impressum/impressum";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export default function Home() {
  const data = {
    title: "Impressum",
    img: "/Images/Kontakt/download-2.jpg",
  };

  return (
    <div>
      <BannerSection data={data} />
      <Impressum />
      <GreenFeatureSection />
    </div>
  );
}
