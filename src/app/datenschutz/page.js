import PrivacyPolicy from "@/components/Datenschutz/datenschutz";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export default function Home() {
  const data = {
    title: "Datenschutz",
    img: "/Images/Kontakt/download-2.jpg",
  };

  return (
    <div>
      <BannerSection data={data} />
      <PrivacyPolicy />
      <GreenFeatureSection />
    </div>
  );
}
